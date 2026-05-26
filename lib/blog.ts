import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

export interface BlogPostMeta {
  slug: string
  locale: string
  title: string
  description: string
  date: string
  author: string
  authorBio?: string
  cover: string
  coverAlt?: string
  tags: string[]
  readingTime: number
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

async function readPostFile(slug: string, locale: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, slug, `${locale}.mdx`)
  try {
    const raw = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(raw)
    return {
      slug,
      locale,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      authorBio: data.authorBio,
      cover: data.cover,
      coverAlt: data.coverAlt,
      tags: data.tags ?? [],
      readingTime: data.readingTime ?? estimateReadingTime(content),
      content,
    }
  } catch {
    return null
  }
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}

export async function getPost(slug: string, locale: string): Promise<BlogPost | null> {
  return readPostFile(slug, locale)
}

export async function listSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true })
    return entries.filter((e) => e.isDirectory()).map((e) => e.name)
  } catch {
    return []
  }
}

export async function listPosts(locale: string): Promise<BlogPostMeta[]> {
  const slugs = await listSlugs()
  const posts = await Promise.all(slugs.map((slug) => readPostFile(slug, locale)))
  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content, ...meta }) => meta)
}

export async function getAvailableLocales(slug: string, allLocales: readonly string[]): Promise<string[]> {
  const checks = await Promise.all(
    allLocales.map(async (loc) => {
      try {
        await fs.access(path.join(BLOG_DIR, slug, `${loc}.mdx`))
        return loc
      } catch {
        return null
      }
    })
  )
  return checks.filter((l): l is string => l !== null)
}
