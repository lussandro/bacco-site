import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { listPosts } from '@/lib/blog'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'

const BLOG_LOCALE = 'pt-BR'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  const baseUrl = 'https://bacco-erp.com'
  return {
    title: t('listing.metaTitle'),
    description: t('listing.metaDescription'),
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${baseUrl}/${l}/blog`])
      ),
    },
  }
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }
  const t = await getTranslations({ locale, namespace: 'blog' })
  const posts = await listPosts(BLOG_LOCALE)
  const showLocaleNotice = locale !== BLOG_LOCALE

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">{t('listing.badge')}</Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">{t('listing.title')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('listing.subtitle')}</p>
          </div>

          {showLocaleNotice && (
            <div className="mb-8 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-700 text-center">
              {t('listing.localeNotice')}
            </div>
          )}

          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">{t('listing.empty')}</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={{ pathname: '/blog/[slug]', params: { slug: post.slug } }}
                  className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[16/10] bg-muted">
                    <Image
                      src={post.cover}
                      alt={post.coverAlt ?? post.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(locale)}</time>
                      <span>·</span>
                      <span>{t('post.readingTime', { minutes: post.readingTime })}</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.description}</p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
