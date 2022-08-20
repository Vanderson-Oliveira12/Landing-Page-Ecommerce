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

function CarouselClient(){
    let clientsComment, indexComment, intervalComment, maxComment;

    clientsComment = document.querySelectorAll('.comment-text-mobile')
    indexComment = 0;
    intervalComment = 4000;
    maxComment = clientsComment.length;

    setInterval(()=>{
        clientsComment[indexComment].classList.remove('comment-active')
        indexComment++

        if(indexComment >= maxComment){
            indexComment = 0;
        }

        clientsComment[indexComment].classList.add('comment-active')

    }, intervalComment)

}

window.addEventListener('load', carrouselAbout);
window.addEventListener('load', CarouselClient);


menuToggleClose();
menuToggle();