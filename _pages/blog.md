---
layout: page
title: Blog
permalink: /blog/
nav: true
nav_order: 3
---

<div class="blog-categories">
  <a href="/blog/tag/philosophy" class="blog-card">
    <div class="card-icon">🧠</div>
    <div class="card-desc">Philosophy</div>
  </a>
  <a href="/blog/tag/poetry" class="blog-card">
    <div class="card-icon">🌿</div>
    <div class="card-desc">Poetry</div>
  </a>
  <a href="/blog/tag/academic" class="blog-card">
    <div class="card-icon">📐</div>
    <div class="card-desc">Review</div>
  </a>
  <a href="/blog/tag/life" class="blog-card">
    <div class="card-icon">☕</div>
    <div class="card-desc">Essays</div>
  </a>
</div>

<style>
.blog-categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}
.blog-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  background: #fafafa;
}
.blog-card:hover {
  border-color: #9c27b0;
  box-shadow: 0 4px 16px rgba(156, 39, 176, 0.15);
  transform: translateY(-2px);
  background: #fff;
}
.card-icon { font-size: 2.5rem; margin-bottom: 0.8rem; }
.card-title { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.3rem; }
.card-desc { font-size: 0.85rem; color: #888; }
</style>