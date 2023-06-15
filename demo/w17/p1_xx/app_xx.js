const supabaseUrl = 'https://hlbovfzvhsftjuylmwlc.supabase.co'
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsYm92Znp2aHNmdGp1eWxtd2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMjM2MDEsImV4cCI6MjAwMTc5OTYwMX0.3xbOgjNc4pr9X31nQe9ZhydG4fBDFZZQ1sw0vFkRO-c'

const sectionCenter = document.querySelector('.section-center');//doucment裡面=>DOMC...
const btnContainer = document.querySelector('.btn-container');

// import { menu } from './data.js'
const url = 'https://hlbovfzvhsftjuylmwlc.supabase.co/rest/v1/menu_40?select=*';

let menu;

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) => {
        return `
        <article class="menu-item">
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
        </article>
        `;
    })
    // 除錯用 console.log('displayMenu', displayMenu);
    displayMenu = displayMenu.join('');
    // console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

const displayMenuButton = () => {
    const categories = ['all', ...new Set(menu.map((item) => item.category))];
    let displayMenuButton = button.map( (item) => {
        return `
        <button type="button" class="filter-btn" data-id="${item}">${item}</button>`
    });
    // console.log('displayButtons before join', menuButtons);
    menuButtons = menuButtons.join('');
    // console.log('displayButtons after join\n', menuButtons);
    btnContainer.innerHTML = menuButtons;

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

const fetchData = async () => {
    try{
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                apiKey: `${supabase_key}`,
                Authorization: `Bearer ${supabase_key}`,
            }
        });
        const data = response.json();
        console.log('fetch data',data );
        return data;
    }catch(error){
        console.log(error)
    }
}

window.addEventListener('DOMContentLoaded',async () => {
    const menu = await fetchData(url);
    await displayMenuItems(menu);
    await displayMenuButton(menu);
});
