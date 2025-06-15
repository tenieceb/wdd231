document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('fav-project');
  const imageList = document.querySelectorAll('.projects ul img');

  let projectData = [];

  fetch('data/projects.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      projectData = data;
    })
    .catch(error => console.error('Error loading project JSON:', error));

  imageList.forEach(img => {
    img.addEventListener('click', () => {
      const id = img.getAttribute('data-project');
      const project = projectData.find(p => p.id === id);
      if (project) {
        dialog.innerHTML = `
          <div class="dialog-content">
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.alt}">
            <p>${project.story}</p>
            <a href="${project.url}" target="_blank" rel="noopener">View Pattern</a>
            <div class="dialog-footer">
              <button id="closeDialog">Close</button>
            </div>
          </div>
        `;
        dialog.showModal();

        dialog.querySelector('#closeDialog').addEventListener('click', () => {
          dialog.close();
        });
      }
    });
  });
});
