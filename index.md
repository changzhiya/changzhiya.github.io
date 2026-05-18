---
layout: home

hero:
  name: "changzhiya"
  text: "全栈开发者，关注 CV/NLP 与 LLM 应用。"
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
  {
    title: 'RAG 阅读助手',
    desc: '基于 RAG 的微信小程序阅读助手，结合 DeepSeek 大语言模型实现智能书籍对话。',
    tags: ['Java', 'Spring Boot', 'WeChat Mini Program', 'RAG'],
    github: 'https://github.com/changzhiya/RAG_reading_wechat',
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
