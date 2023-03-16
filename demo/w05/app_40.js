import {menu} from './data.js'

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) => {
        return `
        <article class="menu-item">
          <img src=${item.img} alt=${item.tittle} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>
        `
    });
    // console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    // console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'desert', 'shakes'];
const categories = ['all', ...new Set(menu.map((item) => item.category))];

const displayMenuButtons = () => {
    let menuButtons = categories.map((category) => {
        return `
        <button type="button" class="filter-btn" data-id=${category}>${category}</button>
        `
    });
    console.log('displayButtons before join', menuButtons);
    menuButtons = menuButtons.join('');
    console.log('displayButtons after join', menuButtons);
    btnContainer.innerHTML = menuButtons;
}

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
  });


