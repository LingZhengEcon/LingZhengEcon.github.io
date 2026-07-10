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
  }

  .goods-nav a {
    display: block;
    padding: 0.38rem 0;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    text-decoration: none;
  }

  .goods-nav a:hover {
    color: var(--global-theme-color);
    text-decoration: none;
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
    font-size: 1.75rem;
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
    }
  }
---

<section class="public-goods" aria-label="Public goods">
  <div class="public-goods-intro">
    <p>A curated shelf of tools, notes, templates, and guidance that I find useful. Freely shared, lightly annotated, and kept close to research practice.</p>
  </div>

  <div class="goods-layout">
    <nav class="goods-nav" aria-label="Public goods sections">
      <a href="#ai-workflow">AI Workflow</a>
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
            <p>A structured workflow for reading theory papers from cover to cover and producing reusable LaTeX notes.</p>
          </li>
          <li class="goods-item">
            <a href="{{ '/assets/pdf/bayesian_persuasion_notes.pdf' | relative_url }}">Kamenica and Gentzkow (2011) Notes</a>
            <p>A tested output of the theory-paper workflow.</p>
          </li>
          <li class="goods-item">
            <a href="{{ '/assets/pdf/hatfield_milgrom_notes.pdf' | relative_url }}">Hatfield and Milgrom (2005) Notes</a>
            <p>A second test case for matching and mechanism design reading.</p>
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
            <p>A personal workflow for economics RA tasks. Coming soon.</p>
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
