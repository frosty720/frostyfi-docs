export { proxy } from 'nextra/locales'

export const config = {
	// Everything except Next internals, the search index and real files (any
	// path with a dot: /resources/*, /screenshots/*, /favicon.ico, /sitemap.xml),
	// which must be served as-is instead of being redirected under a locale.
	matcher: ['/((?!api|_next/static|_next/image|_pagefind|.*\\..*).*)'],
}
