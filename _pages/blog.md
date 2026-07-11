---
layout: page
title: Blog
permalink: /blog/
nav: true
nav_order: 3
description: Poems, economic essays, reading notes, and ordinary fragments.
_styles: |
  .post-header {
    margin-bottom: 4.5rem;
  }

  .post-header .post-title {
    margin-bottom: 1.6rem;
    font-family: "Cormorant Garamond", "Iowan Old Style", Baskerville, Georgia, serif;
    font-size: clamp(3.6rem, 8vw, 5.5rem);
    font-weight: 500;
    line-height: 0.95;
    letter-spacing: -0.035em;
  }

  .post-header .post-description {
    max-width: 48rem;
    margin: 0;
    color: var(--global-text-color-light);
    font-size: clamp(1.05rem, 2.2vw, 1.35rem);
    line-height: 1.65;
  }

  .blog-feed {
    display: grid;
  }

  .blog-entry {
    padding: 0 0 4rem;
  }

  .blog-entry + .blog-entry {
    padding-top: 4rem;
    border-top: 1px solid var(--global-divider-color);
  }

  .blog-entry-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.9rem;
    margin-bottom: 1.6rem;
    color: #a87519;
    font-size: 0.92rem;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.08em;
  }

  .blog-entry-tag {
    padding: 0.45rem 0.7rem;
    border-radius: 3px;
    color: var(--global-text-color-light);
    background: color-mix(in srgb, var(--global-text-color) 6%, transparent);
    letter-spacing: 0;
  }

  .blog-entry-title {
    margin: 0 0 1.2rem;
    font-family: "Cormorant Garamond", "Iowan Old Style", Baskerville, Georgia, serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 500;
    line-height: 1.12;
    letter-spacing: -0.02em;
  }

  .blog-entry-title a {
    color: var(--global-text-color);
    text-decoration: none;
  }

  .blog-entry-title a:hover {
    color: var(--global-theme-color);
  }

  .blog-entry-summary {
    max-width: 52rem;
    margin: 0 0 1.8rem;
    color: var(--global-text-color-light);
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .blog-read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    color: #a87519;
    font-weight: 600;
    text-decoration: none;
  }

  .blog-read-more span {
    transition: transform 0.25s ease;
  }

  .blog-read-more:hover {
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .blog-read-more:hover span {
    transform: translateX(4px);
  }

  @media (max-width: 576px) {
    .post-header {
      margin-bottom: 3.25rem;
    }

    .blog-entry {
      padding-bottom: 3rem;
    }

    .blog-entry + .blog-entry {
      padding-top: 3rem;
    }
  }
---

<section class="blog-feed" aria-label="Blog posts">
  {% for post in site.posts %}
    <article class="blog-entry">
      <div class="blog-entry-meta">
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%d %B %Y' }}</time>
        {% if post.tags.first %}
          <span class="blog-entry-tag">{{ post.tags.first | capitalize }}</span>
        {% endif %}
      </div>

      <h2 class="blog-entry-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>

      <p class="blog-entry-summary">
        {% if post.description %}
          {{ post.description }}
        {% else %}
          {{ post.excerpt | strip_html | strip_newlines | truncatewords: 36 }}
        {% endif %}
      </p>

      <a class="blog-read-more" href="{{ post.url | relative_url }}" aria-label="Read more: {{ post.title }}">Read more <span aria-hidden="true">→</span></a>
    </article>

{% endfor %}

</section>
