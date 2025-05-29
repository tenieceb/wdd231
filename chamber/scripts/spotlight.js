const url = 'data/members.json';
const spotlightContainer = document.querySelector('.spotlight-cards');


async function getMemberData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching members:", err);
    return [];
  }
}

function getSpotlightMembers(members) {
    const spotlightEligible = members.filter(member =>
        member.membership === 2 || member.membership === 3
    );

    const shuffled = spotlightEligible.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2); 
}

function displaySpotlights(spotlightMembers) {
    spotlightContainer.innerHTML = '';
    let memberLevel = '';

    spotlightMembers.forEach(member => {

        if (member.membership === 2){
            memberLevel = 'Silver';
        }
        if (member.membership === 3){
            memberLevel = 'Gold';
        }

        const section = document.createElement('section');
        section.classList.add('spotlight-card');

        section.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <img src="${member.image}" alt="${member.name} logo" loading="lazy" width="200" class="business-cards">
            <p>${member.address}</p>
            <p>${member.number}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p>${memberLevel} Member</p>
        `;

        spotlightContainer.appendChild(section);
    });
}

async function showSpotlights() {
  const members = await getMemberData();
  const spotlights = getSpotlightMembers(members);
  displaySpotlights(spotlights);
}

showSpotlights();