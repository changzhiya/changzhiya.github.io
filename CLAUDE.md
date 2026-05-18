# changzhiya 个人主页

基于 VitePress 的个人主页，部署在 GitHub Pages (`changzhiya.github.io`)。

## 技术栈

- VitePress 1.6.x (Vue 3 + Vite)
- Markdown + Vue SFC
- 自定义 CSS（暗色模式默认、浅色/暗色双主题）
- GitHub Actions 自动部署

## 项目结构

```
/
├── index.md                  ← 首页（hero + 精选项目）
├── about.md                  ← 关于（头像、技术栈、经历、联系）
├── projects.md               ← 项目（来自 GitHub 仓库）
├── .vitepress/
│   ├── config.ts             ← 站点配置（zh-CN、暗色默认、favicon）
│   └── theme/
│       ├── index.ts           ← 主题入口
│       └── custom.css         ← 全局样式、变量、排版、装饰
├── public/
│   ├── avatar.jpg             ← 头像
│   └── favicon.svg            ← 小猫卡通 SVG favicon
├── .github/workflows/
│   └── deploy.yml             ← GitHub Actions 部署
├── README.md
└── CLAUDE.md
```

## 关键配置

- `appearance: 'dark'` — 默认暗色模式
- `srcExclude: ['CLAUDE.md', 'docs/**']` — 排除非公开文件
- `.nojekyll` — 防止 GitHub Pages 用 Jekyll 覆盖 VitePress

## 设计规范

- 3 页：首页、关于、项目。无博客
- 风格：极简黑白灰、排版驱动、充裕留白
- 完整规范：`docs/superpowers/specs/2026-05-17-personal-homepage-design.md`

## 修改流程

每次修改前先理解现有设计，改动后 `npx vitepress build` 验证，然后 `git commit && git push` 自动部署。

用户偏好：中文沟通、简洁实用、不在无用户确认下删除内容。
