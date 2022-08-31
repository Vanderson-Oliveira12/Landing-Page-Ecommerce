function menuToggle() {
    let btnToggle, navMobile;

    btnToggle = document.querySelector('.burguer');
    navMobile = document.querySelector('.nav-mobile .nav-links-list-mobile');

    btnToggle.addEventListener('click', () => {
        navMobile.classList.add('menu-active')
    });
};

function menuToggleClose(){
    let btnToggleClose, navMobile;

    btnToggleClose = document.querySelector('.burguer-close');
    navMobile = document.querySelector('.nav-mobile .nav-links-list-mobile');

    btnToggleClose.addEventListener('click', ()=>{
        navMobile.classList.remove('menu-active')
    });
}

import { carrouselAbout, CarouselClient, CarouselClientDesktop } from './carousel.js';

window.addEventListener('load', carrouselAbout);
window.addEventListener('load', CarouselClient);
window.addEventListener('load', CarouselClientDesktop);


menuToggleClose();
menuToggle();