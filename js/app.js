import { carouselClients, carouselClientContent } from "./carousel.js"

const menuBurguer = {
    menuOpenButton: document.querySelector('.burguer'),
    menuClosedButton: document.querySelector('.burguer-close'),
    menuListLinks: document.querySelector('.nav-links-list-mobile'),
    menuActive(){
        menuBurguer.menuListLinks.classList.add('menu-active')
    },
    menuClosed(){
        menuBurguer.menuListLinks.classList.remove('menu-active')
    },
    menuInit(){
        menuBurguer.menuOpenButton.addEventListener('click', menuBurguer.menuActive)
        menuBurguer.menuClosedButton.addEventListener('click', menuBurguer.menuClosed)
    }
}

menuBurguer.menuInit();
carouselClients.carouselInit();
carouselClientContent.carouselContentRender();
