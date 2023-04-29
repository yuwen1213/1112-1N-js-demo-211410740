let products_data = [
    {
        id: 1,
        name:'albany table',
        price:'$79.99',
        local_img:'./images/product-2.jpg'
    },
    {
        id: 2,
        name:'wooden table',
        price:'$45.99',
        local_img:'./images/product-4.jpg'
    },
    {
        id: 3,
        name:'sofa set',
        price:'$69.99',
        local_img:'./images/product-6.jpg'
    },
    {
        id: 4,
        name:'soft bed',
        price:'$99.99',
        local_img:'./images/product-8.jpg'
    },
    {
        id: 5,
        name:'wooden chair',
        price:'$40.99',
        local_img:'./images/product-10.jpg'
    },
    {
        id: 6,
        name:'soft sofa',
        price:'$85.99',
        local_img:'./images/product-12.jpg'
    },
  ];
  
  const section = document.querySelector('.products-container');
  
  const displayProducts_40 = () => {
    const productsInfo = products_data.map((tour) => {
      const {id, name, local_img, price} = tour;
      return `
      <div class="single-product">
        <img
          src="${local_img}"
          class="single-product-img img"
          alt="${name}"
        />
        <footer>
          <h5 class="name">${name}</h5>
          <span class="price">${price}</span>
        </footer>
      </div>
      `
    }).join('');
    section.innerHTML = productsInfo;
  };
  
  window.addEventListener('DOMContentLoaded', () => {
    displayProducts_40();
  });
  