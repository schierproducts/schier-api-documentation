const { description, repository } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Schier Products Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  dest: 'dist',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#008752' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    logo: '/assets/img/schier-logo-pioneer.svg',
    // algolia: {
    //   apiKey: 'd47b768e5920983964f1fbbca40b3611',
    //   indexName: 'documentation-pages'
    // },
    nav: [
      {
        text: 'API Reference',
        ariaLabel: 'API Reference Menu',
        items: [
          {
            text: 'Grease Monkey API',
            link: '/grease-monkey/'
          },
        ]
      },
      {
        text: 'Packages',
        ariaLabel: 'Packages Menu',
        items: [
          {
            text: 'Product API Wrapper',
            link: 'https://github.com/schierproducts/schier-products-api'
          },
        ]
      },
      {
        text: 'Links',
        ariaLabel: 'Links Menu',
        items: [
          {
            text: 'Product API',
            link: 'https://api.schierproducts.com'
          },
          {
            text: 'Grease Monkey',
            link: 'https://app.greasemonkeysizing.com'
          }
        ]
      },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Documentation Home',
        path: '/',
        collapsable: false,
      },
      {
        title: 'Getting Started',
        path: '/basics/',
        collapsable: false,
        children: [
          '/basics/',
          '/basics/errors',
          '/basics/pagination',
        ],
      },
      {
        title: 'Grease Monkey',
        path: '/grease-monkey/',
        collapsable: false,
        children: [
          {
            title: 'About Grease Monkey API',
            path: '/grease-monkey/',
          },
          '/grease-monkey/users',
        ]
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
