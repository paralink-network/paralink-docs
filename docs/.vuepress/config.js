module.exports = {
  theme: 'cosmos',
  title: 'Lattice Link Documentation',
  locales: {
    '/': {
      lang: 'en-US',
    },
  },
  base: process.env.VUEPRESS_BASE || '/',
  themeConfig: {
    repo: 'LatticeLink/lattice-node',
    docsRepo: 'LatticeLink/lattice-docs',
    docsDir: 'docs',
    editLinks: true,
    custom: true,
    logo: {
      src: 'https://lattice.link/images/logo.png',
    },
    topbar: {
      banner: false,
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: 'Documentation',
          children: [
            {
              title: 'Introduction',
              directory: true,
              path: '/introduction',
            },
            {
              title: 'Whitepaper',
              directory: true,
              path: '/whitepaper',
            },
          ],
        },
      ],
    },
    gutter: {
      title: 'Help & Support',
      editLink: true,
      chat: {
        title: 'Developer Discord',
        text: 'For technical-related discussions and queries',
        url: '',
        bg: 'linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)',
      },
      forum: {
        title: 'Telegram Group',
        text: 'General chat for all things Lattice Link',
        url: '',
        bg: 'linear-gradient(221.79deg, #2eb1f3 -1.08%, #0289cc 95.88%)',
        logo: 'telegram',
      },
      github: {
        title: 'Found an Issue?',
        text: 'Help us improve this page by suggesting edits on GitHub.',
        url: 'https://github.com/LatticeLink/lattice-docs',
        bg: '#F8F9FC',
      },
    },
    footer: {
      logo: 'https://lattice.link/images/logo.png',
      textLink: {
        text: '',
        url: 'https://lattice.link',
      },
      services: [
        {
          service: 'github',
          url: '',
        },
        {
          service: 'twitter',
          url: '',
        },
        {
          service: 'telegram',
          url: '',
        },
        {
          service: 'discord',
          url: '',
        },
        {
          service: 'medium',
          url: '',
        },
      ],
      smallprint:
        '',
      links: [
        {
          title: 'Links',
          children: [
            {
              title: 'Lattice Link Website',
              url: 'https://lattice.link',
            },
          ],
        },
        {
          title: 'Community',
          children: [
            {
              title: 'Telegram Group',
              url: 'https://lattice.link',
            },
            {
              title: 'Developer Discord',
              url: 'https://lattice.link',
            },
            {
              title: 'Lattice Link Blog',
              url: 'https://lattice.link',
            },
          ],
        },
      ],
    },
  },
};
