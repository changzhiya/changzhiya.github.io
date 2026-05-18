# changzhiya.github.io

<p align="center">
  <img src="public/favicon.svg" width="96" alt="logo" />
</p>

个人主页，基于 [VitePress](https://vitepress.dev/) 构建，部署在 GitHub Pages。

## 页面

- **首页** — 头像、简介、社交链接、精选项目
- **关于** — 个人经历、技术栈、联系方式
- **项目** — GitHub 开源项目展示

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | VitePress (Vue 3 + Vite) |
| 内容 | Markdown + Vue SFC |
| 样式 | 自定义 CSS（暗色模式默认） |
| 部署 | GitHub Actions + GitHub Pages |

## 本地开发

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 构建到 .vitepress/dist/
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

## 许可

MIT
