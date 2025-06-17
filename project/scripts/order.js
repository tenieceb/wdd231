import { fetchProducts } from './products.js';

document.addEventListener("DOMContentLoaded", async () => {
  const productSelect = document.getElementById('product-select');
  const productPreview = document.getElementById('product-preview');

  try {
    const products = await fetchProducts();

    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      option.dataset.image = product.image;
      option.dataset.description = product.description;
      productSelect.appendChild(option);
    });

    productSelect.addEventListener("change", () => {
      const selected = productSelect.options[productSelect.selectedIndex];
      const imageSrc = selected.dataset.image;
      const description = selected.dataset.description;

      productPreview.innerHTML = `
        <img src="${imageSrc}" alt="${selected.textContent}" loading="lazy">
        <p>${description}</p>
      `;
    });

  } catch (error) {
    productPreview.innerHTML = `<p>Unable to load products.</p>`;
    console.error(error);
  }
});
