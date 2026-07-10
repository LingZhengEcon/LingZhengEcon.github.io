---
layout: page
title: Blog
permalink: /blog/
nav: true
nav_order: 3
description: Poems, economic essays, reading notes, and ordinary fragments.
_styles: |
  .blog-index {
    display: grid;
    gap: 2.4rem;
  }

  .blog-intro {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 2rem;
    align-items: end;
    padding-bottom: 1.4rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .blog-intro p {
    max-width: 41rem;
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 1.02rem;
    line-height: 1.75;
  }

  .blog-count {
    font-family: "Cormorant Garamond", "Roboto Slab", Georgia, serif;
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 0.9;
    color: var(--global-theme-color);
  }

  .blog-count-label {
    display: block;
    margin-top: 0.35rem;
    color: var(--global-text-color-light);
    font-size: 0.78rem;
    text-transform: uppercase;
  }

  .blog-shelves {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
  }

  .blog-shelf {
    position: relative;
    min-width: 0;
    padding: 1.15rem 1.25rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-card-bg-color);
    transition:
      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.25s ease,
      box-shadow 0.35s ease;
  }

  .blog-shelf::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: 2px;
    background: var(--global-theme-color);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .blog-shelf h2,
  .blog-list h2 {
    margin: 0 0 0.9rem;
    font-size: 1.65rem;
  }

  .blog-shelf ol,
  .blog-list ol {
    display: grid;
    gap: 0.8rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .blog-post-link {
    display: grid;
    gap: 0.18rem;
    color: var(--global-text-color);
    text-decoration: none;
    transition:
      color 0.2s ease,
      transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .blog-post-link:hover {
    color: var(--global-theme-color);
    text-decoration: none;
  }

  .blog-post-title {
    font-weight: 600;
    line-height: 1.35;
  }

  .blog-post-meta {
    color: var(--global-text-color-light);
    font-size: 0.82rem;
    font-variant-numeric: tabular-nums;
  }

  .blog-empty {
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 0.92rem;
  }

  .blog-list {
    padding-top: 1.4rem;
    border-top: 1px solid var(--global-divider-color);
  }

  .blog-list li {
    padding: 0.72rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }

  @media (hover: hover) and (pointer: fine) {
    .blog-shelf:hover {
      transform: translateY(-3px);
      border-color: color-mix(in srgb, var(--global-theme-color) 40%, var(--global-divider-color));
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.055);
    }

    .blog-shelf:hover::before {
      transform: scaleX(1);
    }

    .blog-post-link:hover {
      transform: translateX(4px);
    }
  }

  .blog-list li:last-child {
    border-bottom: 0;
  }

  @media (max-width: 768px) {
    .blog-intro,
    .blog-shelves {
      grid-template-columns: 1fr;
    }

    .blog-count {
      font-size: 2.6rem;
    }
  }
---

{% assign poetry_posts = site.posts | where_exp: 'post', "post.tags contains 'poetry'" %}
{% assign economics_posts = site.posts | where_exp: 'post', "post.tags contains 'economics'" %}
{% assign reading_posts = site.posts | where_exp: 'post', "post.tags contains 'reading'" %}
{% assign fragments_posts = site.posts | where_exp: 'post', "post.tags contains 'fragments'" %}

<section class="blog-index" aria-label="Blog index">
  <div class="blog-intro">
    <p>
      An index for writing that sits between research, reading, and private fragments. The archive is grouped by genre so the essays and poems can be browsed without losing their dates.
    </p>
    <div aria-label="{{ site.posts | size }} blog posts">
      <span class="blog-count">{{ site.posts | size }}</span>
      <span class="blog-count-label">posts</span>
    </div>
  </div>

  <div class="blog-shelves">
    <section class="blog-shelf">
      <h2>Poems</h2>
      <ol>
        {% for post in poetry_posts limit: 4 %}
          <li>
            <a class="blog-post-link" href="{{ post.url | relative_url }}">
              <span class="blog-post-title">{{ post.title }}</span>
              <time class="blog-post-meta" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time>
            </a>
          </li>
        {% else %}
          <li><p class="blog-empty">No posts yet.</p></li>
        {% endfor %}
      </ol>
    </section>

    <section class="blog-shelf">
      <h2>Economic Essays</h2>
      <ol>
        {% for post in economics_posts limit: 4 %}
          <li>
            <a class="blog-post-link" href="{{ post.url | relative_url }}">
              <span class="blog-post-title">{{ post.title }}</span>
              <time class="blog-post-meta" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time>
            </a>
          </li>
        {% else %}
          <li><p class="blog-empty">No posts yet.</p></li>
        {% endfor %}
      </ol>
    </section>

    <section class="blog-shelf">
      <h2>Reading Notes</h2>
      <ol>
        {% for post in reading_posts limit: 4 %}
          <li>
            <a class="blog-post-link" href="{{ post.url | relative_url }}">
              <span class="blog-post-title">{{ post.title }}</span>
              <time class="blog-post-meta" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time>
            </a>
          </li>
        {% else %}
          <li><p class="blog-empty">No posts yet.</p></li>
        {% endfor %}
      </ol>
    </section>

    <section class="blog-shelf">
      <h2>Fragments</h2>
      <ol>
        {% for post in fragments_posts limit: 4 %}
          <li>
            <a class="blog-post-link" href="{{ post.url | relative_url }}">
              <span class="blog-post-title">{{ post.title }}</span>
              <time class="blog-post-meta" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time>
            </a>
          </li>
        {% else %}
          <li><p class="blog-empty">No posts yet.</p></li>
        {% endfor %}
      </ol>
    </section>

  </div>

  <section class="blog-list">
    <h2>All Posts</h2>
    <ol>
      {% for post in site.posts %}
        <li>
          <a class="blog-post-link" href="{{ post.url | relative_url }}">
            <span class="blog-post-title">{{ post.title }}</span>
            <time class="blog-post-meta" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time>
          </a>
        </li>
      {% endfor %}
    </ol>
  </section>
</section>
