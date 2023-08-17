'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModel = () => {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModel);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//adding keyboard events, keyboard events are global events as they do not specifically apply on one case
//they will be used as on every case on screen

document.addEventListener('keydown', function (e) {
  // console.log(e);

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
