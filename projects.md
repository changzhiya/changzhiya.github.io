---
layout: page
---

# 项目

<script setup>
const projects = [
  {
    name: 'RIS — 指代图像分割系统',
    desc: '文本引导指代图像分割系统，基于 PyTorch 与 OpenAI CLIP，支持 RefCOCO 数据集，提供训练/评估/可视化及 Streamlit 交互推理。',
    tech: ['Python', 'PyTorch', 'CLIP', 'Computer Vision', 'Streamlit'],
    github: 'https://github.com/changzhiya/RIS_Referring-Image-Segmentation-System',
  },
  {
    name: 'RAG 阅读助手',
    desc: '基于 RAG 的微信小程序阅读助手，结合 DeepSeek 大语言模型实现智能书籍对话。后端 Java Spring Boot + DeepSeek API，前端微信小程序含聊天气泡组件。',
    tech: ['Java', 'Spring Boot', 'WeChat Mini Program', 'RAG', 'LLM'],
    github: 'https://github.com/changzhiya/RAG_reading_wechat',
  },
  {
    name: 'MetaStudy',
    desc: '基于 Spring Boot 的元学习管理系统，集成 Knife4j API 文档。',
    tech: ['Java', 'Spring Boot'],
    github: 'https://github.com/changzhiya/MetaStudy',
  },
]
</script>

<div class="project-grid">
  <div v-for="p in projects" :key="p.name" class="project-card">
    <h2>{{ p.name }}</h2>
    <p>{{ p.desc }}</p>
    <div class="tags">
      <span v-for="t in p.tech" :key="t" class="tag">{{ t }}</span>
    </div>
    <div class="links">
      <a v-if="p.github" :href="p.github" target="_blank" rel="noopener noreferrer" class="link">GitHub</a>
      <a v-if="p.demo" :href="p.demo" target="_blank" rel="noopener noreferrer" class="link">Demo</a>
    </div>
  </div>
</div>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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

.project-card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  padding: 0;
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

.links {
  display: flex;
  gap: 1.25rem;
}

.link {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
  padding-bottom: 0.1rem;
}

.link:hover {
  color: var(--vp-c-text-1);
  border-bottom-color: var(--vp-c-text-1);
  text-decoration: none;
}
</style>
