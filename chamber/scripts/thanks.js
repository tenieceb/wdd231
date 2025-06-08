const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p> Name: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p> Business Name: ${myInfo.get('business-name')}</p>
<p> Your phone: ${myInfo.get('phone')}</p>
<p> Your email: ${myInfo.get('email')}</p>
<p> Membership Level: ${myInfo.get('membership')}</p>
<p> Join Date and Time: ${myInfo.get('time-submitted')} </p>
`;