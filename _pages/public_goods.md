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
      <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#ai-workflow" type="button">My AI Workflow</button>
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#scholars" type="button">Scholars</button>
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#lecture-notes" type="button">Lecture Notes & Courses</button>
      <button class="nav-link" data-bs-toggle="pill" data-bs-target="#phd-resources" type="button">Econ PhD Resources</button>
    </div>
  </div>

  <!-- 右侧内容 -->
  <div class="col-md-9">
    <div class="tab-content">

      <div class="tab-pane fade show active" id="ai-workflow">
        <h4>My AI Workflow</h4>
        <p><em>I thank my mentor for sponsoring me monthly Chatgpt Plus!</em></p>
        <ul>
         <li>Claude is currently inaccessible or unstable in mainland China. I strongly recommend <strong>Notion Business</strong> as an alternative — it offers unlimited access to Claude claude-opus-4-6 and integrates seamlessly with your Notion workspace.</li>
        <ul>
      </div>

      <div class="tab-pane fade" id="scholars">
        <h4>Scholars</h4>
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
        </ul>
        <h4>External Lecture Notes</h4>
        <ul>
          <li><a href="https://github.com/paulgp/applied-methods-phd">Applied Empirical Methods</a> — Paul Goldsmith-Pinkham</li>
          <li><a href="https://about.peterhull.net/metrix">Grad Econometrics Slides</a> — Peter Hull</li>
          <li><a href="https://www.xiangsun.org/teaching">Matching and Market Design</a> — Xiang Sun</li>
        </ul>
      </div>

      <div class="tab-pane fade" id="phd-resources">
        <h4>Econ PhD Resources</h4>
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