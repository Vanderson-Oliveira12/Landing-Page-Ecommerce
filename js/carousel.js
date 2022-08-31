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

/* Versão Desktop */

export function CarouselClientDesktop() {
    let imgArr, imgIndex, imgLength;

    imgArr = document.querySelectorAll('.comment-item');
    imgIndex = 0;
    imgLength = imgArr.length;

    setInterval(() => {
        imgArr[imgIndex].classList.remove('comment-item-active')
        imgIndex++
        if (imgIndex >= imgLength) {
            imgIndex = 0
        }
        imgArr[imgIndex].classList.add('comment-item-active')
    }, 4000)

    let arrowNext, ArrowPrev;

    ArrowPrev = document.querySelector('.arrow-left');
    arrowNext = document.querySelector('.arrow-right');

    arrowNext.addEventListener('click', ()=>{
        imgArr[imgIndex].classList.remove('comment-item-active')
        imgIndex++
        if (imgIndex >= imgLength) {
            imgIndex = 0
        }
        imgArr[imgIndex].classList.add('comment-item-active')
    })

    ArrowPrev.addEventListener('click', ()=>{
        imgArr[imgIndex].classList.remove('comment-item-active')
        imgIndex--
        if(imgIndex < 0){
            imgIndex = imgLength - 1;
        }
        imgArr[imgIndex].classList.add('comment-item-active')
    })

}






























/* Versao mobile */

function CarouselClient() {
    let clientsComment, indexComment, intervalComment, maxComment;

    clientsComment = document.querySelectorAll('.comment-text-mobile')
    indexComment = 0;
    intervalComment = 3000;
    maxComment = clientsComment.length;

    setInterval(() => {
        clientsComment[indexComment].classList.remove('comment-active')
        indexComment++

        if (indexComment >= maxComment) {
            indexComment = 0;
        }

        clientsComment[indexComment].classList.add('comment-active')

    }, intervalComment);

    let btnPrev = document.querySelector('.prev-client');
    let btnNext = document.querySelector('.next-client');

    btnNext.addEventListener('click', () => {
        clientsComment[indexComment].classList.remove('comment-active');
        indexComment++

        if (indexComment >= maxComment) {
            indexComment = 0;
        }


        clientsComment[indexComment].classList.add('comment-active')
    });

    btnPrev.addEventListener('click', () => {
        clientsComment[indexComment].classList.remove('comment-active');
        indexComment--

        if (indexComment < 0) {
            indexComment = maxComment - 1;
        }

        clientsComment[indexComment].classList.add('comment-active')

    });

}

export { CarouselClient, carrouselAbout }