import type { Metadata } from 'next'
import Script from 'next/script'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import 'nextra-theme-docs/style.css'
import { DEFAULT_DESCRIPTION, LOCALE_NAMES, SITE_NAME, SITE_URL } from '../site'

// Same stream as the marketing site (frostylabs.ai) so docs traffic and
// landing traffic land in one GA4 property. Hardcoded rather than env-gated
// on purpose: a measurement ID is public, and gating it behind an env var is
// how the app ended up untracked.
const GA_MEASUREMENT_ID = 'G-X9XDDBT2WM'

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: { default: SITE_NAME, template: `%s – ${SITE_NAME}` },
	description: DEFAULT_DESCRIPTION,
	openGraph: { title: SITE_NAME, description: DEFAULT_DESCRIPTION },
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/resources/frostylogo.png', type: 'image/png' },
		],
		apple: '/resources/frostylogo.png',
	},
}

const logo = (
	<span style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
		{/* eslint-disable-next-line @next/next/no-img-element */}
		<img src="/resources/frostylogo.png" alt="FrostyLabs logo" width={36} height={36} style={{ borderRadius: '0.5rem' }} />
		<span
			style={{
				fontFamily: "'Space Grotesk', sans-serif",
				fontWeight: 600,
				fontSize: '1.125rem',
				letterSpacing: '-0.025em',
				background: 'linear-gradient(90deg, #67e8f9, #a78bfa, #f0abfc)',
				WebkitBackgroundClip: 'text',
				backgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				color: 'transparent',
			}}
		>
			FrostyLabs
		</span>
	</span>
)

const telegramIcon = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-label="Telegram">
		<path d="m9.78 18.65.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
	</svg>
)

const footer = (
	<Footer>
		<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.875rem' }}>
				<a href="https://frostylabs.ai" target="_blank" rel="noreferrer">Website</a>
				<a href="https://app.frostylabs.ai" target="_blank" rel="noreferrer">Launch App</a>
				<a href="https://t.me/FrostyLabsAI" target="_blank" rel="noreferrer">Telegram</a>
				<a href="https://x.com/FrostyLabsAi" target="_blank" rel="noreferrer">X / Twitter</a>
			</div>
			<span>© 2026 FrostyLabs · Agents that get paid, on-chain.</span>
		</div>
	</Footer>
)

type LayoutProps = Readonly<{
	children: ReactNode
	params: Promise<{ lang: string }>
}>

const RootLayout: FC<LayoutProps> = async ({ children, params }) => {
	const { lang } = await params
	const pageMap = await getPageMap(`/${lang}`)
	return (
		<html lang={lang} dir="ltr" suppressHydrationWarning>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" />
			</Head>
			<body>
				<Layout
					navbar={
						<Navbar
							logo={logo}
							projectLink="https://github.com/FrostyLabsAi/frostyflow"
							chatLink="https://t.me/FrostyLabsAI"
							chatIcon={telegramIcon}
						/>
					}
					footer={footer}
					docsRepositoryBase="https://github.com/FrostyLabsAi/frostyflow/tree/main/docs-site"
					i18n={LOCALE_NAMES}
					sidebar={{ defaultMenuCollapseLevel: 2 }}
					copyPageButton={false}
					pageMap={pageMap}
				>
					{children}
				</Layout>
				<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_MEASUREMENT_ID}');
					`}
				</Script>
			</body>
		</html>
	)
}

export default RootLayout
