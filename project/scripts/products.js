const productsContainer = document.getElementById('products');

let allProducts = [];

export async function fetchProducts() {
  try {
    const response = await fetch('data/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    allProducts = await response.json();
    displayProducts(allProducts);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    productsContainer.innerHTML = `<p>Sorry, we couldn't load the products at this time.</p>`;
  }
}


function displayProducts(products) {
  productsContainer.innerHTML = ''; 

  products.forEach(product => {
    const card = document.createElement('article');
    card.classList.add('product-card');

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="400">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>
    `;

    productsContainer.appendChild(card);
  });
}

fetchProducts();

const filterButtons = document.querySelectorAll('#filters button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterType = button.dataset.type;
    if (filterType === 'all') {
        displayProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.type === filterType);
        displayProducts(filtered);
    }

  });
});
