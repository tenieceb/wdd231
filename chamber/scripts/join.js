const dialog = document.getElementById('dialog');

const descriptions = {
  "non-profit": "<h3>Non-profit Membership</h3><p>This membership is free for non-profit organizations and includes basic access to networking events and newsletters.</p>",
  "bronze": "<h3>Bronze Membership</h3><p>$5.00/year — Ideal for individuals or startups. Includes community event invites and a listing in the member directory.</p>",
  "silver": "<h3>Silver Membership</h3><p>$10.00/year — Includes everything in Bronze, plus promotional opportunities and discounted services.</p>",
  "gold": "<h3>Gold Membership</h3><p>$15.00/year — All Silver benefits plus premium exposure, leadership workshops, and a business spotlight feature.</p>"
};

document.querySelectorAll('.membership-option').forEach(option => {
  option.addEventListener('click', e => {
    e.preventDefault();
    const level = option.dataset.level;

    dialog.classList.add(level);

    dialog.innerHTML = `
      ${descriptions[level] || "<p>Information coming soon.</p>"}
      <button id="closeDialog">Close</button>
    `;
    dialog.showModal();

    dialog.querySelector('#closeDialog').addEventListener('click', () => {
      dialog.className = '';
      dialog.close();

    });
  });
});
