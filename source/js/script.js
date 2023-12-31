let navMain = document.querySelector('.main-nav');
let navList = document.querySelector('.main-nav__list');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('main-nav__list--close-state')) {
    navList.classList.remove('main-nav__list--close-state');
    navList.classList.add('main-nav__list--open-state');
    navToggle.classList.add('main-header__toggle--open-state');
  } else {
    navList.classList.add('main-nav__list--close-state');
    navList.classList.remove('main-nav__list--open-state');
    navToggle.classList.remove('main-header__toggle--open-state');
  }
});
