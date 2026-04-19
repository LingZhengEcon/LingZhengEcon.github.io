document.addEventListener("DOMContentLoaded", function () {
  function bind(toggleClass, boxClass) {
    var toggles = document.querySelectorAll("." + toggleClass);
    var boxes = document.querySelectorAll("." + boxClass);
    toggles.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        if (boxes[i]) boxes[i].classList.toggle("hidden");
      });
    });
  }
  bind("timeline-toggle", "timeline-box");
  bind("tldr-toggle", "tldr-box");
});