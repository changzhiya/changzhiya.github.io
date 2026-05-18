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
