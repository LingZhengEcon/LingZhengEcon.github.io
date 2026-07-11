---
layout: page
title: Public Goods
permalink: /public-goods/
nav: true
nav_order: 4
_styles: |
  .public-goods {
    display: grid;
    gap: 2.3rem;
  }

  .public-goods-intro {
    display: grid;
    gap: 0.75rem;
    padding-bottom: 1.35rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .public-goods-intro p {
    max-width: 44rem;
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 1.02rem;
    line-height: 1.75;
  }

  .goods-layout {
    display: grid;
    grid-template-columns: 13rem minmax(0, 1fr);
    gap: 2rem;
    align-items: start;
  }

  .goods-nav {
    position: sticky;
    top: 5rem;
    display: grid;
    gap: 0.35rem;
    padding-top: 0.25rem;
    border-left: 1px solid var(--global-divider-color);
  }

  .goods-nav a {
    display: block;
    padding: 0.38rem 0 0.38rem 0.7rem;
    margin-left: -1px;
    border-left: 2px solid transparent;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    text-decoration: none;
    transition:
      border-color 0.18s ease,
      color 0.18s ease,
      transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .goods-nav a:hover,
  .goods-nav a.is-active {
    border-left-color: var(--global-theme-color);
    color: var(--global-theme-color);
    text-decoration: none;
    transform: translateX(3px);
  }

  .goods-sections {
    display: grid;
    gap: 2rem;
  }

  .goods-section {
    scroll-margin-top: 5rem;
  }

  .goods-section h2 {
    margin: 0 0 0.85rem;
    font-family: "Cormorant Garamond", "Roboto Slab", Georgia, serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0;
  }

  .goods-list {
    display: grid;
    gap: 0.85rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .goods-item {
    padding: 1rem 1.1rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-card-bg-color);
    transition:
      transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.22s ease,
      box-shadow 0.32s ease;
  }

  .goods-item a {
    font-weight: 600;
    text-decoration: none;
  }

  .goods-item a:hover {
    text-decoration: underline;
  }

  .goods-item p {
    margin: 0.35rem 0 0;
    color: var(--global-text-color-light);
    font-size: 0.94rem;
    line-height: 1.65;
  }

  .goods-note {
    margin: 0 0 1rem;
    color: var(--global-text-color-light);
    font-style: italic;
  }

  @media (hover: hover) and (pointer: fine) {
    .goods-item:hover {
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--global-theme-color) 35%, var(--global-divider-color));
      box-shadow: 0 11px 24px rgba(0, 0, 0, 0.045);
    }
  }

  @media (max-width: 768px) {
    .goods-layout {
      grid-template-columns: 1fr;
    }

    .goods-nav {
      position: static;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.2rem 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--global-divider-color);
      border-left: 0;
    }
  }
---

<section class="public-goods" aria-label="Public goods">
  <div class="goods-layout">
    <nav class="goods-nav" aria-label="Public goods sections">
      <a class="is-active" href="#ai-workflow" aria-current="true">AI Workflow</a>
      <a href="#scholars">Scholars</a>
      <a href="#lecture-notes">Lecture Notes</a>
      <a href="#templates">Templates</a>
      <a href="#ra-guidance">Econ RA Guidance</a>
      <a href="#phd-resources">Econ PhD Resources</a>
    </nav>

    <div class="goods-sections">
      <section class="goods-section" id="ai-workflow">
        <h2>AI Workflow</h2>
        <p class="goods-note">I thank my mentor for sponsoring my monthly ChatGPT Plus.</p>
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
          <li class="goods-item">
            <strong>EconRA Skill and Pipeline</strong>
            <p>Available Upon Request</p>
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
      </section>

      <section class="goods-section" id="scholars">
        <h2>Scholars</h2>
        <ul class="goods-list">
          <li class="goods-item"><a href="https://web.stanford.edu/~alroth/">Al Roth</a><p>Market design, matching, and practical mechanism design.</p></li>
          <li class="goods-item"><a href="https://economics.mit.edu/people/faculty/parag-pathak">Parag Pathak</a><p>Market design in education and public-sector allocation.</p></li>
          <li class="goods-item"><a href="https://sites.google.com/site/fuhitokojimaeconomics/Fuhito-Kojima">Fuhito Kojima</a><p>Matching theory and market design.</p></li>
          <li class="goods-item"><a href="https://eml.berkeley.edu/~fechenique/">Federico Echenique</a><p>Economic theory, choice, and matching.</p></li>
        </ul>
      </section>

      <section class="goods-section" id="lecture-notes">
        <h2>Lecture Notes</h2>
        <ul class="goods-list">
          <li class="goods-item"><a href="https://www.overleaf.com/read/tbnhdxcwxqzp#f2e1f3">The Art of Economic Design</a><p>My incomplete notes on matching and mechanism design.</p></li>
          <li class="goods-item"><strong>Lattice Theory and Its Application in Economics</strong><p>Coming soon.</p></li>
          <li class="goods-item"><a href="https://github.com/paulgp/applied-methods-phd">Applied Empirical Methods</a><p>Paul Goldsmith-Pinkham's graduate applied methods materials.</p></li>
          <li class="goods-item"><a href="https://about.peterhull.net/metrix">Grad Econometrics Slides</a><p>Peter Hull's graduate econometrics slides.</p></li>
          <li class="goods-item"><a href="https://www.xiangsun.org/teaching">Matching and Market Design</a><p>Xiang Sun's teaching materials.</p></li>
        </ul>
      </section>

      <section class="goods-section" id="templates">
        <h2>Templates</h2>
        <ul class="goods-list">
          <li class="goods-item"><strong>Lecture notes template</strong><p>Coming soon.</p></li>
          <li class="goods-item"><strong>Beamer template</strong><p>Coming soon.</p></li>
          <li class="goods-item"><strong>Working paper template</strong><p>Coming soon.</p></li>
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
