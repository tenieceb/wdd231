document.addEventListener("DOMContentLoaded", () => {
  fetch("data/freepatterns.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load JSON");
      }
      return response.json();
    })
    .then((data) => {
      const spotlight = data[Math.floor(Math.random() * data.length)];

      document.getElementById("spotlight-image").src = spotlight.image;
      document.getElementById("spotlight-image").alt = spotlight.title;
      document.getElementById("spotlight-title").textContent = spotlight.title;
      document.getElementById("spotlight-description").textContent = spotlight.description;
      document.getElementById("spotlight-link").href = spotlight.url;
    })
    .catch((error) => {
      console.error("Error loading spotlight:", error);
    });
});
