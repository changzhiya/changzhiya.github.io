# 个人主页实现计划

> **面向 agentic workers：** 必需的子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 来按任务逐步实现此计划。步骤使用 checkbox（`- [ ]`）语法进行跟踪。

**目标：** 用 VitePress 构建一个极简的 3 页个人主页，并部署到 GitHub Pages。

**架构：** VitePress 静态站点，包含 3 个 Markdown 页面（首页、关于、项目），自定义主题 CSS 实现极简排版驱动设计，使用 GitHub Actions 工作流部署到 GitHub Pages。

**技术栈：** VitePress 1.x、Vue 3、Markdown、CSS、GitHub Actions

---

### 任务 1：初始化 VitePress 项目

**文件：**
- 创建：`package.json`
- 创建：`.gitignore`

- [ ] **步骤 1：创建 package.json**

```json
{
  "name": "selfpage",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview"
  },
  "devDependencies": {
    "vitepress": "^1.6.0"
  }
}
```

- [ ] **步骤 2：创建 .gitignore**

```
node_modules/
.vitepress/dist/
.vitepress/cache/
```

- [ ] **步骤 3：安装依赖**

运行：`npm install`

- [ ] **步骤 4：验证 VitePress CLI 可用**

运行：`npx vitepress --version`
预期：输出版本号（如 1.6.x）

- [ ] **步骤 5：提交**

```bash
git add package.json package-lock.json .gitignore
git commit -m "chore: 初始化 VitePress 项目"
```

---

### 任务 2：创建 VitePress 配置

**文件：**
- 创建：`.vitepress/config.ts`

- [ ] **步骤 1：创建可构建的最小配置**

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '我的主页',
  description: '个人主页',

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
```

- [ ] **步骤 2：创建占位 index.md 使配置有效**

```markdown
# 你好
```

- [ ] **步骤 3：验证最小配置下构建成功**

运行：`npx vitepress build`
预期：构建无错误，输出在 `.vitepress/dist/`

- [ ] **步骤 4：验证输出 HTML 存在**

运行：`ls .vitepress/dist/index.html`
预期：文件存在

- [ ] **步骤 5：提交**

```bash
git add .vitepress/config.ts index.md
git commit -m "feat: 添加 VitePress 配置"
```

---

### 任务 3：添加主题定制

**文件：**
- 创建：`.vitepress/theme/index.ts`
- 创建：`.vitepress/theme/custom.css`

- [ ] **步骤 1：创建主题入口文件加载自定义 CSS**

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

- [ ] **步骤 2：创建极简、排版驱动的自定义 CSS**

```css
:root {
  --vp-c-brand: #555555;
  --vp-c-brand-light: #777777;
  --vp-c-brand-lighter: #999999;
  --vp-c-brand-dark: #444444;
  --vp-c-brand-darker: #333333;

  --vp-font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #333 0%, #666 100%);
}

.dark {
  --vp-c-bg: #1a1a1a;
  --vp-c-bg-soft: #242424;
  --vp-c-bg-mute: #2e2e2e;
  --vp-c-text-1: #e0e0e0;
  --vp-c-text-2: #b0b0b0;
}

/* 排版驱动：宽松的行高和间距 */
.vp-doc {
  line-height: 1.8;
}

.vp-doc h1 {
  font-weight: 300;
  letter-spacing: -0.02em;
}

.vp-doc h2 {
  font-weight: 400;
  letter-spacing: -0.01em;
}

/* Hero 区域极简风格 */
.VPHero .name {
  font-weight: 300;
}

.VPHero .text {
  font-weight: 300;
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
}
```

- [ ] **步骤 3：验证自定义主题构建成功**

运行：`npx vitepress build`
预期：构建成功，dist 中生成 CSS 文件

- [ ] **步骤 4：验证自定义 CSS 在输出中**

运行：`ls .vitepress/dist/assets/*.css`
预期：CSS 文件存在

- [ ] **步骤 5：提交**

```bash
git add .vitepress/theme/index.ts .vitepress/theme/custom.css
git commit -m "feat: 添加极简主题定制"
```

---

### 任务 4：创建首页

**文件：**
- 替换：`index.md`（覆盖任务 2 的占位内容）

- [ ] **步骤 1：编写带 Hero 布局的首页**

```markdown
---
layout: home

hero:
  name: "你的名字"
  text: "一句话自我介绍。"
  image:
    src: /avatar.svg
    alt: 头像
  actions:
    - theme: brand
      text: 项目
      link: /projects
    - theme: alt
      text: 关于我
      link: /about
---

<div class="hero-socials">
  <a href="https://github.com/" target="_blank" class="social-link">GitHub</a>
  <span class="social-sep">·</span>
  <a href="https://x.com/" target="_blank" class="social-link">X</a>
  <span class="social-sep">·</span>
  <a href="mailto:hello@example.com" class="social-link">邮箱</a>
</div>

<div class="scroll-hint">
  <span>&darr; 向下滚动</span>
</div>

<script setup>
const projects = [
  {
    title: '项目 Alpha',
    desc: '一个高效完成工作的工具。',
    tags: ['TypeScript', 'Vue'],
    github: 'https://github.com/',
  },
  {
    title: '项目 Beta',
    desc: '生成式设计的实验性项目。',
    tags: ['Python', 'AI'],
    github: 'https://github.com/',
  },
]
</script>

## 精选项目

<div class="project-grid">
  <div v-for="p in projects" class="project-card">
    <h3>{{ p.title }}</h3>
    <p>{{ p.desc }}</p>
    <div class="tags">
      <span v-for="t in p.tags" class="tag">{{ t }}</span>
    </div>
    <a :href="p.github" target="_blank">GitHub</a>
  </div>
</div>

<style scoped>
.hero-socials {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: -1rem;
  margin-bottom: 1rem;
}

.social-link {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.social-link:hover {
  color: var(--vp-c-brand);
}

.social-sep {
  color: var(--vp-c-divider);
}

.scroll-hint {
  text-align: center;
  margin: 2rem 0 3rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  opacity: 0.6;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.project-card {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.25rem;
  transition: border-color 0.2s;
}

.project-card:hover {
  border-color: var(--vp-c-brand);
}

.project-card h3 {
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.project-card p {
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.project-card a {
  font-size: 0.85rem;
}
</style>
```

- [ ] **步骤 2：创建头像占位 SVG**

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <rect width="128" height="128" rx="64" fill="#e0e0e0"/>
  <circle cx="64" cy="48" r="20" fill="#999"/>
  <ellipse cx="64" cy="100" rx="32" ry="24" fill="#999"/>
</svg>
```

保存到：`public/avatar.svg`

- [ ] **步骤 3：验证构建成功**

运行：`npx vitepress build`
预期：构建成功

- [ ] **步骤 4：验证输出内容**

运行：`grep -c "你的名字" .vitepress/dist/index.html`
预期：输出非零计数

运行：`grep -c "scroll-hint" .vitepress/dist/index.html`
预期：输出非零计数

- [ ] **步骤 5：提交**

```bash
git add index.md public/avatar.svg
git commit -m "feat: 添加首页（Hero、社交链接、精选项目）"
```

---

### 任务 5：创建项目页

**文件：**
- 创建：`projects.md`

- [ ] **步骤 1：编写带卡片网格的项目页**

````markdown
---
layout: page
---

# 项目

<script setup>
const projects = [
  {
    name: '项目 Alpha',
    desc: '一个高效完成工作的工具。',
    tech: ['TypeScript', 'Vue 3', 'Vite'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    name: '项目 Beta',
    desc: '生成式设计与创意编程的实验项目。',
    tech: ['Python', 'Stable Diffusion', 'ComfyUI'],
    github: 'https://github.com/',
  },
  {
    name: '项目 Gamma',
    desc: '自动化重复工作流的 CLI 工具。',
    tech: ['Rust', 'CLI'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    name: '项目 Delta',
    desc: '数据探索的可视化仪表盘。',
    tech: ['React', 'D3.js', 'Node.js'],
    github: 'https://github.com/',
  },
]
</script>

<div class="project-grid">
  <div v-for="p in projects" class="project-card">
    <h2>{{ p.name }}</h2>
    <p>{{ p.desc }}</p>
    <div class="tags">
      <span v-for="t in p.tech" :key="t" class="tag">{{ t }}</span>
    </div>
    <div class="links">
      <a v-if="p.github" :href="p.github" target="_blank" class="link">GitHub</a>
      <a v-if="p.demo" :href="p.demo" target="_blank" class="link">Demo</a>
    </div>
  </div>
</div>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.project-card {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 0.2s;
}

.project-card:hover {
  border-color: var(--vp-c-brand);
}

.project-card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
}

.project-card p {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.6rem;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.links {
  display: flex;
  gap: 1rem;
}

.link {
  font-size: 0.85rem;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
````

- [ ] **步骤 2：验证构建成功**

运行：`npx vitepress build`
预期：构建成功

- [ ] **步骤 3：验证项目页在输出中存在**

运行：`ls .vitepress/dist/projects.html`
预期：文件存在

- [ ] **步骤 4：提交**

```bash
git add projects.md
git commit -m "feat: 添加项目页（卡片网格）"
```

---

### 任务 6：创建关于页

**文件：**
- 创建：`about.md`

- [ ] **步骤 1：编写包含简介、技术栈、时间线和联系方式的关于页**

```markdown
---
layout: page
---

# 关于我

<div class="about-intro">
  <p>你好！我是一名热爱构建工具的软件开发者。我享受全栈开发——从 CLI 工具到 Web 前端——并且非常在意简洁的设计和良好的开发者体验。</p>
</div>

## 技术栈

<div class="tech-groups">
  <div class="tech-group">
    <h3>语言</h3>
    <div class="tag-list">
      <span class="tag">TypeScript</span>
      <span class="tag">JavaScript</span>
      <span class="tag">Python</span>
      <span class="tag">Rust</span>
    </div>
  </div>
  <div class="tech-group">
    <h3>前端</h3>
    <div class="tag-list">
      <span class="tag">Vue</span>
      <span class="tag">React</span>
      <span class="tag">Vite</span>
      <span class="tag">Tailwind CSS</span>
    </div>
  </div>
  <div class="tech-group">
    <h3>工具</h3>
    <div class="tag-list">
      <span class="tag">Git</span>
      <span class="tag">Docker</span>
      <span class="tag">VS Code</span>
      <span class="tag">Linux</span>
    </div>
  </div>
</div>

## 经历

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <span class="time">2024 — 至今</span>
      <h3>高级开发工程师</h3>
      <p>负责核心产品功能的开发与维护，主导前端架构设计决策。</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <span class="time">2022 — 2024</span>
      <h3>全栈开发工程师</h3>
      <p>参与 Web 应用和内部工具的全栈开发。</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <span class="time">2020 — 2022</span>
      <h3>初级开发工程师</h3>
      <p>从前端功能开发起步，逐步学习软件工程实践。</p>
    </div>
  </div>
</div>

## 联系方式

<div class="contact-links">
  <a href="https://github.com/" target="_blank">GitHub</a>
  <span class="sep">/</span>
  <a href="https://x.com/" target="_blank">X (Twitter)</a>
  <span class="sep">/</span>
  <a href="mailto:hello@example.com">邮箱</a>
</div>

<style scoped>
.about-intro {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
}

.about-intro p {
  max-width: 36rem;
}

.tech-groups {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.tech-group h3 {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.timeline {
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid var(--vp-c-bg-soft);
  margin-bottom: 3rem;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -1.65rem;
  top: 0.4rem;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--vp-c-brand);
}

.timeline-content .time {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.timeline-content h3 {
  font-size: 1rem;
  font-weight: 500;
  margin: 0.25rem 0;
}

.timeline-content p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.contact-links {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 1rem;
}

.contact-links a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.contact-links a:hover {
  text-decoration: underline;
}

.contact-links .sep {
  color: var(--vp-c-divider);
}
</style>
```

- [ ] **步骤 2：验证构建成功**

运行：`npx vitepress build`
预期：构建成功

- [ ] **步骤 3：验证关于页在输出中存在**

运行：`ls .vitepress/dist/about.html`
预期：文件存在

- [ ] **步骤 4：提交**

```bash
git add about.md
git commit -m "feat: 添加关于页（简介、技术栈、经历、联系方式）"
```

---

### 任务 7：添加 GitHub Actions 部署

**文件：**
- 创建：`.github/workflows/deploy.yml`

- [ ] **步骤 1：创建部署工作流**

```yaml
name: 部署到 GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - run: npm run build

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **步骤 2：验证工作流文件是有效的 YAML**

运行：`python -c "import yaml; yaml.safe_load(open('.github/workflows/deploy.yml')); print('YAML 有效')" 2>&1 || echo "跳过 YAML 验证（缺少 PyYAML）"`

- [ ] **步骤 3：提交**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: 添加 GitHub Pages 部署工作流"
```

---

### 任务 8：最终构建验证

- [ ] **步骤 1：从零开始全新构建**

```bash
rm -rf .vitepress/dist .vitepress/cache
npx vitepress build
```

预期：构建无错误

- [ ] **步骤 2：验证所有页面都在输出中**

```bash
test -f .vitepress/dist/index.html && echo "index.html OK"
test -f .vitepress/dist/about.html && echo "about.html OK"
test -f .vitepress/dist/projects.html && echo "projects.html OK"
test -f .vitepress/dist/avatar.svg && echo "avatar.svg OK"
```

预期：四个文件都输出 "OK"

- [ ] **步骤 3：验证输出中没有损坏的资源引用**

```bash
grep -r "404" .vitepress/dist/ && echo "警告：发现 404 引用" || echo "未发现 404 引用"
```

预期："未发现 404 引用"

- [ ] **步骤 4：验证页面间链接正常**

```bash
grep -o 'href="[^"]*"' .vitepress/dist/index.html | grep -E "(about|projects)" || echo "未找到页面间链接 — 请手动检查"
grep -o 'href="[^"]*"' .vitepress/dist/about.html | grep -E "(projects|/)" || echo "未找到导航链接 — 请手动检查"
```

- [ ] **步骤 5：验证输出目录大小合理**

```bash
du -sh .vitepress/dist/
```

预期：小于 5MB（干净的 VitePress 构建体积应很小）

- [ ] **步骤 6：提交**

```bash
git add -A
git commit -m "chore: 最终验证 — 所有页面成功构建且链接正确"
```

---

## 完成后文件清单

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .vitepress/
│   ├── config.ts
│   └── theme/
│       ├── index.ts
│       └── custom.css
├── public/
│   └── avatar.svg
├── index.md
├── about.md
├── projects.md
├── package.json
├── package-lock.json
├── .gitignore
└── CLAUDE.md
```
