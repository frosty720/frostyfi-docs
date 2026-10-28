import fs from 'node:fs'
import path from 'node:path'
import type { MetadataRoute } from 'next'
import { DEFAULT_LOCALE, LOCALES, SITE_URL } from './site'

/** Every page lives under its locale prefix: en → /en/docs/faq, es → /es/docs/faq. */
function localizedUrl(locale: string, route: string): string {
	return route === '/' ? `${SITE_URL}/${locale}` : `${SITE_URL}/${locale}${route}`
}

/**
 * Routes are derived from the English MDX files, so a new doc page appears in
 * the sitemap on the next build with no edit here.
 */
function routes(): string[] {
	const dir = path.join(process.cwd(), 'content', DEFAULT_LOCALE, 'docs')
	const slugs = fs
		.readdirSync(dir)
		.filter((file) => file.endsWith('.mdx'))
		.map((file) => file.slice(0, -'.mdx'.length))
		.sort()
	return ['/', ...slugs.map((slug) => `/docs/${slug}`)]
}

/**
 * Every locale of a page lists every other locale as an alternate — that
 * reciprocity is what makes Google index the translations as their own
 * results rather than as duplicates of the English page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
	return routes().flatMap((route) => {
		const languages: Record<string, string> = Object.fromEntries(LOCALES.map((alt) => [alt, localizedUrl(alt, route)]))
		languages['x-default'] = localizedUrl(DEFAULT_LOCALE, route)
		return LOCALES.map((locale) => ({
			url: localizedUrl(locale, route),
			alternates: { languages },
			changeFrequency: 'weekly' as const,
			priority: route === '/' ? 1 : 0.8,
		}))
	})
}
