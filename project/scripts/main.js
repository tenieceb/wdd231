//Get the current year and last modified date
const currentyear = document.querySelector("#currentyear");
const lastupdated = document.querySelector("#lastModified");
const today = new Date();
currentyear.innerHTML =`${today.getFullYear()}`;
let lastModif = new Date(document.lastModified);

const lastModifFormatted = lastModif.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
}
)

lastupdated.innerHTML = `Last Modified:  ${lastModifFormatted} ${lastModif.toLocaleTimeString()}`;

const mainNav = document.getElementById("mainnav");
const hamburgerButton = document.getElementById("menu");

hamburgerButton.addEventListener('click', () => {
  const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
  hamburgerButton.setAttribute('aria-expanded', String(!isExpanded));
  mainNav.classList.toggle('show');
  hamburgerButton.classList.toggle('show');
});
