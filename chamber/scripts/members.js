const url = 'data/members.json';
const cards = document.querySelector('#business-cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json(); 
    console.table(data.prophets);
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image= document.createElement('img');
        let address = document.createElement('p');
        let number = document.createElement('p');
        let website = document.createElement('p');

        name.textContent = `${member.name}`;
        number.textContent = `Phone: ${member.number}`;
        address.textContent = `Address: ${member.address}`;
        website.textContent = `Website: ${member.website}`;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name} logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');
        
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);

        cards.appendChild(card);
    });
}