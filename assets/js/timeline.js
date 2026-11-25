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
  document.querySelectorAll(".pre-toggle").forEach(function (btn) {
    function toggle() {
      var box = document.getElementById(btn.getAttribute("aria-controls"));
      if (box) btn.setAttribute("aria-expanded", String(box.classList.toggle("open")));
    }
    btn.addEventListener("click", toggle);
    btn.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
});
