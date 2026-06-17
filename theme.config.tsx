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
    link: 'https://discord.gg/RhSxZrGBF3',
  },
  footer: {
    text: '© 2026 FrostyLabs',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="FrostyFi - Web3 AI Workflow Automation Platform" />
    </>
  ),
}

export default config