---
layout: page
title: Public Goods
permalink: /public-goods/
nav: true
nav_order: 4
---

<p class="text-muted">A curated collection of resources I find useful. Freely shared.</p>

<div class="row mt-4">

  <!-- 左侧导航 -->
  <div class="col-md-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
      <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#ai-workflow" type="button">AI Tools & Workflow</button>
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#scholars" type="button">Scholars</button>
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#lecture-notes" type="button">Lecture Notes</button>
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#template" type="button">Latex Template</button>
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#phd-resources" type="button">Econ PhD Resources</button>
    </div>
  </div>

  <!-- 右侧内容 -->
  <div class="col-md-9">
    <div class="tab-content">

      <div class="tab-pane fade show active" id="ai-workflow">
        <p><em>I thank my mentor for sponsoring me monthly Chatgpt Plus!</em></p>
        <h4>My AI Workflow</h4>
        <ul>
         <li>Claude is currently inaccessible or unstable in mainland China. I strongly recommend <strong>Notion Business</strong> as an alternative — it offers unlimited access to Claude Opus-4-6 and integrates seamlessly with your Notion workspace.</li>
         <li>I have developed a <a href="/theory_paper_skills/" target="_blank">Theory Paper Reading</a> workflow that walks through a paper from cover to cover and produces a structured LaTeX document. I have tested it on <a href="/assets/pdf/bayesian_persuasion_notes.pdf" target="_blank">Kamenica and Gentzkow (2011)</a> and <a href="/assets/pdf/hatfield_milgrom_notes.pdf" target="_blank">Hatfield and Milgrom (2005)</a>.</li>
         <li>I use Openai Codex + <a href="https://github.com/54yyyu/zotero-mcp">Zotero MCP</a> to manage literatures.</li>
         <li>I am currently developing a EconRA Skill and a proper pipeline to accelerate my work. Coming soon!</li>
        </ul>
        <h4>Resourses</h4>
        <ul>
        <li><a href="https://bcf.princeton.edu/events/paul-goldsmith-pinkham-mini-series-on-claude-code-for-applied-economists/">Paul Goldsmith-Pinkham mini-series on Claude Code for Applied Economists</a></li>
        <li><a href="https://economics.mit.edu/sites/default/files/2026-04/IA%20AI%20note_3.pdf">Some Thoughts on AI and Research by Isaiah Andrews</a></li>
        </ul>
      </div>

      <div class="tab-pane fade" id="scholars">
        <h4>Market Designers</h4>
        <ul>
          <li><a href="https://web.stanford.edu/~alroth/">Al Roth</a> — Stanford</li>
          <li><a href="https://economics.mit.edu/people/faculty/parag-pathak">Parag Pathak</a> — MIT</li>
          <li><a href="https://sites.google.com/site/fuhitokojimaeconomics/Fuhito-Kojima">Fuhito Kojima</a> — Tokyo U</li>
          <li><a href="https://eml.berkeley.edu/~fechenique/">Federico Echenique</a> — UC Berkeley</li>
        </ul>
      </div>

      <div class="tab-pane fade" id="lecture-notes">
        <h4>My Notes</h4>
        <ul>
          <li><a href="https://www.overleaf.com/read/tbnhdxcwxqzp#f2e1f3">The Art of Economics Design</a> — Covering matching and mechanism design, incomplete</li>
          <li>Lattice Theory and Its application in Economics - Coming soon!</li>
        </ul>
        <h4>External Lecture Notes</h4>
        <ul>
          <li><a href="https://github.com/paulgp/applied-methods-phd">Applied Empirical Methods</a> — Paul Goldsmith-Pinkham</li>
          <li><a href="https://about.peterhull.net/metrix">Grad Econometrics Slides</a> — Peter Hull</li>
          <li><a href="https://www.xiangsun.org/teaching">Matching and Market Design</a> — Xiang Sun</li>
        </ul>
      </div>

      <div class="tab-pane fade" id="template">
        <ul>
          <li>My lecture notes template</li>
          <li>My beamer template</li>
          <li>My working paper template</li>
          <li><a href="https://hargaden.com/enda/nokia-3210-beamer-theme/">An interesting and cool Nokia-style beamer template</a> </li>
        </ul>
      </div>

      <div class="tab-pane fade" id="phd-resources">
        <ul>
          <li><a href="https://docs.google.com/spreadsheets/d/1YPBecm373ckzLazPh4A58h9Gu4glfKtCl1VtS-9J0D4/edit?usp=drivesdk">China Econ Job Market</a></li>
        </ul>
      </div>

    </div>
  </div>

</div>

<script>
document.querySelectorAll('[data-bs-toggle="pill"]').forEach(function(button) {
  button.addEventListener('click', function() {
    document.querySelectorAll('[data-bs-toggle="pill"]').forEach(function(b) {
      b.classList.remove('active');
    });
    document.querySelectorAll('.tab-pane').forEach(function(p) {
      p.classList.remove('show', 'active');
    });
    this.classList.add('active');
    var target = document.querySelector(this.getAttribute('data-bs-target'));
    target.classList.add('show', 'active');
  });
});
</script>