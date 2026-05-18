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
  <a href="https://github.com/changzhiya" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
  <span class="social-sep">·</span>
  <a href="mailto:zbz2040103949@outlook.com" class="social-link">邮箱</a>
</div>

<div class="scroll-hint">
  <span>&darr; 向下滚动</span>
</div>

<script setup>
const projects = [
  {
    title: 'RIS — 指代图像分割系统',
    desc: '文本引导指代图像分割系统，基于 PyTorch 与 OpenAI CLIP，支持 RefCOCO 数据集，提供训练/评估/可视化及 Streamlit 交互推理。',
    tags: ['Python', 'PyTorch', 'CLIP', 'Computer Vision'],
    github: 'https://github.com/changzhiya/RIS_Referring-Image-Segmentation-System',
  },
]
</script>

## 精选项目

<div class="project-grid">
  <div v-for="p in projects" :key="p.title" class="project-card">
    <h3>{{ p.title }}</h3>
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

.social-link {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  text-decoration: none;
  transition: color 0.2s;
  padding: 0.25rem 0;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;
}

.social-link:hover {
  color: var(--vp-c-text-1);
  border-bottom-color: var(--vp-c-text-1);
}

.social-sep {
  color: var(--vp-c-divider);
}

.scroll-hint {
  text-align: center;
  margin: 2.5rem 0 4rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  letter-spacing: 0.05em;
  opacity: 0.5;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 640px;
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

.project-card h3 {
  margin: 0 0 0.5rem;
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
</style>
