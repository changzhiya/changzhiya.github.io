---
layout: page
---

# 项目

<div class="projects-lead">
  <p>我在 GitHub 上维护的开源项目。</p>
</div>

<script setup>
const projects = [
  {
    name: 'RIS — 指代图像分割系统',
    desc: '文本引导指代图像分割系统，基于 PyTorch 与 OpenAI CLIP，支持 RefCOCO 数据集，提供训练/评估/可视化及 Streamlit 交互推理。',
    tech: ['Python', 'PyTorch', 'CLIP', 'Computer Vision', 'Streamlit'],
    github: 'https://github.com/changzhiya/RIS_Referring-Image-Segmentation-System',
    emoji: '🔬',
  },
  {
    name: '记账 — 本地 Android 记账 App',
    desc: '温馨可爱的纯本地记账应用，支持手动记账、微信/支付宝通知自动抓取、分类统计、月度预算、手账风格主题切换及小金库功能。',
    tech: ['Kotlin', 'Android', 'Jetpack Compose'],
    github: 'https://github.com/changzhiya/changzhi-expense-tracker',
    emoji: '📒',
  },
]
</script>

<div class="project-list">
  <div v-for="p in projects" :key="p.name" class="project-block">
    <div class="proj-emoji">{{ p.emoji }}</div>
    <div class="proj-body">
      <h2>{{ p.name }}</h2>
      <p>{{ p.desc }}</p>
      <div class="proj-meta">
        <div class="tags">
          <span v-for="t in p.tech" :key="t" class="tag">{{ t }}</span>
        </div>
        <a :href="p.github" target="_blank" rel="noopener noreferrer" class="proj-link">
          <svg viewBox="0 0 16 16" fill="currentColor" class="link-icon"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.20.82a7.59 7.59 0 0 1 4 0c1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</div>

<style scoped>
.projects-lead {
  margin-bottom: 3rem;
}

.projects-lead p {
  font-size: 1rem;
  font-weight: 300;
  color: var(--vp-c-text-3);
  max-width: 34rem;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.project-block {
  display: flex;
  gap: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 14px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* 背景装饰圆 */
.project-block::after {
  content: '';
  position: absolute;
  right: -1.5rem;
  bottom: -1.5rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  opacity: 0.3;
  pointer-events: none;
}

.project-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #4a4a4a 0%, #8a8a8a 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.project-block:hover {
  border-color: var(--vp-c-text-3);
  box-shadow: var(--vp-shadow-2);
  transform: translateX(2px);
}

.project-block:hover::before {
  opacity: 1;
}

.proj-emoji {
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border-radius: 12px;
}

.proj-body {
  flex: 1;
  min-width: 0;
}

.proj-body h2 {
  font-size: 1.15rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
  padding: 0;
  border: none;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

.proj-body p {
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
}

.proj-meta {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.tags {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.68rem;
  padding: 0.15rem 0.55rem;
  border-radius: 5px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-weight: 450;
  letter-spacing: 0.02em;
}

.proj-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
  padding-bottom: 0.1rem;
  white-space: nowrap;
}

.proj-link:hover {
  color: var(--vp-c-text-1);
  border-bottom-color: var(--vp-c-text-1);
}

.link-icon {
  width: 0.9rem;
  height: 0.9rem;
}

@media (max-width: 640px) {
  .project-block {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }

  .proj-emoji {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  .proj-body h2 {
    font-size: 1.05rem;
  }
}
</style>
