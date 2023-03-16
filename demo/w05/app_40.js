import { menu } from './data.js'

const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const sectionCenter = document.querySelector('.section-center');//doucment裡面=>DOMC...
const btnContainer = document.querySelector('.btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) => {
        return `
        <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
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
    })
    
    // 除錯用 console.log('displayMenu', displayMenu);
    displayMenu = displayMenu.join('');
    // console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;

}

const displaycategoriesItems = (button) => {
    let displayButton = button.map( (item) => {
        return `
        <button type="button" class="filter-btn" data-id="${item}">${item}</button>
        `
    });
    // console.log('displayButton', displayButton);
    displayButton = displayButton.join('');
    // console.log('displayButton after join', displayButton);
    btnContainer.innerHTML = displayButton;
    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log('filterBtns', filterBtns);
    filterBtns.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            console.log('data-id', e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            const filterMenu = menu.filter( (item) => item.category === category);
            if(category === 'all'){
                console.log('all', menu)
                displayMenuItems(menu);
            }else{
                console.log(category, filterMenu);
                displayMenuItems(filterMenu)
            }
        });
    });
}




window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displaycategoriesItems(categories);
});
