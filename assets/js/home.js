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

  message.textContent = idea.text;
  if (idea.url) message.href = idea.url;

  bubble.replaceChildren(message);
  bubble.hidden = false;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => bubble.classList.add("is-visible"));
  });
})();
