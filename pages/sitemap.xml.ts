import fs from 'node:fs'
import path from 'node:path'
import type { GetServerSideProps } from 'next'

const SITE = 'https://docs.frostylabs.ai'

/** Must stay in sync with `i18n.locales` in next.config.mjs. */
const LOCALES = ['en', 'es', 'fr', 'ja', 'ko', 'zh'] as const
const DEFAULT_LOCALE = 'en'

/**
 * Next's i18n routing leaves the default locale unprefixed:
 *   en → /docs/faq        es → /es/docs/faq
 */
function localizedUrl(locale: string, route: string): string {
	const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`
	if (route === '/') return `${SITE}${prefix || '/'}`
	return `${SITE}${prefix}${route}`
}

/**
 * Routes are derived from the English MDX files, so a new doc page appears in
 * the sitemap on the next request with no edit here.
 */
function routes(): string[] {
	const dir = path.join(process.cwd(), 'pages', 'docs')
	const suffix = `.${DEFAULT_LOCALE}.mdx`
	const slugs = fs
		.readdirSync(dir)
		.filter((file) => file.endsWith(suffix))
		.map((file) => file.slice(0, -suffix.length))
		.sort()
	return ['/', ...slugs.map((slug) => `/docs/${slug}`)]
}

/**
 * Every locale of a page lists every other locale as an alternate — that
 * reciprocity is what makes Google index the translations as their own
 * results rather than as duplicates of the English page.
 */
function buildSitemap(): string {
	const entries = routes().flatMap((route) =>
		LOCALES.map((locale) => {
			const alternates = LOCALES.map(
				(alt) =>
					`\t\t<xhtml:link rel="alternate" hreflang="${alt}" href="${localizedUrl(alt, route)}"/>`,
			).join('\n')
			return [
				'\t<url>',
				`\t\t<loc>${localizedUrl(locale, route)}</loc>`,
				alternates,
				`\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(DEFAULT_LOCALE, route)}"/>`,
				`\t\t<changefreq>weekly</changefreq>`,
				`\t\t<priority>${route === '/' ? '1.0' : '0.8'}</priority>`,
				'\t</url>',
			].join('\n')
		}),
	)

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	res.setHeader('Content-Type', 'application/xml; charset=utf-8')
	res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600')
	res.write(buildSitemap())
	res.end()
	return { props: {} }
}

export default function Sitemap() {
	return null
}
