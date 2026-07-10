(() => {
  const bubble = document.querySelector(".home-speech");
  if (!bubble) return;

  const quotes = [
    { text: "How can we design better mechanisms?" },
    { text: "Will economics die in the age of AI?", url: bubble.dataset.aiUrl },
    { text: "Theory or data? Why not both?" },
    { text: "What makes a question worth asking?" },
    { text: "Can a market be both fair and efficient?" },
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const message = document.createElement(quote.url ? "a" : "span");

  message.textContent = quote.text;
  if (quote.url) message.href = quote.url;

  bubble.replaceChildren(message);
  bubble.hidden = false;

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => bubble.classList.add("is-visible"));
  });
})();
