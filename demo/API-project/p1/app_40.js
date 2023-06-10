// const url = 'https://api.storerestapi.com/products';

const url = './product.json'

const pContainer = document.querySelector('.item-center');

// const為常數，須給定植、let為變數
let allProducts;
let products; //篩選出來的product 

// fetchData非同步(async、await)、try成功 catch失敗後會被抓到
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('fetch data', data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

const displayItems = (products) => {
    // 讀取陣列內容
    const array = [];
      for (let i=1; i<20; i++){
        array.push(i);
      }
    let displayContent = products.map((product) => {
        const {price, title, image} = product;
        return`
        <article class="item">
        <img
          src="${image}"
          alt="frappuccino photo"
          class="item-img"
        />
        <div class="item-content">
          <h1>F</h1>
          <h2>商品編號 052519</h2>
          <h3>${title}</h3>
          <h4>NT.${price}</h4>
        </div>
      </article>  
        `
    }).join(''); //.join('')將字串變成文字

    // console.log('displayContent', displayContent);
    pContainer.innerHTML = displayContent;
}

window .addEventListener('DOMContentLoaded', async() => {
    allProducts = await fetchData();
    console.log('all products', allProducts);
    await displayItems(allProducts);
});

