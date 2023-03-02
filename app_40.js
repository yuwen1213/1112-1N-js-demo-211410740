// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Cheng Yu Wen',
    job: 'Dentist Assistant',
    img: 'https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/photo.2.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  }, 
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

// function shoeReview() {

// }

const showReview = (person) => {
  const item = reviews[person];
  console.log('item', item);
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', () => {
  showReview(currentItem);
});

nextBtn.addEventListener('click', () => {
  currentItem++;
  if(currentItem >= reviews.length ) {
    currentItem = 0;
  }
  // console.log('currentItem', reviews[currentItem])
  showReview(currentItem);
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if(currentItem < 0 ) {
    currentItem += 4;
  }
  // console.log('currentItem', reviews[currentItem])
  showReview(currentItem);
});

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showReview(currentItem);
})