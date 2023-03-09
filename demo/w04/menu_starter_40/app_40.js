const menu = [
    {
        id: 1,
        title: 'blueberry pancake', 
        category: 'breakfast', 
        price: 15.59,
        img: './images/my-1.jpg',
        remote_img: '',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam, at sequi maiores sit. Fuga non provident ipsa repellendus dolorem eveniet, ducimus iure cumque officiis corrupti deleniti ab libero ipsam, impedit nulla facere. Blanditiis dolore id minima voluptates maiores.',
    },
    {
        id: 2,
        title: 'salad', 
        category: 'lunch', 
        price: 13.99,
        img: './images/my-2.jpg',
        remote_img: '',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam, at sequi maiores sit. Fuga non provident ipsa repellendus dolorem eveniet, ducimus iure cumque officiis corrupti deleniti ab libero ipsam, impedit nulla facere. Blanditiis dolore id minima voluptates maiores.',
    },
    {
        id: 3,
        title: 'penne pasta', 
        category: 'dinner', 
        price: 6.99,
        img: './images/my-3.jpg',
        remote_img: '',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam, at sequi maiores sit. Fuga non provident ipsa repellendus dolorem eveniet, ducimus iure cumque officiis corrupti deleniti ab libero ipsam, impedit nulla facere. Blanditiis dolore id minima voluptates maiores.',
    },
    {
        id: 4,
        title: 'godzilla milkshake', 
        category: 'shakes', 
        price: 6.99,
        img: './images/item-1.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam, at sequi maiores sit. Fuga non provident ipsa repellendus dolorem eveniet, ducimus iure cumque officiis corrupti deleniti ab libero ipsam, impedit nulla facere. Blanditiis dolore id minima voluptates maiores.',
    },
    {
        id: 5,
        title: 'godzilla milkshake', 
        category: 'shakes', 
        price: 6.99,
        img: './images/item-2.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam, at sequi maiores sit. Fuga non provident ipsa repellendus dolorem eveniet, ducimus iure cumque officiis corrupti deleniti ab libero ipsam, impedit nulla facere. Blanditiis dolore id minima voluptates maiores.',
    },
    {
        id: 6,
        title: 'godzilla milkshake', 
        category: 'shakes', 
        price: 6.99,
        img: './images/item-3.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam, at sequi maiores sit. Fuga non provident ipsa repellendus dolorem eveniet, ducimus iure cumque officiis corrupti deleniti ab libero ipsam, impedit nulla facere. Blanditiis dolore id minima voluptates maiores.',
    },
];

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
              <h4 class="price">${item.price}}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>
        `
    });
    console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
  });


