(() => {
  const bubble = document.querySelector(".home-speech");
  if (!bubble) return;

  const ideas = [
    { text: "How can we design better mechanisms?" },
    { text: "Theory or data? Why not both?", url: bubble.dataset.researchUrl },
    { text: "What questions still need fieldwork?", url: bubble.dataset.blogUrl },
    { text: "Can policy be both fair and efficient?", url: bubble.dataset.goodsUrl },
    { text: "Need the short version? Open the CV.", url: bubble.dataset.cvUrl },
    { text: "Want to say hi? Send a note by email.", url: bubble.dataset.emailUrl },
    { text: "AI is a topic worth studying in its own right.", url: bubble.dataset.aiUrl },
    { text: "What makes a question worth asking?" },
    { text: "Can economics stay close to the real world?" },
    { text: "Which ideas survive contact with practice?" },
    { text: "Where does theory still need help from data?" },
    { text: "What happens when an idea meets a constraint?" },
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
