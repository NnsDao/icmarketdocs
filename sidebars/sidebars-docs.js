module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'Welcome',
      items: [
        'home/introduction',
        {
          type: 'link',
          label: 'How icmarket works',
          href: '#How-icmarket-works',
        },
        {
          type: 'link',
          label: 'How to guide',
          href: '#how-to-guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Product Integration Guides',
      items: [
        {
          type: 'link',
          label: 'Subscribing to server events',
          href: '/guides/subscribing-to-server-events',
        },
      ],
    },
  ],
};
