---
layout: page
---

# 关于我

<div class="about-intro">
  <p>你好！我是一名全栈开发者，专注于计算机视觉、自然语言处理和大语言模型应用。技术栈涵盖 Java 后端开发（Spring Boot）、Python 深度学习（PyTorch）以及微信小程序前端。</p>
</div>

## 技术栈

<div class="tech-groups">
  <div class="tech-group">
    <h3>语言</h3>
    <div class="tag-list">
      <span class="tag">Java</span>
      <span class="tag">Python</span>
      <span class="tag">JavaScript</span>
    </div>
  </div>
  <div class="tech-group">
    <h3>框架</h3>
    <div class="tag-list">
      <span class="tag">Spring Boot</span>
      <span class="tag">PyTorch</span>
      <span class="tag">Vue</span>
      <span class="tag">微信小程序</span>
    </div>
  </div>
  <div class="tech-group">
    <h3>工具</h3>
    <div class="tag-list">
      <span class="tag">Git</span>
      <span class="tag">DeepSeek API</span>
      <span class="tag">CLIP</span>
      <span class="tag">Streamlit</span>
      <span class="tag">Docker</span>
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
  <a href="https://github.com/changzhiya" target="_blank" rel="noopener noreferrer" class="contact-link">
    <svg class="contact-icon" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.20.82a7.59 7.59 0 0 1 4 0c1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    GitHub
  </a>
  <span class="sep">/</span>
  <a href="mailto:15137091819@163.com" class="contact-link">邮箱：15137091819@163.com</a>
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
  font-size: 0.75rem;
  padding: 0.2rem 0.65rem;
  border-radius: 5px;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  font-weight: 450;
  letter-spacing: 0.02em;
}

.timeline {
  position: relative;
  padding-left: 1.75rem;
  border-left: 1.5px solid var(--vp-c-divider);
  margin-bottom: 3rem;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.25rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -1.835rem;
  top: 0.35rem;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-text-2);
}

.timeline-content .time {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  letter-spacing: 0.03em;
}

.timeline-content h3 {
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0.2rem 0 0.15rem;
  color: var(--vp-c-text-1);
}

.timeline-content p {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

.contact-icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15rem;
  margin-right: 0.3rem;
}

.contact-links {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 1rem;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;
}

.contact-link:hover {
  color: var(--vp-c-text-1);
  border-bottom-color: var(--vp-c-text-1);
  text-decoration: none;
}

.contact-links .sep {
  color: var(--vp-c-divider);
}
</style>
