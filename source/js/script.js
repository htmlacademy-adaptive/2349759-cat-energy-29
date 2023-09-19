let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('main-nav--close-state')) {
    navMain.classList.remove('main-nav--close-state');
    navMain.classList.add('main-nav--open-state');
    navToggle.classList.add('main-header__toggle--open-state');
  } else {
    navMain.classList.add('main-nav--close-state');
    navMain.classList.remove('main-nav--open-state');
    navToggle.classList.remove('main-header__toggle--open-state');
  }
});
