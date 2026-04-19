document.addEventListener("DOMContentLoaded", function () {
  // TIMELINE 按钮
  document.querySelectorAll(".timeline-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const container = btn.closest("li, .row, div");
      const box = container && container.querySelector(".timeline-box");
      if (box) box.classList.toggle("hidden");
    });
  });

  // TLDR 按钮
  document.querySelectorAll(".tldr-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const container = btn.closest("li, .row, div");
      const box = container && container.querySelector(".tldr-box");
      if (box) box.classList.toggle("hidden");
    });
  });
});