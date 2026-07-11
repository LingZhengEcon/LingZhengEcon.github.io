---
layout: page
title: Blog
permalink: /blog/
nav: true
nav_order: 3
description: Poems, economic essays, reading notes, and ordinary fragments.
_styles: |
  .blog-index {
    max-width: 48rem;
  }

  .blog-list {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--global-divider-color);
  }

  .blog-entry {
    display: grid;
    grid-template-columns: 8.2rem minmax(0, 1fr);
    gap: 1.5rem;
    padding: 2rem 0 2.15rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .blog-entry-meta {
    padding-top: 0.25rem;
    color: var(--global-text-color-light);
    font-size: 0.78rem;
    line-height: 1.6;
    letter-spacing: 0.035em;
    text-transform: uppercase;
  }

  .blog-entry-meta time,
  .blog-entry-tag {
    display: block;
  }

  .blog-entry h2 {
    margin: 0 0 0.55rem;
    font-family: "Cormorant Garamond", "Iowan Old Style", Baskerville, Georgia, serif;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.15;
  }

  .blog-entry h2 a {
    color: var(--global-text-color);
    text-decoration: none;
    background-image: linear-gradient(var(--global-theme-color), var(--global-theme-color));
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 0 1px;
    transition:
      color 0.2s ease,
      background-size 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .blog-entry h2 a:hover {
    color: var(--global-theme-color);
    background-size: 100% 1px;
  }

  .blog-entry-summary {
    max-width: 39rem;
    margin: 0 0 0.7rem;
    color: var(--global-text-color-light);
    font-size: 0.96rem;
    line-height: 1.7;
  }

  .blog-read-more {
    color: var(--global-theme-color);
    font-size: 0.84rem;
    text-decoration: none;
  }

  .blog-read-more::after {
    content: " →";
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .blog-read-more:hover {
    text-decoration: none;
  }

  .blog-read-more:hover::after {
    transform: translateX(3px);
  }

  @media (max-width: 640px) {
    .blog-entry {
      grid-template-columns: 1fr;
      gap: 0.55rem;
      padding: 1.55rem 0 1.7rem;
    }

    .blog-entry-meta time,
    .blog-entry-tag {
      display: inline;
    }

    .blog-entry-tag::before {
      content: " · ";
    }

    .blog-entry h2 {
      font-size: 1.55rem;
    }
  }
---

<section class="blog-index" aria-label="Blog posts">
  <ol class="blog-list">
    {% for post in site.posts %}
      <li>
        <article class="blog-entry">
          <div class="blog-entry-meta">
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%d %b %Y' }}</time>
            {% if post.tags and post.tags != empty %}
              <span class="blog-entry-tag">{{ post.tags | first }}</span>
            {% endif %}
          </div>
          <div>
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            <p class="blog-entry-summary">
              {% if post.description %}
                {{ post.description }}
              {% else %}
                {{ post.excerpt | strip_html | strip_newlines | truncatewords: 28 }}
              {% endif %}
            </p>
            <a class="blog-read-more" href="{{ post.url | relative_url }}" aria-label="Read {{ post.title }}">Read more</a>
          </div>
        </article>
      </li>
    {% endfor %}
  </ol>
</section>
