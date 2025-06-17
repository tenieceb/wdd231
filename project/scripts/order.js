import { fetchProducts } from './products.js';

document.addEventListener("DOMContentLoaded", async () => {
  const productSelect = document.getElementById('product');
  const productPreviewImg = document.getElementById('preview-img');
  const productPreviewDesc = document.getElementById('preview-desc');

  try {
    const products = await fetchProducts();

    productSelect.innerHTML = '<option value="" disabled selected>Select an item</option>';

    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      option.dataset.image = product.image;
      option.dataset.description = product.description;
      productSelect.appendChild(option);
    });

    productSelect.addEventListener("change", () => {
      const selected = productSelect.options[productSelect.selectedIndex];

      if (selected.dataset.image) {
        productPreviewImg.src = selected.dataset.image;
        productPreviewImg.alt = selected.textContent;
        productPreviewDesc.textContent = selected.dataset.description;
      } else {
        productPreviewImg.src = 'images/placeholder.webp';
        productPreviewImg.alt = 'Selected item preview';
        productPreviewDesc.textContent = 'Select a product to see a preview.';
      }
    });
  } catch (error) {
    console.error('Unable to load products for order page:', error);
    productPreviewDesc.textContent = 'Unable to load product previews at this time.';
  }
});
