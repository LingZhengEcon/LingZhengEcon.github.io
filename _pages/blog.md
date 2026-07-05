---
layout: page
title: Blog
permalink: /blog/
nav: true
nav_order: 3
description: Poems, economic essays, reading notes, and ordinary fragments.
_styles: |
  .post-header {
    display: none;
  }

  .post article {
    margin: 0;
  }

  .blog-desktop {
    --desktop-ink: #202124;
    --desktop-muted: rgba(32, 33, 36, 0.64);
    --desktop-glass: rgba(255, 255, 255, 0.72);
    --desktop-line: rgba(255, 255, 255, 0.58);
    --folder-front: #51b7e4;
    --folder-back: #82d0f1;
    position: relative;
    width: min(1180px, calc(100vw - 1.5rem));
    min-height: clamp(720px, 82vh, 920px);
    margin: 0 auto 2.5rem;
    margin-left: 50%;
    overflow: hidden;
    transform: translateX(-50%);
    border: 1px solid rgba(22, 22, 22, 0.12);
    border-radius: 22px;
    background:
      linear-gradient(90deg, rgba(255, 255, 255, 0.54), rgba(255, 255, 255, 0.06) 28%, rgba(255, 255, 255, 0.1) 70%),
      linear-gradient(171deg, rgba(255, 225, 151, 0.8) 0 16%, transparent 16.2% 100%),
      linear-gradient(72deg, transparent 0 58%, rgba(156, 192, 205, 0.5) 58.2% 74%, transparent 74.2% 100%),
      linear-gradient(115deg, #d8c2a2 0 23%, #f0eadf 24% 42%, #9cb672 43% 64%, #6f914f 65% 100%);
    box-shadow: 0 22px 70px rgba(17, 24, 39, 0.16);
    color: var(--desktop-ink);
    isolation: isolate;
  }

  .blog-desktop::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(101deg, transparent 0 25%, rgba(86, 62, 39, 0.34) 25.3% 26.1%, transparent 26.4% 42%, rgba(78, 62, 48, 0.28) 42.3% 43%, transparent 43.3%),
      repeating-linear-gradient(98deg, rgba(47, 57, 52, 0.12) 0 2px, transparent 2px 38px);
    opacity: 0.48;
    mix-blend-mode: multiply;
  }

  .blog-desktop::after {
    content: "";
    position: absolute;
    inset: auto -8% -12% 22%;
    height: 35%;
    z-index: -1;
    background:
      linear-gradient(172deg, transparent 0 12%, rgba(78, 104, 52, 0.62) 12.2% 46%, transparent 46.2%),
      linear-gradient(18deg, rgba(92, 128, 58, 0.62) 0 36%, transparent 36.2%);
    filter: blur(1px);
  }

  .desktop-title {
    position: absolute;
    top: 1.2rem;
    left: 1.4rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.96);
    font-size: clamp(1.45rem, 3vw, 2.65rem);
    font-weight: 750;
    letter-spacing: 0;
    line-height: 1;
    text-shadow: 0 2px 14px rgba(0, 0, 0, 0.36);
  }

  .desktop-date {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.92rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.78);
  }

  .desktop-widgets {
    position: absolute;
    top: 5.6rem;
    left: 1.2rem;
    display: grid;
    width: min(24rem, calc(100vw - 3rem));
    gap: 1rem;
  }

  .desktop-widget {
    overflow: hidden;
    border: 1px solid var(--desktop-line);
    border-radius: 20px;
    background: var(--desktop-glass);
    box-shadow: 0 18px 38px rgba(31, 41, 55, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(22px) saturate(1.25);
  }

  .activity-widget {
    padding: 1.1rem 1.15rem 1rem;
  }

  .widget-kicker {
    margin: 0 0 0.8rem;
    color: var(--desktop-muted);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .activity-head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.9rem;
  }

  .activity-count {
    margin: 0;
    font-size: 2.4rem;
    font-weight: 780;
    line-height: 0.95;
  }

  .activity-month {
    margin: 0 0 0.18rem;
    color: var(--desktop-muted);
    font-size: 0.9rem;
    font-weight: 650;
  }

  .activity-weekdays,
  .activity-grid {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 0.28rem;
  }

  .activity-weekdays {
    margin-bottom: 0.32rem;
    color: rgba(32, 33, 36, 0.46);
    font-size: 0.66rem;
    font-weight: 700;
    text-align: center;
  }

  .activity-day {
    aspect-ratio: 1;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.55);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  }

  .activity-day.is-active {
    background: #1688e8;
    box-shadow: 0 4px 10px rgba(22, 136, 232, 0.26), inset 0 0 0 1px rgba(255, 255, 255, 0.34);
  }

  .activity-day.is-double {
    background: linear-gradient(135deg, #1688e8 0 48%, #ff9d45 49% 100%);
  }

  .note-widget {
    padding: 0;
    background: #fff4b8;
    border-color: rgba(133, 102, 20, 0.18);
    box-shadow: 0 18px 34px rgba(72, 54, 19, 0.18);
  }

  .note-widget::before {
    content: "";
    display: block;
    height: 1.9rem;
    background:
      linear-gradient(90deg, rgba(124, 92, 18, 0.12), transparent),
      repeating-linear-gradient(90deg, rgba(116, 85, 18, 0.12) 0 1px, transparent 1px 28px);
  }

  .note-body {
    padding: 1rem 1.15rem 1.2rem;
    background: repeating-linear-gradient(#fff4b8 0 2.15rem, #eadb96 2.2rem 2.26rem);
  }

  .note-title {
    margin: 0 0 0.55rem;
    font-size: 1.2rem;
    font-weight: 760;
  }

  .note-list {
    display: grid;
    gap: 0.48rem;
    min-height: 7.7rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .note-post {
    display: none;
    color: #28230f;
    font-size: 0.94rem;
    line-height: 1.5;
  }

  .note-post.is-visible {
    display: block;
  }

  .note-post a {
    color: inherit;
    font-weight: 650;
    text-decoration: none;
  }

  .note-post a:hover {
    text-decoration: underline;
  }

  .note-date {
    display: block;
    color: rgba(40, 35, 15, 0.56);
    font-size: 0.75rem;
  }

  .desktop-icons {
    position: absolute;
    inset: 5.1rem 1.6rem 6.8rem 28rem;
  }

  .desktop-folder {
    position: absolute;
    width: 8.6rem;
  }

  .desktop-folder:nth-child(1) {
    top: 1.2rem;
    left: 6%;
  }

  .desktop-folder:nth-child(2) {
    top: 2.8rem;
    right: 17%;
  }

  .desktop-folder:nth-child(3) {
    top: 15.5rem;
    left: 35%;
  }

  .desktop-folder:nth-child(4) {
    right: 3%;
    bottom: 7.8rem;
  }

  .folder-toggle {
    display: grid;
    justify-items: center;
    gap: 0.48rem;
    cursor: pointer;
    list-style: none;
    outline: none;
  }

  .folder-toggle::-webkit-details-marker {
    display: none;
  }

  .folder-shape {
    position: relative;
    width: 5.7rem;
    height: 4.1rem;
    filter: drop-shadow(0 8px 8px rgba(21, 45, 58, 0.28));
  }

  .folder-shape::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0.32rem;
    width: 2.55rem;
    height: 0.95rem;
    border-radius: 0.32rem 0.32rem 0.12rem 0.12rem;
    background: var(--folder-back);
  }

  .folder-shape::after {
    content: "";
    position: absolute;
    inset: 0.55rem 0 0;
    border-radius: 0.34rem 0.34rem 0.5rem 0.5rem;
    background: linear-gradient(#6cc8ed, var(--folder-front));
    box-shadow: inset 0 0.22rem 0 rgba(255, 255, 255, 0.38), inset 0 -0.16rem 0 rgba(0, 58, 92, 0.12);
  }

  .folder-label {
    max-width: 8.4rem;
    padding: 0.12rem 0.4rem;
    border-radius: 0.35rem;
    color: #fff;
    font-size: 0.92rem;
    font-weight: 760;
    line-height: 1.15;
    text-align: center;
    text-shadow: 0 1px 7px rgba(0, 0, 0, 0.55);
  }

  .desktop-folder[open] {
    z-index: 8;
  }

  .desktop-folder[open] .folder-label {
    background: #1475ed;
    text-shadow: none;
  }

  .folder-window {
    position: absolute;
    top: 5.4rem;
    left: 50%;
    width: min(22rem, 78vw);
    max-height: 24rem;
    overflow: auto;
    transform: translateX(-50%);
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 14px;
    background: rgba(246, 248, 250, 0.86);
    box-shadow: 0 18px 52px rgba(20, 28, 38, 0.26);
    backdrop-filter: blur(20px) saturate(1.2);
  }

  .folder-window-head {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    gap: 0.42rem;
    padding: 0.62rem 0.78rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(245, 246, 248, 0.92);
    color: rgba(32, 33, 36, 0.7);
    font-size: 0.8rem;
    font-weight: 720;
  }

  .window-dot {
    width: 0.66rem;
    height: 0.66rem;
    border-radius: 50%;
    background: #ff5f57;
  }

  .window-dot:nth-child(2) {
    background: #ffbd2e;
  }

  .window-dot:nth-child(3) {
    background: #28c840;
  }

  .folder-posts {
    margin: 0;
    padding: 0.4rem 0;
    list-style: none;
  }

  .folder-posts li {
    border-top: 1px solid rgba(0, 0, 0, 0.055);
  }

  .folder-posts li:first-child {
    border-top: 0;
  }

  .folder-posts a {
    display: grid;
    grid-template-columns: 4.7rem minmax(0, 1fr);
    gap: 0.75rem;
    align-items: baseline;
    padding: 0.72rem 0.88rem;
    color: var(--desktop-ink);
    text-decoration: none;
  }

  .folder-posts a:hover {
    background: rgba(20, 117, 237, 0.11);
  }

  .folder-posts time {
    color: var(--desktop-muted);
    font-size: 0.74rem;
    font-variant-numeric: tabular-nums;
  }

  .folder-posts span {
    overflow: hidden;
    font-size: 0.92rem;
    font-weight: 650;
    line-height: 1.35;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .folder-empty {
    margin: 0;
    padding: 0.92rem;
    color: var(--desktop-muted);
    font-size: 0.9rem;
  }

  .desktop-dock {
    position: absolute;
    right: 50%;
    bottom: 1.35rem;
    display: flex;
    align-items: end;
    gap: 0.72rem;
    padding: 0.62rem 0.78rem;
    transform: translateX(50%);
    border: 1px solid rgba(255, 255, 255, 0.48);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.42);
    box-shadow: 0 18px 44px rgba(24, 31, 42, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.66);
    backdrop-filter: blur(22px) saturate(1.2);
  }

  .dock-button {
    display: grid;
    place-items: center;
    width: 3.15rem;
    height: 3.15rem;
    border: 0;
    border-radius: 14px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(237, 242, 247, 0.86));
    box-shadow: inset 0 1px 0 #fff, 0 8px 16px rgba(20, 28, 38, 0.18);
    color: #202124;
    cursor: pointer;
    font-size: 1.25rem;
  }

  .dock-button:hover,
  .dock-button:focus-visible {
    transform: translateY(-5px);
  }

  .dock-note {
    position: absolute;
    right: 1.2rem;
    bottom: 5.9rem;
    display: none;
    width: min(21rem, calc(100vw - 2.4rem));
    padding: 0.95rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.76);
    box-shadow: 0 16px 44px rgba(24, 31, 42, 0.2);
    backdrop-filter: blur(18px);
    color: #202124;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .dock-note.is-open {
    display: block;
  }

  .dock-note strong {
    display: block;
    margin-bottom: 0.2rem;
  }

  @media (max-width: 900px) {
    .blog-desktop {
      min-height: 980px;
      border-radius: 18px;
    }

    .desktop-widgets {
      position: relative;
      top: auto;
      left: auto;
      width: auto;
      padding: 5.2rem 1rem 0;
    }

    .desktop-icons {
      position: relative;
      inset: auto;
      display: grid;
      grid-template-columns: repeat(2, minmax(8rem, 1fr));
      gap: 1.6rem 0.8rem;
      padding: 1.8rem 1rem 8.5rem;
    }

    .desktop-folder {
      position: relative;
      inset: auto !important;
      justify-self: center;
    }

    .folder-window {
      position: fixed;
      top: auto;
      bottom: 6rem;
      left: 50%;
      z-index: 20;
    }
  }

  @media (max-width: 520px) {
    .blog-desktop {
      width: calc(100vw - 0.75rem);
      min-height: 1040px;
      border-radius: 14px;
    }

    .desktop-title {
      left: 1rem;
    }

    .desktop-icons {
      grid-template-columns: 1fr;
    }

    .desktop-dock {
      gap: 0.5rem;
      padding: 0.55rem;
    }

    .dock-button {
      width: 2.85rem;
      height: 2.85rem;
    }
  }
---

{% assign latest_post = site.posts | first %}
{% assign latest_month_key = latest_post.date | date: '%Y-%m' %}
{% assign active_days = '|' %}
{% assign duplicate_days = '|' %}
{% for post in site.posts %}
{% assign post_month_key = post.date | date: '%Y-%m' %}
{% if post_month_key == latest_month_key %}
{% assign day_key = post.date | date: '%d' | prepend: '|' | append: '|' %}
{% if active_days contains day_key %}
{% assign duplicate_days = duplicate_days | append: post.date | date: '%d' | append: '|' %}
{% else %}
{% assign active_days = active_days | append: post.date | date: '%d' | append: '|' %}
{% endif %}
{% endif %}
{% endfor %}

{% assign poetry_posts = site.posts | where_exp: 'post', "post.tags contains 'poetry'" %}
{% assign economics_posts = site.posts | where_exp: 'post', "post.tags contains 'economics'" %}
{% assign reading_posts = site.posts | where_exp: 'post', "post.tags contains 'reading'" %}
{% assign fragments_posts = site.posts | where_exp: 'post', "post.tags contains 'fragments'" %}

<section class="blog-desktop" aria-labelledby="blog-desktop-title">
  <h1 class="desktop-title" id="blog-desktop-title">
    Blog
    <span class="desktop-date">{{ site.time | date: '%A, %b %-d' }}</span>
  </h1>

  <aside class="desktop-widgets" aria-label="Blog widgets">
    <section class="desktop-widget activity-widget" aria-label="Recent writing calendar">
      <p class="widget-kicker">Writing activity</p>
      <div class="activity-head">
        <p class="activity-count">{{ site.posts | size }}</p>
        <p class="activity-month">{{ latest_post.date | date: '%B %Y' }}</p>
      </div>
      <div class="activity-weekdays" aria-hidden="true">
        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
      </div>
      <div class="activity-grid" aria-label="Dates with blog updates in {{ latest_post.date | date: '%B %Y' }}">
        {% for day in (1..35) %}
          {% assign day_string = day | prepend: '0' | slice: -2, 2 %}
          {% assign day_token = day_string | prepend: '|' | append: '|' %}
          <span
            class="activity-day{% if active_days contains day_token %} is-active{% endif %}{% if duplicate_days contains day_token %} is-double{% endif %}"
            title="{% if active_days contains day_token %}Updated on {{ latest_post.date | date: '%B' }} {{ day }}{% else %}No update{% endif %}"
          ></span>
        {% endfor %}
      </div>
    </section>

    <section class="desktop-widget note-widget" aria-label="Random posts">
      <div class="note-body">
        <p class="note-title">Pinned scraps</p>
        <ul class="note-list" data-random-posts>
          {% for post in site.posts %}
            <li class="note-post">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              <span class="note-date">{{ post.date | date: '%b %-d, %Y' }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    </section>

  </aside>

  <div class="desktop-icons" aria-label="Blog folders">
    <details class="desktop-folder">
      <summary class="folder-toggle">
        <span class="folder-shape" aria-hidden="true"></span>
        <span class="folder-label">Poetry</span>
      </summary>
      <div class="folder-window">
        <div class="folder-window-head"><span class="window-dot"></span><span class="window-dot"></span><span class="window-dot"></span>Poetry</div>
        <ul class="folder-posts">
          {% for post in poetry_posts %}
            <li>
              <a href="{{ post.url | relative_url }}"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%m.%d' }}</time><span>{{ post.title }}</span></a>
            </li>
          {% else %}
            <li><p class="folder-empty">No files yet.</p></li>
          {% endfor %}
        </ul>
      </div>
    </details>

    <details class="desktop-folder">
      <summary class="folder-toggle">
        <span class="folder-shape" aria-hidden="true"></span>
        <span class="folder-label">Econ Essays</span>
      </summary>
      <div class="folder-window">
        <div class="folder-window-head"><span class="window-dot"></span><span class="window-dot"></span><span class="window-dot"></span>Econ Essays</div>
        <ul class="folder-posts">
          {% for post in economics_posts %}
            <li>
              <a href="{{ post.url | relative_url }}"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%m.%d' }}</time><span>{{ post.title }}</span></a>
            </li>
          {% else %}
            <li><p class="folder-empty">No files yet.</p></li>
          {% endfor %}
        </ul>
      </div>
    </details>

    <details class="desktop-folder">
      <summary class="folder-toggle">
        <span class="folder-shape" aria-hidden="true"></span>
        <span class="folder-label">Reading Notes</span>
      </summary>
      <div class="folder-window">
        <div class="folder-window-head"><span class="window-dot"></span><span class="window-dot"></span><span class="window-dot"></span>Reading Notes</div>
        <ul class="folder-posts">
          {% for post in reading_posts %}
            <li>
              <a href="{{ post.url | relative_url }}"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%m.%d' }}</time><span>{{ post.title }}</span></a>
            </li>
          {% else %}
            <li><p class="folder-empty">No files yet.</p></li>
          {% endfor %}
        </ul>
      </div>
    </details>

    <details class="desktop-folder">
      <summary class="folder-toggle">
        <span class="folder-shape" aria-hidden="true"></span>
        <span class="folder-label">Fragments</span>
      </summary>
      <div class="folder-window">
        <div class="folder-window-head"><span class="window-dot"></span><span class="window-dot"></span><span class="window-dot"></span>Fragments</div>
        <ul class="folder-posts">
          {% for post in fragments_posts %}
            <li>
              <a href="{{ post.url | relative_url }}"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%m.%d' }}</time><span>{{ post.title }}</span></a>
            </li>
          {% else %}
            <li><p class="folder-empty">No files yet.</p></li>
          {% endfor %}
        </ul>
      </div>
    </details>

  </div>

  <div class="desktop-dock" aria-label="Small dock">
    <button class="dock-button" type="button" data-dock-note="about" aria-label="Open about note">~</button>
    <button class="dock-button" type="button" data-dock-note="now" aria-label="Open now note">?</button>
    <button class="dock-button" type="button" data-dock-note="mood" aria-label="Open mood note">*</button>
  </div>

  <p class="dock-note" data-note-panel="about"><strong>About this desktop</strong>Folders are categories; the yellow note reshuffles three posts every time the page loads.</p>
  <p class="dock-note" data-note-panel="now"><strong>Now</strong>Latest post: <a href="{{ latest_post.url | relative_url }}">{{ latest_post.title }}</a>.</p>
  <p class="dock-note" data-note-panel="mood"><strong>Mood</strong>A small place for essays, poems, reading traces, and unfinished thoughts.</p>
</section>

<script>
  (() => {
    const posts = Array.from(document.querySelectorAll("[data-random-posts] .note-post"));
    posts
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .forEach((post) => post.classList.add("is-visible"));

    const buttons = document.querySelectorAll("[data-dock-note]");
    const panels = document.querySelectorAll("[data-note-panel]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.dockNote;
        panels.forEach((panel) => panel.classList.toggle("is-open", panel.dataset.notePanel === target && !panel.classList.contains("is-open")));
      });
    });
  })();
</script>
