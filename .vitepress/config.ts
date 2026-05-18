import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'changzhiya',
  description: '个人主页',

  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.svg' }],
  ],

  srcExclude: ['CLAUDE.md', 'docs/**'],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '项目', link: '/projects' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/changzhiya' },
    ],
  },
})