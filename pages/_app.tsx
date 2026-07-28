import type { AppProps } from 'next/app'
import Script from 'next/script'

// Same stream as the marketing site (frostylabs.ai) so docs traffic and
// landing traffic land in one GA4 property. Hardcoded rather than env-gated
// on purpose: a measurement ID is public, and gating it behind an env var is
// how the app ended up untracked.
const GA_MEASUREMENT_ID = 'G-X9XDDBT2WM'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${GA_MEASUREMENT_ID}');
				`}
			</Script>
			<Component {...pageProps} />
		</>
	)
}
