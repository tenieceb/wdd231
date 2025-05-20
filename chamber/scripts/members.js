const url = 'data/members.json';
const cards = document.querySelector('.business-cards');
const gridView = document.querySelector('#grid-view');
const listView = document.querySelector('#list-view');
let memberDisplay = 'grid';
let members = [];

gridView.addEventListener('click', () => {
    memberDisplay = 'grid';
    gridView.classList.add('active');
    listView.classList.remove('active');
    cards.setAttribute('id', 'grid');
    displayMembers(members, memberDisplay);
});

listView.addEventListener('click', () => {
    memberDisplay = 'list';
    listView.classList.add('active');
    gridView.classList.remove('active');
    cards.setAttribute('id', 'list');
    displayMembers(members, memberDisplay);
});

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json(); 
    members = data;
    displayMembers(members, memberDisplay);
}


getMemberData();

const displayMembers = (members, display) => {
    cards.innerHTML = '';

    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let number = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = member.name;
        number.textContent = `Phone: ${member.number}`;
        address.textContent = `Address: ${member.address}`;
        website.textContent = `${member.website}`;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name} logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '240');
        image.setAttribute('height', '150');

        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');

        if (display === 'grid') {
            card.classList.add('grid-card');

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(number);
            card.appendChild(website);

        } else if (display === 'list') {
            card.classList.add('list-card');

            card.classList.add('list-card');

            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(number);
            card.appendChild(website);
        }

        cards.appendChild(card);
    });
}

