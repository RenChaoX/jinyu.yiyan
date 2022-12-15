export default {
  title: '瑾瑜·一言',
  description: 'Just playing around.',
  base: '/jinyu.yiyan/',
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '一言', link: '/articles/' },
      { text: '看我', link: '/about/' }
    ],
    footer: {
      message: '迎着风，拥抱彩虹！',
      copyright: 'Copyright © 202212-renchao'
    },
    sidebar: {
      '/articles/': [
        {
          text: '前端基础',
          collapsible: true,
          collapsed: true,
          items: [
            // This shows `/config/index.md` page.
            { text: 'Web Component', link: '/articles/webcomponent' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        },
        {
          text: '设计模式',
          collapsible: true,
          collapsed: true,
          items: [
            // This shows `/config/index.md` page.
            { text: 'Web Component', link: '/articles/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        },
        {
          text: '算法',
          collapsible: true,
          collapsed: true,
          items: [
            // This shows `/config/index.md` page.
            { text: 'Web Component', link: '/articles/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        },
        {
          text: '编译原理',
          collapsible: true,
          collapsed: true,
          items: [
            // This shows `/config/index.md` page.
            { text: 'Web Component', link: '/articles/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        },
        {
          text: '随笔',
          collapsible: true,
          collapsed: true,
          items: [
            // This shows `/config/index.md` page.
            { text: 'Web Component', link: '/articles/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        }
      ]
    }
  },
}
