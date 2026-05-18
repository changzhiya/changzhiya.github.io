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
  <a href="https://github.com/changzhiya" target="_blank" rel="noopener noreferrer">GitHub</a>
  <span class="sep">/</span>
  <a href="mailto:zbz2040103949@outlook.com">邮箱</a>
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
