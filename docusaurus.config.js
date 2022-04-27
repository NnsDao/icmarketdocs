/* eslint-disable */
const {
  tailwindPlugin,
  webpackPlugin,
  posthogPlugin,
} = require('./src/plugins');

const isDev = process.env.NODE_ENV === 'development';

const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/nnsdao/icmarketdocs',
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Icmarket Docs',
  tagline: 'NFTs & IC market, ready to launch 🚀',
  url: 'https://docs.icmarket.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'icmarket daos', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  clientModules: [require.resolve('./src/css/tailwind.css')],
  themeConfig: {
    image: '/collection.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Icmarket Docs',
        src: '/icmarket.png',
      },
      items: [
        {
          label: 'Home',
          to: '/',
          activeBaseRegex: '(^/docs)',
        },
        {
          label: 'Guides',
          to: '/guides/install-wallet-icmarket',
        },
        {
          label: 'Buying',
          to: '/guides/buy-fixed-price-nfts',
        },
        {
          label: 'Selling',
          to: '/selling/selling-nfts',
        },
        {
          label: 'Developers',
          to: '/guides/dev/dev-manual',
        },
      ],
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: [
        'dart',
        'ruby',
        'groovy',
        'kotlin',
        'java',
        'swift',
        'objectivec',
      ],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    algolia: process.env.ALGOLIA_API_KEY && {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'prod_docs',
      contextualSearch: true,
      appId: process.env.ALGOLIA_APP_ID,
      searchParameters: {},
    },
    posthog: {
      apiKey: process.env.POSTHOG_API_KEY,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/main',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars/sidebars-docs.js'),
          sidebarCollapsible: false,
        },
        blog: false,
      },
    ],
  ],
  plugins: [
    tailwindPlugin,
    webpackPlugin,
    posthogPlugin,
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/guides',
        routeBasePath: 'guides',
        id: 'guides',
        sidebarPath: require.resolve('./sidebars/sidebars-guides.js'),
        sidebarCollapsible: false,
      },
    ],
  ],
};
