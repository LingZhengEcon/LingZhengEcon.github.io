(() => {
  const bubble = document.querySelector(".home-speech");
  if (!bubble) return;

  const ideas = [
    { text: "Theory or data? Why not both?", url: bubble.dataset.researchUrl },
    { text: "AI is a topic worth studying in its own right.", url: bubble.dataset.aiUrl },
    { text: "What is Market Design?", url: "https://marketdesigner.blogspot.com/" },
    { text: "Game Theory is Beautiful.", url: "https://fass.nus.edu.sg/ecs/research-highlights-chen-yi-chun/" },
  ];

  const idea = ideas[Math.floor(Math.random() * ideas.length)];
  const message = document.createElement(idea.url ? "a" : "span");
  const outline = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const outlinePath = document.createElementNS("http://www.w3.org/2000/svg", "path");

  message.textContent = idea.text;
  if (idea.url) message.href = idea.url;

  outline.setAttribute("class", "home-speech-outline");
  outline.setAttribute("viewBox", "0 0 300 154");
  outline.setAttribute("preserveAspectRatio", "none");
  outline.setAttribute("aria-hidden", "true");
  outline.setAttribute("focusable", "false");
  outlinePath.setAttribute(
    "d",
    "M64 121 L55 151 L88 128 C119 138 176 140 223 130 C273 119 299 94 290 63 C278 22 222 7 151 8 C78 9 27 28 14 66 C3 98 25 118 64 121 Z"
  );
  outline.append(outlinePath);

  bubble.replaceChildren(outline, message);
  bubble.hidden = false;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => bubble.classList.add("is-visible"));
  });
})();
