const burgerBtn = document.querySelector('.burger-btn');
const navList = document.querySelector('.nav__list');
const Cover = document.querySelector('.cover');

burgerBtn.addEventListener('click', function() {
    this.classList.toggle('burger-btn--open');
    navList.classList.toggle('nav__list--active');
    Cover.classList.toggle('cover--active');
})