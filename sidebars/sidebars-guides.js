module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'Home',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'link',
          label: 'Introduction',
          href: '/docs/home/introduction',
        },
        {
          type: 'link',
          label: 'How icmarket works',
          href: '/docs/home/introduction#how-icmarket-works',
        },

        {
          type: 'link',
          label: 'How to guide',
          href: '/docs/home/introduction#how-to-guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Product Integration Guides',
      items: ['install-wallet-icmarket', 'connect-your-wallet', 'buy-ndp-icp'],
    },
    {
      type: 'category',
      label: 'Buying NFTs',
      items: ['buy-fixed-price-nfts'],
    },
    {
      type: 'category',
      label: 'Selling NFTs',
      items: [
        'selling-nfts',
        'update-reserve-price',
        'how-to-cancel-your-listing',
      ],
    },
    {
      type: 'category',
      label: 'FAQs',
      items: ['faq-icmarket', 'glossary'],
    },
  ],
};
