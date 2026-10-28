export const SITE_URL = 'https://docs.frostylabs.ai'
export const SITE_NAME = 'FrostyFi Docs'
export const DEFAULT_DESCRIPTION = 'FrostyFi - Web3 AI Workflow Automation Platform'

/** Must stay in sync with `i18n.locales` in next.config.mjs. */
export const LOCALES = ['en', 'es', 'fr', 'ja', 'ko', 'zh'] as const
export const DEFAULT_LOCALE = 'en'

export const LOCALE_NAMES = [
	{ locale: 'en', name: 'English' },
	{ locale: 'es', name: 'Español' },
	{ locale: 'fr', name: 'Français' },
	{ locale: 'ja', name: '日本語' },
	{ locale: 'ko', name: '한국어' },
	{ locale: 'zh', name: '中文' },
]
