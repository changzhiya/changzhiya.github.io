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
    name: 'Fly 文件传输',
    desc: '局域网文件传输工具，Go + Vue3 实现手机与电脑之间快速互传文件。支持文件上传/下载/删除、图片/文本/PDF 预览、自动检测局域网 IP、响应式界面适配、单文件部署，单文件最大支持 1GB。',
    tech: ['Go', 'Vue3', 'Web'],
    github: 'https://github.com/changzhiya/Fly',
    icon: 'transfer',
    features: ['文件传输', '自动 IP 检测', '响应式', '单文件部署'],
  },
  {
    name: '猫猫账本',
    desc: '可爱的猫咪风格记账应用，支持 AI 智能记账、微信/支付宝账单批量导入、周/月/年数据统计、分类管理、月预算设置与进度提醒。',
    tech: ['Flutter', 'Dart', 'AI'],
    github: 'https://github.com/changzhiya/expense-tracker',
    icon: 'wallet',
    features: ['AI 智能记账', '账单导入', '数据统计', '预算管理'],
  },
  {
    name: 'AdOut 广告拦截',
    desc: '纯本地 Android 广告拦截应用，VPN DNS 拦截 + 无障碍服务双层过滤，Aho-Corasick 域名边界匹配精准拦截，DNS-only 省电模式，MagicOS 深度适配，5 层保活机制。',
    tech: ['Kotlin', 'Android', 'Material3'],
    github: 'https://github.com/changzhiya/adout',
    icon: 'shield',
    features: ['双层拦截', '无需 Root', '精准匹配', '省电优化'],
  },
  {
    name: 'RIS 指代图像分割',
    desc: '基于 PyTorch 与 OpenAI CLIP 的指代表达图像分割系统，支持 RefCOCO 数据集，提供训练/评估/批量可视化及 Streamlit 交互推理界面。',
    tech: ['Python', 'PyTorch', 'CLIP', 'CV', 'Streamlit'],
    github: 'https://github.com/changzhiya/RIS_Referring-Image-Segmentation-System',
    icon: 'camera',
    features: ['文本引导分割', 'RefCOCO', '训练评估', '交互推理'],
  },
]

const icons = {
  transfer: '<path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/>',
  wallet: '<path d="M2 7l10 5 10-5M2 7v10l10 5 10-5V7M2 7l10-5 10 5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  camera: '<path d="M6 3h12M12 3v18"/><circle cx="12" cy="9" r="5"/><path d="M8 15c-2.21 0-4 1.79-4 4v1h16v-1c0-2.21-1.79-4-4-4"/>',
}
</script>

<div class="project-list">
  <div v-for="p in projects" :key="p.name" class="project-block">
    <div class="proj-icon" v-html="icons[p.icon]"></div>
    <div class="proj-body">
      <h2>{{ p.name }}</h2>
      <p>{{ p.desc }}</p>
      <div class="proj-features">
        <span v-for="f in p.features" :key="f" class="feature-dot">{{ f }}</span>
      </div>
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

.proj-icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border-radius: 12px;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.proj-icon :deep(svg) {
  width: 1.4rem;
  height: 1.4rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  color: var(--vp-c-text-2);
}

.project-block:hover .proj-icon {
  opacity: 1;
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
  margin: 0 0 0.75rem;
}

/* 特性标签 */
.proj-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.feature-dot {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  letter-spacing: 0.02em;
}

.feature-dot::before {
  content: '';
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
  opacity: 0.6;
  flex-shrink: 0;
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

  .proj-icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 10px;
  }

  .proj-body h2 {
    font-size: 1.05rem;
  }
}
</style>
