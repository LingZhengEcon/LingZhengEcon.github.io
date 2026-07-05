---
layout: page
title: Blog
permalink: /blog/
nav: true
nav_order: 3
description: Poems, economic essays, reading notes, and ordinary fragments.
_styles: |
  body.blog-desktop-page {
    overflow-x: hidden;
    background: #8aa167;
  }

  body.blog-desktop-page .container.mt-5 {
    max-width: none;
    width: 100%;
    margin-top: 0 !important;
    padding-right: 0;
    padding-left: 0;
  }

  body.blog-desktop-page footer {
    display: none;
  }

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
    width: 100vw;
    min-height: calc(100vh - 3.5rem);
    margin: 0;
    margin-left: 50%;
    overflow: hidden;
    transform: translateX(-50%);
    border: 0;
    border-radius: 0;
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

  .desktop-widgets {
    position: absolute;
    top: 1.15rem;
    left: 1.2rem;
    display: grid;
    grid-template-rows: minmax(0, 0.48fr) minmax(0, 0.52fr);
    width: min(19.5rem, calc(100vw - 2.4rem));
    height: min(75%, 41rem);
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
    padding: 0.95rem 1rem 0.9rem;
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
    font-size: 2rem;
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
    gap: 0.22rem;
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
    border-radius: 4px;
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
    height: 1.55rem;
    background:
      linear-gradient(90deg, rgba(124, 92, 18, 0.12), transparent),
      repeating-linear-gradient(90deg, rgba(116, 85, 18, 0.12) 0 1px, transparent 1px 28px);
  }

  .note-body {
    height: calc(100% - 1.55rem);
    padding: 0.92rem 1rem 1.05rem;
    background: repeating-linear-gradient(#fff4b8 0 2.15rem, #eadb96 2.2rem 2.26rem);
  }

  .note-title {
    margin: 0 0 0.55rem;
    font-size: 1.05rem;
    font-weight: 760;
  }

  .note-list {
    display: grid;
    gap: 0.48rem;
    min-height: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .note-post {
    display: none;
    color: #28230f;
    font-size: 0.88rem;
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
    inset: 4.2rem 2.1rem 7rem 23rem;
  }

  .desktop-folder {
    position: absolute;
    width: 9rem;
  }

  .desktop-folder:nth-child(1) {
    top: 0.8rem;
    left: 6%;
  }

  .desktop-folder:nth-child(2) {
    top: 2.5rem;
    right: 13%;
  }

  .desktop-folder:nth-child(3) {
    top: 16rem;
    left: 32%;
  }

  .desktop-folder:nth-child(4) {
    right: 4%;
    bottom: 6.2rem;
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
    width: 6.7rem;
    height: 4.85rem;
    filter: drop-shadow(0 8px 9px rgba(21, 45, 58, 0.34));
  }

  .folder-svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .desktop-defs {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  .folder-shape::before {
    content: "";
    position: absolute;
    top: 0.05rem;
    left: 0.22rem;
    width: 6.2rem;
    height: 1.35rem;
    border-radius: 0.44rem 0.44rem 0.12rem 0.12rem;
    background: linear-gradient(#87d9f7, #5fc0eb);
    box-shadow: inset 0 0.18rem 0 rgba(255, 255, 255, 0.58);
    display: none;
  }

  .folder-shape::after {
    content: "";
    position: absolute;
    inset: 0.82rem 0 0;
    border-radius: 0.34rem 0.34rem 0.48rem 0.48rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.42), transparent 24%),
      linear-gradient(#6ed0f2, #43adde);
    box-shadow:
      inset 0 0.18rem 0 rgba(255, 255, 255, 0.4),
      inset 0 -0.2rem 0 rgba(0, 62, 98, 0.13),
      0 1px 0 rgba(255, 255, 255, 0.72);
    display: none;
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
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 30;
    width: min(50rem, calc(100vw - 4rem));
    max-height: min(68vh, 42rem);
    overflow: auto;
    transform: translate(-50%, -50%);
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
    gap: 0.46rem;
    padding: 0.7rem 0.86rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(245, 246, 248, 0.92);
    color: rgba(32, 33, 36, 0.7);
    font-size: 0.8rem;
    font-weight: 720;
  }

  .window-dot {
    display: inline-grid;
    place-items: center;
    width: 0.66rem;
    height: 0.66rem;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: #ff5f57;
    cursor: pointer;
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
    grid-template-columns: 5.9rem minmax(0, 1fr);
    gap: 1rem;
    align-items: baseline;
    padding: 0.86rem 1rem;
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
    font-size: 1rem;
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
    gap: 0.78rem;
    padding: 0.66rem 0.82rem;
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
    width: 3.45rem;
    height: 3.45rem;
    border: 0;
    border-radius: 14px;
    position: relative;
    overflow: hidden;
    background: transparent;
    box-shadow: 0 8px 16px rgba(20, 28, 38, 0.18);
    color: #202124;
    cursor: pointer;
    font-size: 0;
  }

  .dock-button:hover,
  .dock-button:focus-visible {
    transform: translateY(-5px);
  }

  .dock-icon {
    position: absolute;
    inset: 0.08rem;
    width: calc(100% - 0.16rem);
    height: calc(100% - 0.16rem);
    overflow: visible;
    border-radius: 0;
    background: none !important;
  }

  .dock-icon::before,
  .dock-icon::after {
    display: none;
  }

  .dock-panel {
    position: absolute;
    left: 50%;
    bottom: 5.9rem;
    display: none;
    width: min(42rem, calc(100vw - 2.6rem));
    max-height: 52vh;
    overflow: auto;
    padding: 0;
    transform: translateX(-50%);
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.76);
    box-shadow: 0 16px 44px rgba(24, 31, 42, 0.2);
    backdrop-filter: blur(18px);
    color: #202124;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .dock-panel.is-open {
    display: block;
  }

  .dock-panel-head {
    display: flex;
    align-items: center;
    gap: 0.46rem;
    padding: 0.7rem 0.86rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(245, 246, 248, 0.86);
    font-weight: 720;
  }

  .dock-panel-body {
    padding: 0.75rem 0;
  }

  .dock-panel-body p {
    margin: 0;
    padding: 0.9rem 1rem;
    color: var(--desktop-muted);
  }

  .dock-panel strong {
    display: block;
    margin-bottom: 0.2rem;
  }

  @media (max-width: 900px) {
    .blog-desktop {
      min-height: calc(100vh - 3.5rem);
    }

    .desktop-widgets {
      position: relative;
      top: auto;
      left: auto;
      width: auto;
      height: auto;
      padding: 1rem 1rem 0;
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
      top: 50%;
      bottom: auto;
      left: 50%;
      z-index: 20;
    }
  }

  @media (max-width: 520px) {
    .blog-desktop {
      min-height: calc(100vh - 3.5rem);
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

    .folder-window {
      width: calc(100vw - 1.4rem);
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

<script>
  document.body.classList.add("blog-desktop-page");
</script>

<section class="blog-desktop" aria-label="Blog desktop">
  <svg class="desktop-defs" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="folder-tab" x1="20" x2="20" y1="8" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#94e1fb" />
        <stop offset="1" stop-color="#55bbe7" />
      </linearGradient>
      <linearGradient id="folder-body" x1="64" x2="64" y1="28" y2="88" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#78d4f3" />
        <stop offset="0.42" stop-color="#56bee9" />
        <stop offset="1" stop-color="#39a8dc" />
      </linearGradient>
      <linearGradient id="finder-left" x1="14" x2="62" y1="10" y2="110" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#1fd2ff" />
        <stop offset="0.48" stop-color="#10a8ff" />
        <stop offset="1" stop-color="#087cf0" />
      </linearGradient>
      <linearGradient id="finder-right" x1="116" x2="62" y1="8" y2="112" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fbfeff" />
        <stop offset="0.54" stop-color="#dff7ff" />
        <stop offset="1" stop-color="#8bdcff" />
      </linearGradient>
      <linearGradient id="music-bg" x1="18" x2="110" y1="10" y2="118" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ff6aa2" />
        <stop offset="0.36" stop-color="#ff245f" />
        <stop offset="1" stop-color="#ff3845" />
      </linearGradient>
      <linearGradient id="trash-body" x1="30" x2="98" y1="34" y2="118" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#f9ffff" stop-opacity="0.9" />
        <stop offset="0.55" stop-color="#cad9d7" stop-opacity="0.72" />
        <stop offset="1" stop-color="#9aa9a6" stop-opacity="0.78" />
      </linearGradient>
      <symbol id="desktop-folder-symbol" viewBox="0 0 128 96">
        <path d="M8 22c0-6.2 5-11.2 11.2-11.2h28.3c4.2 0 6.8 1.5 9.6 4.6l6 6.6h45.7c6.2 0 11.2 5 11.2 11.2v4.2H8V22Z" fill="url(#folder-tab)" />
        <path d="M9 30h110c4.4 0 8 3.6 8 8v40.8c0 6.2-5 11.2-11.2 11.2H12.2C6 90 1 85 1 78.8V38c0-4.4 3.6-8 8-8Z" fill="url(#folder-body)" />
        <path d="M4 34.4h120v8.8H4z" fill="#baf0ff" opacity="0.46" />
        <path d="M4 33h120" stroke="#eaffff" stroke-width="3" stroke-linecap="round" opacity="0.7" />
        <path d="M9 30h110c4.4 0 8 3.6 8 8v40.8c0 6.2-5 11.2-11.2 11.2H12.2C6 90 1 85 1 78.8V38c0-4.4 3.6-8 8-8Z" fill="none" stroke="#167fac" stroke-opacity="0.22" />
      </symbol>
      <symbol id="dock-finder-symbol" viewBox="0 0 128 128">
        <rect x="8" y="8" width="112" height="112" rx="27" fill="url(#finder-left)" />
        <path d="M64 8h29c14.9 0 27 12.1 27 27v58c0 14.9-12.1 27-27 27H64V8Z" fill="url(#finder-right)" />
        <path d="M64 8v112" stroke="#0877cf" stroke-width="2" opacity="0.45" />
        <path d="M31 47v10M89 45v11" stroke="#122337" stroke-width="5" stroke-linecap="round" />
        <path d="M32 78c11 12 42 15 64-4" fill="none" stroke="#122337" stroke-width="4" stroke-linecap="round" />
        <path d="M65 34c-6 11-7 20-4 30" fill="none" stroke="#122337" stroke-width="3" stroke-linecap="round" opacity="0.75" />
        <rect x="8" y="8" width="112" height="112" rx="27" fill="none" stroke="#fff" stroke-opacity="0.28" stroke-width="2" />
      </symbol>
      <symbol id="dock-music-symbol" viewBox="0 0 128 128">
        <rect x="10" y="10" width="108" height="108" rx="27" fill="url(#music-bg)" />
        <path d="M76 30v55.5c0 9.1-7.7 16.5-17.2 16.5-8.4 0-14.8-4.9-14.8-11.9 0-8.6 8.6-15 18.6-13.5 2 .3 3.9.8 5.4 1.6V43.4l38-7.8v13.2L76 55.2" fill="#fff" />
        <rect x="10" y="10" width="108" height="108" rx="27" fill="none" stroke="#fff" stroke-opacity="0.24" stroke-width="2" />
      </symbol>
      <symbol id="dock-trash-symbol" viewBox="0 0 128 128">
        <path d="M35 35h58l-7.2 80H42.2L35 35Z" fill="url(#trash-body)" stroke="#f7ffff" stroke-opacity="0.7" stroke-width="2" />
        <path d="M31 34h66" stroke="#ecf5f4" stroke-width="9" stroke-linecap="round" />
        <path d="M51 27h26" stroke="#d6e4e2" stroke-width="8" stroke-linecap="round" />
        <path d="M49 45l4 59M64 45v60M79 45l-4 59" stroke="#798987" stroke-opacity="0.36" stroke-width="3" stroke-linecap="round" />
        <path d="M38 44c14 8 36 3 51 0" stroke="#fff" stroke-opacity="0.38" stroke-width="4" stroke-linecap="round" />
        <path d="M45 31l9-8 15 8 11-7 9 8" fill="none" stroke="#3c8cff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.75" />
        <path d="M45 31l9-8 15 8 11-7 9 8" fill="none" stroke="#ffcf2f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
      </symbol>
    </defs>
  </svg>

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
        <span class="folder-shape" aria-hidden="true"><svg class="folder-svg"><use href="#desktop-folder-symbol"></use></svg></span>
        <span class="folder-label">Poetry</span>
      </summary>
      <div class="folder-window">
        <div class="folder-window-head"><button class="window-dot" type="button" data-close-folder aria-label="Close Poetry"></button><span class="window-dot"></span><span class="window-dot"></span>Poetry</div>
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
        <span class="folder-shape" aria-hidden="true"><svg class="folder-svg"><use href="#desktop-folder-symbol"></use></svg></span>
        <span class="folder-label">Econ Essays</span>
      </summary>
      <div class="folder-window">
        <div class="folder-window-head"><button class="window-dot" type="button" data-close-folder aria-label="Close Econ Essays"></button><span class="window-dot"></span><span class="window-dot"></span>Econ Essays</div>
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
        <span class="folder-shape" aria-hidden="true"><svg class="folder-svg"><use href="#desktop-folder-symbol"></use></svg></span>
        <span class="folder-label">Reading Notes</span>
      </summary>
      <div class="folder-window">
        <div class="folder-window-head"><button class="window-dot" type="button" data-close-folder aria-label="Close Reading Notes"></button><span class="window-dot"></span><span class="window-dot"></span>Reading Notes</div>
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
        <span class="folder-shape" aria-hidden="true"><svg class="folder-svg"><use href="#desktop-folder-symbol"></use></svg></span>
        <span class="folder-label">Fragments</span>
      </summary>
      <div class="folder-window">
        <div class="folder-window-head"><button class="window-dot" type="button" data-close-folder aria-label="Close Fragments"></button><span class="window-dot"></span><span class="window-dot"></span>Fragments</div>
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
    <button class="dock-button" type="button" data-dock-panel="finder" aria-label="Open Finder">
      <svg class="dock-icon" aria-hidden="true"><use href="#dock-finder-symbol"></use></svg>
    </button>
    <button class="dock-button" type="button" data-dock-panel="music" aria-label="Play piano">
      <svg class="dock-icon" aria-hidden="true"><use href="#dock-music-symbol"></use></svg>
    </button>
    <button class="dock-button" type="button" data-dock-panel="trash" aria-label="Open Trash">
      <svg class="dock-icon" aria-hidden="true"><use href="#dock-trash-symbol"></use></svg>
    </button>
  </div>

  <section class="dock-panel" data-panel="finder" aria-label="All posts">
    <div class="dock-panel-head"><button class="window-dot" type="button" data-close-panel aria-label="Close Finder"></button><span class="window-dot"></span><span class="window-dot"></span>Finder - All Blog Posts</div>
    <div class="dock-panel-body">
      <ul class="folder-posts">
        {% for post in site.posts %}
          <li>
            <a href="{{ post.url | relative_url }}"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time><span>{{ post.title }}</span></a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </section>

  <section class="dock-panel" data-panel="music" aria-label="Music">
    <div class="dock-panel-head"><button class="window-dot" type="button" data-close-panel aria-label="Close Music"></button><span class="window-dot"></span><span class="window-dot"></span>Music</div>
    <div class="dock-panel-body">
      <p><strong>Piano sketch</strong>Click the Music icon again to replay a short synthesized piano phrase.</p>
    </div>
  </section>

  <section class="dock-panel" data-panel="trash" aria-label="Trash">
    <div class="dock-panel-head"><button class="window-dot" type="button" data-close-panel aria-label="Close Trash"></button><span class="window-dot"></span><span class="window-dot"></span>Trash</div>
    <div class="dock-panel-body">
      <p>Trash is empty.</p>
    </div>
  </section>
</section>

<script>
  (() => {
    const posts = Array.from(document.querySelectorAll("[data-random-posts] .note-post"));
    posts
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .forEach((post) => post.classList.add("is-visible"));

    const buttons = document.querySelectorAll("[data-dock-panel]");
    const panels = document.querySelectorAll("[data-panel]");
    let audioContext;

    const playPianoSketch = () => {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioContext = audioContext || new AudioContext();
      const now = audioContext.currentTime;
      const notes = [261.63, 329.63, 392, 523.25, 493.88, 392, 329.63, 261.63];

      notes.forEach((frequency, index) => {
        const start = now + index * 0.18;
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(frequency, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.16, start + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.34);
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start(start);
        oscillator.stop(start + 0.36);
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.dockPanel;
        panels.forEach((panel) => panel.classList.toggle("is-open", panel.dataset.panel === target && !panel.classList.contains("is-open")));
        if (target === "music") playPianoSketch();
      });
    });

    document.querySelectorAll("[data-close-folder]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        button.closest("details").removeAttribute("open");
      });
    });

    document.querySelectorAll("[data-close-panel]").forEach((button) => {
      button.addEventListener("click", () => button.closest("[data-panel]").classList.remove("is-open"));
    });
  })();
</script>
