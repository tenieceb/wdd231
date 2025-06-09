const cardContainer = document.getElementById("discover-cards");

fetch("data/discover.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement("article");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${item.title}</h2>
        <figure>
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <figcaption>${item.title}</figcaption>
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;

      cardContainer.appendChild(card);
    });
  });


const sidebar = document.createElement("div");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

let message = "";

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    message = "Back so soon! Awesome!";
  } else {
    message = `You last visited ${days} day${days > 1 ? "s" : ""} ago.`;
  }
}

sidebar.textContent = message;
document.body.prepend(sidebar);
localStorage.setItem("lastVisit", now);