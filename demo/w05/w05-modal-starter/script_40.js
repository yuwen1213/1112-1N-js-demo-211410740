'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log('modal', modal);
console.log('shoe-modal', btnsOpenModal);

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i=0; i<btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
}