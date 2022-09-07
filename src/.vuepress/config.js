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
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#2d89ef"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],

    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-7WJY8LHWQZ'} ],
    [
      'script', {}, `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-7WJY8LHWQZ');`
    ],
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
    algolia: {
      apiKey: 'bea1ae4fd8e0fcccb234cbf98969b6bc',
      indexName: 'schierproducts',
      appId: 'BH4D9OD16A',
    },
    nav: [
      {
        text: 'API Reference',
        ariaLabel: 'API Reference Menu',
        items: [
          {
            text: 'Grease Monkey API',
            link: '/grease-monkey/'
          },
          {
            text: 'Territory API',
            link: '/territory/'
          },
        ]
      },
      {
        text: 'SDK\'s',
        ariaLabel: 'SDK\'s Reference Menu',
        items: [
          {
            text: 'Product',
            link: '/sdks/products/'
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
        title: 'SDKs',
        path: '/sdks/',
        collapsable: true,
        children: [
          {
            title: 'Product API',
            path: `/sdks/products/`,
            children: [
              {
                title: `PHP`,
                path: `/sdks/products/php`
              }
            ],
          }
        ]
      },
      {
        title: 'Grease Monkey',
        path: '/grease-monkey/',
        collapsable: true,
        children: [
          {
            title: 'About Grease Monkey API',
            path: '/grease-monkey/',
          },
          '/grease-monkey/users',
          {
            title: 'Projects',
            path: '/grease-monkey/projects/',
            collapsable: true,
            children: [
              '/grease-monkey/projects/get-projects',
              '/grease-monkey/projects/get-project-by-id',
              '/grease-monkey/projects/delete-project',
            ],
          },
          {
            title: 'Kitchen Fixtures',
            path: '/grease-monkey/kitchen-fixtures/',
            collapsable: true,
            children: [
              '/grease-monkey/kitchen-fixtures/get-kitchen-fixtures-from-project-by-id',
              '/grease-monkey/kitchen-fixtures/get-kitchen-fixture-types',
              '/grease-monkey/kitchen-fixtures/get-kitchen-fixture-by-id',
              '/grease-monkey/kitchen-fixtures/create-kitchen-fixture',
              '/grease-monkey/kitchen-fixtures/update-kitchen-fixture',
              '/grease-monkey/kitchen-fixtures/delete-kitchen-fixture',
            ],
          },
          {
            title: 'Spaces',
            path: '/grease-monkey/spaces/',
            collapsable: true,
            children: [
              '/grease-monkey/spaces/get-spaces-from-project-by-id',
              '/grease-monkey/spaces/get-space-by-id',
              '/grease-monkey/spaces/create-space',
              '/grease-monkey/spaces/update-space',
              '/grease-monkey/spaces/delete-space',
            ],
          },
          '/grease-monkey/jurisdictions',
          '/grease-monkey/search',
          {
            title: 'Other Resources',
            path: '/grease-monkey/other-resources/',
            // collapsable: false,
            children: [
              '/grease-monkey/other-resources/jurisdiction-contacts',
              '/grease-monkey/other-resources/notes',
              '/grease-monkey/other-resources/product-accessories',
            ],
          }
        ]
      },
      {
        title: 'Territory',
        path: '/territory/',
      },
      {
        title: 'Product',
        path: '/product/',
        children: [
          {
            title: 'About Product API',
            path: '/product/',
          },
          '/product/product-types',
          '/product/products',
          '/product/collections',
          '/product/processing',
          {
            title: 'Other Resources',
            path: '/product/other-resources/',
            // collapsable: false,
            children: [
              '/product/other-resources/flow-rating',
            ],
          }
        ]
      },
    ],
  },
  plugins: {
    '@vuepress/plugin-back-to-top': {},
    '@vuepress/medium-zoom': {
      selector: '.theme-default-content img'
    },
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    'tabs': {},
  }
}
