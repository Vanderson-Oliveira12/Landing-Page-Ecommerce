function carrouselAbout() {
    let images, imagesMax, imagesIndex, imageTimeInterval;

    images = document.querySelectorAll('.about-content-img-mobile img')
    imagesMax = images.length;
    imagesIndex = 0;
    imageTimeInterval = 3000;

    setInterval(() => {
        images[imagesIndex].classList.remove('active-img-about');
        imagesIndex++;
        if (imagesIndex >= imagesMax) {
            imagesIndex = 0;
        }
        images[imagesIndex].classList.add('active-img-about');
    }, imageTimeInterval)

}

window.addEventListener('load', carrouselAbout);

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

menuToggleClose();
menuToggle();