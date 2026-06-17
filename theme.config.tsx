import { ReactNode } from 'react'

const config = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/resources/frostylogo.png" alt="FrostyLabs logo" width={36} height={36} style={{ borderRadius: '0.5rem' }} />
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1.125rem', letterSpacing: '-0.025em', background: 'linear-gradient(90deg, #67e8f9, #a78bfa, #f0abfc)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>FrostyLabs</span>
    </span>
  ),
  project: {
    link: 'https://github.com/FrostyLabsAi/frostyflow',
  },
  docsRepositoryBase: 'https://github.com/FrostyLabsAi/frostyflow/tree/main/docs-site',
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  chat: {
    link: 'https://t.me/+ZX21TSI9AaY4ODUx',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-label="Telegram">
        <path d="m9.78 18.65.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
      </svg>
    ),
  },
  footer: {
    text: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.875rem' }}>
          <a href="https://frostylabs.ai" target="_blank" rel="noreferrer">Website</a>
          <a href="https://flow.frostylabs.ai" target="_blank" rel="noreferrer">Launch App</a>
          <a href="https://t.me/+ZX21TSI9AaY4ODUx" target="_blank" rel="noreferrer">Telegram</a>
          <a href="https://x.com/FrostyLabsAi" target="_blank" rel="noreferrer">X / Twitter</a>
        </div>
        <span>© 2026 FrostyLabs · Agents that get paid, on-chain.</span>
      </div>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="FrostyFi - Web3 AI Workflow Automation Platform" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" href="/resources/frostylogo.png" />
      <link rel="apple-touch-icon" href="/resources/frostylogo.png" />
      <meta property="og:title" content="FrostyFi Docs" />
      <meta property="og:description" content="Build AI agents that think, act on-chain, and get paid." />
    </>
  ),
}

export default config