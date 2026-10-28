import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/',
})

export default withNextra({
  i18n: {
    locales: ['en', 'es', 'fr', 'ja', 'ko', 'zh'],
    defaultLocale: 'en',
  },
})
