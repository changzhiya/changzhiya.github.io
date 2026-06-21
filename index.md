---
layout: home

hero:
  name: "changzhiya"
  text: "全栈开发者，关注 CV/NLP 与 LLM 应用。"
  image:
    src: /avatar.jpg
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
  <a href="https://github.com/changzhiya" target="_blank" rel="noopener noreferrer" class="social-link">
    <svg class="social-icon" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.20.82a7.59 7.59 0 0 1 4 0c1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    GitHub
  </a>
  <span class="social-sep">·</span>
  <a href="mailto:15137091819@163.com" class="social-link">邮箱：15137091819@163.com</a>
</div>

<script setup>
const projects = [
  {
    title: 'Fly 文件传输',
    desc: '局域网文件传输工具，Go + Vue3 实现手机与电脑之间快速互传文件，支持文件预览、自动 IP 检测、单文件部署。',
    tags: ['Go', 'Vue3', 'Web'],
    github: 'https://github.com/changzhiya/Fly',
    icon: 'transfer',
  },
  {
    title: '猫猫账本',
    desc: '可爱的猫咪风格记账应用，支持 AI 智能记账、微信/支付宝账单导入、数据统计分析、预算管理。',
    tags: ['Flutter', 'Dart', 'AI'],
    github: 'https://github.com/changzhiya/expense-tracker',
    icon: 'wallet',
  },
  {
    title: 'AdOut 广告拦截',
    desc: '纯本地 Android 广告拦截应用，VPN DNS 拦截 + 无障碍服务双层过滤，Aho-Corasick 精准匹配，无需 Root。',
    tags: ['Kotlin', 'Android', 'Material3'],
    github: 'https://github.com/changzhiya/adout',
    icon: 'shield',
  },
  {
    title: 'RIS 指代图像分割',
    desc: '基于 PyTorch 与 CLIP 的指代表达图像分割系统，支持 RefCOCO 数据集，提供训练、评估与 Streamlit 交互推理。',
    tags: ['Python', 'PyTorch', 'CLIP', 'CV'],
    github: 'https://github.com/changzhiya/RIS_Referring-Image-Segmentation-System',
    icon: 'camera',
  },
]

const icons = {
  transfer: '<path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>',
  wallet: '<path d="M2 7l10 5 10-5M2 7v10l10 5 10-5V7M2 7l10-5 10 5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  camera: '<path d="M6 3h12M12 3v18"/><circle cx="12" cy="9" r="5"/><path d="M8 15c-2.21 0-4 1.79-4 4v1h16v-1c0-2.21-1.79-4-4-4"/>',
}
</script>

## 精选项目

<div class="section-ornament"><span></span></div>

<div class="project-grid">
  <div v-for="p in projects" :key="p.title" class="project-card">
    <div class="card-header">
      <span class="card-icon" v-html="icons[p.icon]"></span>
      <h3>{{ p.title }}</h3>
    </div>
    <p>{{ p.desc }}</p>
    <div class="tags">
      <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
    </div>
    <a :href="p.github" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
</div>

<style scoped>
.hero-socials {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
}

.social-icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15rem;
  margin-right: 0.3rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  text-decoration: none;
  padding: 0.5rem 0.25rem;
  border-bottom: 1px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.social-link:hover {
  color: var(--vp-c-text-1);
  border-bottom-color: var(--vp-c-text-1);
}

.social-link:focus-visible {
  outline: 2px solid var(--vp-c-brand);
  outline-offset: 2px;
  border-radius: 3px;
}

.social-sep {
  color: var(--vp-c-divider);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.project-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #4a4a4a 0%, #8a8a8a 100%);
  opacity: 0;
  transition: opacity 0.25s;
}

.project-card:hover {
  border-color: var(--vp-c-text-3);
  box-shadow: var(--vp-shadow-2);
  transform: translateY(-2px);
}

.project-card:hover::before {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  background: var(--vp-c-bg);
  flex-shrink: 0;
  opacity: 0.6;
  transition: opacity 0.25s;
}

.card-icon svg {
  width: 1.1rem;
  height: 1.1rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  color: var(--vp-c-text-2);
}

.project-card:hover .card-icon {
  opacity: 1;
}

.project-card h3 {
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.project-card p {
  margin: 0 0 1rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

.tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tag {
  font-size: 0.7rem;
  padding: 0.15rem 0.55rem;
  border-radius: 5px;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  font-weight: 450;
  letter-spacing: 0.02em;
}

.project-card a {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
  padding-bottom: 0.1rem;
}

.project-card a:hover {
  color: var(--vp-c-text-1);
  border-bottom-color: var(--vp-c-text-1);
}

.project-card a:focus-visible {
  outline: 2px solid var(--vp-c-brand);
  outline-offset: 2px;
  border-radius: 2px;
}

.section-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -0.5rem 0 2rem;
  opacity: 0.25;
}
.section-ornament span {
  display: block;
  width: 36px;
  height: 1px;
  background: var(--vp-c-text-2);
  position: relative;
}
.section-ornament span::before,
.section-ornament span::after {
  content: '';
  position: absolute;
  top: -1.5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--vp-c-text-2);
}
.section-ornament span::before { left: -10px; }
.section-ornament span::after { right: -10px; }
</style>
