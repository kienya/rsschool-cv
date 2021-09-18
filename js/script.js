'use strict'

//Mobile menu and smooth scrolling
const iconsMenu = document.querySelector('.icon-menu'),
    menu = document.querySelector('.header__nav'),
    body = document.querySelector('body'),
    links = document.querySelector('.nav-list').querySelectorAll('a[href^="#"]');

let showHideMenu = () => {
    menu.classList.toggle('header__nav_active');
    body.classList.toggle('body-lock');
    iconsMenu.classList.toggle('icon-menu_active');
}

iconsMenu.addEventListener('click', () => {
    showHideMenu();
})

links.forEach(item => item.addEventListener('click', (e) => {
    if (menu.classList.contains('header__nav_active')) {
        showHideMenu();
    }
    e.preventDefault();
    const id = item.getAttribute('href').slice(1);
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}));

