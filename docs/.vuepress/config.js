module.exports = {
  theme: 'cosmos',
  title: 'ParaLink Network Documentation',
  locales: {
    '/': {
      lang: 'en-US',
    },
  },
  base: process.env.VUEPRESS_BASE || '/',
  themeConfig: {
    repo: 'ParaLinkNetwork/paralink-node',
    docsRepo: 'ParaLinkNetwork/paralink-docs',
    docsDir: 'docs',
    editLinks: true,
    custom: true,
    logo: {
      src: 'https://paralink.network/images/logo.png',
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
        text: 'General chat for all things ParaLink',
        url: '',
        bg: 'linear-gradient(221.79deg, #2eb1f3 -1.08%, #0289cc 95.88%)',
        logo: 'telegram',
      },
      github: {
        title: 'Found an Issue?',
        text: 'Help us improve this page by suggesting edits on GitHub.',
        url: 'https://github.com/ParaLinkNetwork/paralink-docs',
        bg: '#F8F9FC',
      },
    },
    footer: {
      logo: 'https://paralink.network/images/logo.png',
      textLink: {
        text: '',
        url: 'https://paralink.network',
      },
      services: [
        {
          service: 'github',
          url: 'https://github.com/ParaLinkNetwork',
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
              title: 'Website',
              url: 'https://paralink.network',
            },
            {
              title: 'Blog',
              url: 'https://blog.paralink.network',
            },
          ],
        },
        {
          title: 'Community',
          children: [
            {
              title: 'Telegram Group',
              url: 'https://paralink.network',
            },
            {
              title: 'Developer Discord',
              url: 'https://paralink.network',
            },
          ],
        },
      ],
    },
  },
};
