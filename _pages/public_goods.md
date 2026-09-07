---
layout: page
title: Public Goods
permalink: /public-goods/
nav: true
nav_order: 4
_styles: |
  .post-header::after {
    display: none;
  }
  .public-goods {
    padding-bottom: 2rem;
  }
  .public-goods-intro {
    margin: -0.5rem 0 3.5rem;
    max-width: 37rem;
  }
  .public-goods-intro p {
    color: var(--global-text-color-light);
    font-size: 1.02rem;
    line-height: 1.8;
    margin: 0;
  }
  .goods-layout {
    display: grid;
    grid-template-columns: 10rem minmax(0, 1fr);
    gap: 3.5rem;
    align-items: start;
  }
  .goods-nav {
    position: sticky;
    top: 6rem;
    display: grid;
    gap: 0.65rem;
    padding-top: 0.35rem;
  }
  .goods-nav a {
    position: relative;
    padding-left: 1rem;
    color: var(--global-text-color-light);
    font-size: 0.82rem;
    line-height: 1.5;
    text-decoration: none;
    transition: color 0.18s ease;
  }
  .goods-nav a::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.72em;
    width: 0.4rem;
    height: 1px;
    background: transparent;
  }
  .goods-nav a:hover,
  .goods-nav a.is-active {
    color: var(--global-theme-color);
    text-decoration: none;
  }
  .goods-nav a.is-active::before {
    background: currentColor;
  }
  .goods-sections {
    min-width: 0;
  }
  .goods-section {
    scroll-margin-top: 6rem;
  }
  .goods-section + .goods-section {
    margin-top: 3rem;
    padding-top: 2.5rem;
    border-top: 1px solid var(--global-divider-color);
  }
  .goods-section h2 {
    margin: 0 0 1.65rem;
    font-family: "Cormorant Garamond", "Roboto Slab", Georgia, serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: 0;
  }
  .goods-list {
    display: grid;
    gap: 1.65rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .goods-item {
    margin: 0;
    padding: 0;
  }
  .goods-item > a,
  .goods-item > strong {
    color: var(--global-text-color);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
  }
  .goods-item a {
    text-decoration: none;
    text-underline-offset: 0.2em;
  }
  .goods-item a:hover {
    color: var(--global-theme-color);
    text-decoration: underline;
  }
  .public-goods a:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 4px;
  }
  .goods-item p {
    margin: 0.3rem 0 0;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    line-height: 1.75;
  }
  .goods-item p a {
    color: var(--global-text-color);
    text-decoration: underline;
    text-decoration-color: var(--global-divider-color);
    font-weight: 400;
  }
  .goods-note {
    margin: 1.8rem 0 0;
    color: var(--global-text-color-light);
    font-size: 0.8rem;
    font-style: italic;
    line-height: 1.7;
  }
  .goods-status {
    color: var(--global-text-color-light);
    font-size: 0.78rem;
    font-weight: 400;
  }
  .goods-item--pending {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.25rem 1rem;
  }
  .goods-list--compact {
    gap: 1rem;
  }
  .goods-item--featured-note {
    display: grid;
    grid-template-columns: minmax(0, 11rem) minmax(0, 1fr);
    gap: 1.75rem;
    align-items: center;
    margin-bottom: 0.75rem;
  }
  .goods-cover-link {
    display: block;
  }
  .goods-cover {
    display: block;
    width: 100%;
    height: auto;
  }
  .goods-note-title {
    color: var(--global-text-color);
    font-family: "Cormorant Garamond", "Roboto Slab", Georgia, serif;
    font-size: 1.55rem;
    font-weight: 600;
    line-height: 1.25;
  }
  .goods-note-details .goods-note-action {
    margin-top: 1rem;
    font-size: 0.82rem;
  }
  @media (max-width: 768px) {
    .public-goods-intro {
      margin-bottom: 2rem;
    }
    .goods-layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .goods-nav {
      position: static;
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem 1.3rem;
      padding: 0 0 1.25rem;
      border-bottom: 1px solid var(--global-divider-color);
    }
    .goods-nav a {
      padding-left: 0;
    }
    .goods-nav a::before {
      display: none;
    }
    .goods-nav a.is-active {
      text-decoration: underline;
      text-underline-offset: 0.35em;
    }
    .goods-section + .goods-section {
      margin-top: 2.5rem;
      padding-top: 2rem;
    }
    .goods-section h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 480px) {
    .goods-item--featured-note {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
    .goods-cover-link {
      max-width: 12rem;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .goods-nav a {
      transition: none;
    }
  }
---

<section class="public-goods" aria-label="Public goods">
  <div class="public-goods-intro">
    <p>Notes, tools, and resources I use in economics research and share with others.</p>
  </div>
  <div class="goods-layout">
    <nav class="goods-nav" aria-label="Public goods sections">
      <a class="is-active" href="#lecture-notes" aria-current="true">Lecture Notes</a>
      <a href="#ai-workflow">AI Workflow</a>
      <a href="#templates">Templates</a>
      <a href="#ra-guidance">Econ RA Guidance</a>
      <a href="#phd-resources">Econ PhD Resources</a>
    </nav>

    <div class="goods-sections">
      <section class="goods-section" id="lecture-notes">
        <h2>Lecture Notes</h2>
        <ul class="goods-list">
          <li class="goods-item goods-item--featured-note">
            <a class="goods-cover-link" href="https://www.dropbox.com/scl/fi/zqr9ku3c6nf1q2ojn9r4m/ECON5102_Notes_1.pdf?rlkey=x5khh0toh6o58c0x8yc6maj3u&amp;st=4te9p8oq&amp;dl=0" aria-label="Open ECON5102: Mathematics for Economic Analysis notes on Dropbox">
              <img class="goods-cover" src="{{ '/assets/img/econ5102-notes-cover.png' | relative_url }}" alt="Cover of ECON5102: Mathematics for Economic Analysis lecture notes" width="773" height="1000" decoding="async">
            </a>
            <div class="goods-note-details">
              <a class="goods-note-title" href="https://www.dropbox.com/scl/fi/zqr9ku3c6nf1q2ojn9r4m/ECON5102_Notes_1.pdf?rlkey=x5khh0toh6o58c0x8yc6maj3u&amp;st=4te9p8oq&amp;dl=0">ECON5102: Mathematics for Economic Analysis</a>
              <p>Lecture notes · Lecturer: Duozhe Li</p>
              <p class="goods-note-action"><a href="https://www.dropbox.com/scl/fi/zqr9ku3c6nf1q2ojn9r4m/ECON5102_Notes_1.pdf?rlkey=x5khh0toh6o58c0x8yc6maj3u&amp;st=4te9p8oq&amp;dl=0">Read notes on Dropbox <span aria-hidden="true">↗</span></a></p>
            </div>
          </li>
          <li class="goods-item"><a href="https://www.overleaf.com/read/tbnhdxcwxqzp#f2e1f3">The Art of Economic Design</a><p>My incomplete notes on matching and mechanism design.</p></li>
          <li class="goods-item goods-item--pending"><strong>Lattice Theory and Its Application in Economics</strong><span class="goods-status">Coming soon</span></li>
          <li class="goods-item"><a href="https://github.com/paulgp/applied-methods-phd">Applied Empirical Methods</a><p>Paul Goldsmith-Pinkham's graduate applied methods materials.</p></li>
          <li class="goods-item"><a href="https://about.peterhull.net/metrix">Grad Econometrics Slides</a><p>Peter Hull's graduate econometrics slides.</p></li>
          <li class="goods-item"><a href="https://www.xiangsun.org/teaching">Matching and Market Design</a><p>Xiang Sun's teaching materials.</p></li>
        </ul>
      </section>

      <section class="goods-section" id="ai-workflow">
        <h2>AI Workflow</h2>
        <ul class="goods-list">
          <li class="goods-item">
            <a href="{{ '/theory_paper_skills/' | relative_url }}">Theory Paper Reading Workflow</a>
            <p>
              A structured workflow for reading theory papers from cover to cover and producing reusable LaTeX notes. Examples:
              <a href="{{ '/assets/pdf/bayesian_persuasion_notes.pdf' | relative_url }}">Kamenica and Gentzkow (2011)</a>
              and
              <a href="{{ '/assets/pdf/hatfield_milgrom_notes.pdf' | relative_url }}">Hatfield and Milgrom (2005)</a>.
            </p>
          </li>
          <li class="goods-item">
            <a href="https://www.notion.com/product/business">Notion Business</a>
            <p>An alternative AI workspace when Claude access is unstable in mainland China.</p>
          </li>
          <li class="goods-item">
            <a href="https://github.com/54yyyu/zotero-mcp">Zotero MCP</a>
            <p>A bridge I use with OpenAI Codex to manage literature workflows.</p>
          </li>
          <li class="goods-item goods-item--pending">
            <strong>EconRA Skill and Pipeline</strong>
            <span class="goods-status">Available upon request</span>
          </li>
          <li class="goods-item">
            <a href="https://bcf.princeton.edu/events/paul-goldsmith-pinkham-mini-series-on-claude-code-for-applied-economists/">Claude Code for Applied Economists</a>
            <p>Paul Goldsmith-Pinkham's mini-series on AI-assisted applied economics work.</p>
          </li>
          <li class="goods-item">
            <a href="https://economics.mit.edu/sites/default/files/2026-04/IA%20AI%20note_3.pdf">Some Thoughts on AI and Research</a>
            <p>Isaiah Andrews on how AI may change the production of research.</p>
          </li>
        </ul>
        <p class="goods-note">I thank my mentor for sponsoring my monthly ChatGPT Plus.</p>
      </section>

      <section class="goods-section" id="templates">
        <h2>Templates</h2>
        <ul class="goods-list goods-list--compact">
          <li class="goods-item goods-item--pending"><strong>Lecture notes template</strong><span class="goods-status">Coming soon</span></li>
          <li class="goods-item goods-item--pending"><strong>Beamer template</strong><span class="goods-status">Coming soon</span></li>
          <li class="goods-item goods-item--pending"><strong>Working paper template</strong><span class="goods-status">Coming soon</span></li>
          <li class="goods-item"><a href="https://hargaden.com/enda/nokia-3210-beamer-theme/">Nokia-style Beamer Theme</a><p>A playful beamer template with a memorable visual system.</p></li>
        </ul>
      </section>

      <section class="goods-section" id="ra-guidance">
        <h2>Econ RA Guidance</h2>
        <ul class="goods-list">
          <li class="goods-item"><a href="https://static1.squarespace.com/static/5d6fdc2005e1e70001b04760/t/634319f7c53d3164dc779bb5/1665341943804/Applied+Tips+for+Applied+Micro+RAs.pdf">Applied Tips for Applied Micro RAs</a><p>Practical guidance from Livia Alfonsi.</p></li>
          <li class="goods-item"><a href="https://raguide.github.io/">Econ RA Guide</a><p>A broad guide for economics research assistants.</p></li>
        </ul>
      </section>

      <section class="goods-section" id="phd-resources">
        <h2>Econ PhD Resources</h2>
        <ul class="goods-list">
          <li class="goods-item"><a href="https://docs.google.com/spreadsheets/d/1YPBecm373ckzLazPh4A58h9Gu4glfKtCl1VtS-9J0D4/edit?usp=drivesdk">China Econ Job Market</a><p>A spreadsheet for tracking China economics job-market information.</p></li>
        </ul>
      </section>
    </div>

  </div>
</section>

<script>
  (() => {
    const links = Array.from(document.querySelectorAll(".goods-nav a"));
    const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

    const setActiveSection = (id) => {
      links.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visibleEntry) setActiveSection(visibleEntry.target.id);
        },
        {
          rootMargin: "-22% 0px -58% 0px",
          threshold: [0.1, 0.25, 0.5, 0.75],
        }
      );

      sections.forEach((section) => observer.observe(section));
    }
  })();
</script>
