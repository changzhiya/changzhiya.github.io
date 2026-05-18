import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '我的主页',
  description: '个人主页',

  srcExclude: ['CLAUDE.md', 'docs/**'],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '项目', link: '/projects' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
    ],
  },
})
