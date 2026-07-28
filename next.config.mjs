import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  flexsearch: true,
})

export default withNextra({
  i18n: {
    locales: ['en', 'es', 'fr', 'ja', 'ko', 'zh'],
    defaultLocale: 'en',
  },
})