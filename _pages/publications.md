---
layout: page
permalink: /publications/
title: Research
description:
nav: true
nav_order: 2
_styles: |
  .working-papers-list h2.bibliography,
  .wip-publications h2.bibliography {
    display: none;
  }

  .wip-publications {
    margin-top: 1.5rem;
  }

  .wip-publications ol.bibliography li {
    margin-bottom: 2rem;
  }

  .wip-publications ol.bibliography li:last-child {
    margin-bottom: 0;
  }
---

## Working Papers

<div class="publications working-papers-list">
{% bibliography %}
</div>

---

## Selected Work in Progress

<div class="publications wip-publications">
{% bibliography --file wip %}
</div>
