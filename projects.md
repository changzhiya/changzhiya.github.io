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
