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

## 工作范围

未来工作聚焦：

- **网站维护** — 更新内容（经历、项目、联系方式等），修复 bug，确保部署正常
- **前端设计修改** — 调整排版、配色、布局、动效、装饰元素，保持极简黑白灰风格
- 不新增页面，在现有 3 页框架内迭代

## 修改流程

1. 阅读对应文件，理解现有设计和代码结构
2. 修改代码（CSS 变量 > 全局样式 > 页面 scoped 样式 > 内容）
3. `npx vitepress build` 验证无报错
4. `git commit -m "<type>: <中文描述>"` && `git push`，GitHub Actions 自动部署

提交类型：`feat`（新增）、`fix`（修复）、`refactor`（重构）、`chore`（杂项）、`docs`（文档）

## 设计原则

- 极简黑白灰，排版驱动，充裕留白，克制的装饰
- 暗色模式为首选，浅色模式保持可用
- CSS 变量统一管理颜色、阴影、间距
- 不引入新依赖，纯 CSS + VitePress 内置能力

## 用户偏好

- 中文沟通，简洁直接
- 修改前给出方案确认，不擅自删除内容
- 改动后自动构建推送部署
