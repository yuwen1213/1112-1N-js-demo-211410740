const btnContainer = document.querySelector('.products-container');
const companyBtns = document.querySelectorAll('.company-btn');
const url = './api/products.json'
let allProducts ; 
let products;
const fetchData = async ()=>{
  try {
      const response = await fetch(url);
      const data =  response.json();
      console.log('fetch data', data);
      return data;

  } catch (err) {
      console.log(err);
  }
}
const displayProducts = (products) => {
  let displayContent = products.map((product,index) => {
    
      const { company,price,name, image } = product.fields;
    //  let image =`./images/product-${index+1}.jpg`;
      return `       
      <div class="single-product">
      <img
        src="${`./images/${image[0].filename}`}"
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
    btnContainer.innerHTML = displayContent;
};
//製作篩選
companyBtns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{

    const companyId = e.currentTarget.dataset.id;
    console.log('companyId', companyId);
    if(companyId==='all'){
      console.log(`all products`, allProducts);
      displayProducts(allProducts);
    }else{
      products= allProducts.filter((p)=>p.fields.company===companyId);
      console.log(`${companyId}products`, products);
      displayProducts(products);
    }
  });
});

window.addEventListener('DOMContentLoaded', async () => {
  allProducts = await fetchData();
  console.log('all product', allProducts);
  await displayProducts(allProducts);
  });
