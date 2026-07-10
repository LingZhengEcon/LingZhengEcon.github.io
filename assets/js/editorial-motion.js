(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navbar = document.getElementById("navbar");
  const revealTargets = document.querySelectorAll(
    ".post-header, .profile, .blog-intro, .blog-shelf, .blog-list, .public-goods-intro, .goods-section"
  );

  revealTargets.forEach((element, index) => {
    element.classList.add("editorial-reveal");
    element.style.setProperty("--reveal-order", index % 6);
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );
    revealTargets.forEach((element) => revealObserver.observe(element));
  }

  const updateScrollState = () => {
    if (navbar) navbar.classList.toggle("is-compact", window.scrollY > 48);

    const progress = document.getElementById("progress");
    if (navbar && progress) progress.style.top = `${navbar.offsetHeight}px`;
  };

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateScrollState();
        ticking = false;
      });
    },
    { passive: true }
  );
  updateScrollState();
})();
