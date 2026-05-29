import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { routing } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { getPost, listSlugs, getAvailableLocales } from '@/lib/blog'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'

const CANONICAL_LOCALE = 'pt-BR'

export async function generateStaticParams() {
  const slugs = await listSlugs()
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = (await getPost(slug, locale)) ?? (await getPost(slug, CANONICAL_LOCALE))
  if (!post) return {}
  const baseUrl = 'https://bacco-erp.com'
  const url = `${baseUrl}/${locale}/blog/${slug}`
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.coverAlt ?? post.title }],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}/blog/${slug}`])
      ),
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound()

  const available = await getAvailableLocales(slug, routing.locales)
  if (available.length === 0) notFound()

  const fallbackUsed = !available.includes(locale)
  const sourceLocale = fallbackUsed ? CANONICAL_LOCALE : locale
  const post = await getPost(slug, sourceLocale)
  if (!post) notFound()

  const t = await getTranslations({ locale, namespace: 'blog' })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://bacco-erp.com${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Bacco ERP',
      logo: { '@type': 'ImageObject', url: 'https://bacco-erp.com/icon.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://bacco-erp.com/${locale}/blog/${slug}` },
    keywords: post.tags.join(', '),
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1 pt-24 pb-20">
        <article className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('post.backToList')}
          </Link>

          {fallbackUsed && (
            <div className="mb-8 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-700">
              {t('post.fallbackNotice')}
            </div>
          )}

          <header className="mb-10">
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 text-balance leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">{post.description}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(locale)}</time>
              <span>·</span>
              <span>{t('post.readingTime', { minutes: post.readingTime })}</span>
            </div>
          </header>

          <a
            href={post.cover}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[16/10] mb-10 rounded-xl overflow-hidden bg-muted cursor-zoom-in"
          >
            <Image
              src={post.cover}
              alt={post.coverAlt ?? post.title}
              fill
              priority
              className={post.coverFit === 'contain' ? 'object-contain' : 'object-cover'}
              sizes="(max-width: 1024px) 100vw, 768px"
            />
          </a>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-balance prose-a:text-primary prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </div>

          {post.authorBio && (
            <aside className="mt-12 p-6 rounded-xl border border-border bg-card">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{post.author}</span> — {post.authorBio}
              </p>
            </aside>
          )}
        </article>
      </main>
      <Footer />
    </div>
  )
}
