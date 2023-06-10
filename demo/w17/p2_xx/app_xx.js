const sectionCenter = document.querySelector('.section-center'); //doucment裡面=>DOMC...
const btnContainer = document.querySelector('.btn-container');

// import { menu } from './data.js'
const url = '/api/menu.json';

let menu;

const displayMenuItems = (menu) => {
  let displayMenu = menu.map((item) => {
    return `
        <ticle class="menu-item">
          <img src=${item.remote_img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.descrip}
            </p>
          </div>
        </ticle>
        `;
  });
  // 除錯用 console.log('displayMenu', displayMenu);
  displayMenu = displayMenu.join('');
  // console.log('displayMenu after join', displayMenu);
  sectionCenter.innerHTML = displayMenu;
};

const displayMenuButton = () => {
  const categories = ['all', ...new Set(menu.map((item) => item.category))];
  let displayMenuButton = button.map((item) => {
    return `
        <button type="button" class="filter-btn" data-id="${item.category}">${item.category}</button>`;
  });
  // console.log('displayButtons before join', menuButtons);
  menuButtons = menuButtons.join('');
  // console.log('displayButtons after join\n', menuButtons);
  btnContainer.innerHTML = menuButtons;

  const filterBtns = document.querySelectorAll('.filter-btn');
  console.log('filterBtns', filterBtns);
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log('data-id', e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const filterMenu = menu.filter((item) => item.category === category);
      if (category === 'all') {
        console.log('all', menu);
        displayMenuItems(menu);
      } else {
        console.log(category, filterMenu);
        displayMenuItems(filterMenu);
      }
    });
  });
};

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = response.json();
    console.log('menu data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  const menu = await fetchData(url);
  await displayMenuItems(menu);
  await displayMenuButton();
});
