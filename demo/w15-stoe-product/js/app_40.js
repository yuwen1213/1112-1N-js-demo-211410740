const url = `https://course-api.com/javascript-store-products`;
const btnContainer = document.querySelector('.products-container');
window.addEventListener('DOMContentLoaded', async () => {
  try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('data', data);
    displayItems(data)
  } catch (error) {
      console.error(error);
  }
  });

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { price,name } = item.fields;
      const {url}=item.fields.image[0];
      return `       
      <div class="single-product">
      <img
        src="${url}"
        class="single-product-img img"
        alt="${name}"
      />
      <footer>
        <h5 class="name">${name}</h5>
        <span class="price">$${price/100}</span>
      </footer>
    </div>`;
    })
    .join('');
    btnContainer.innerHTML = displayData;
};
