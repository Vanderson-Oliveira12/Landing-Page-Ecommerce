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
    intervalComment = 3000;
    maxComment = clientsComment.length;

    setInterval(()=>{
        clientsComment[indexComment].classList.remove('comment-active')
        indexComment++

        if(indexComment >= maxComment){
            indexComment = 0;
        }

        clientsComment[indexComment].classList.add('comment-active')

    }, intervalComment);

    let btnPrev = document.querySelector('.prev-client');
    let btnNext = document.querySelector('.next-client');

    btnNext.addEventListener('click', ()=>{
        clientsComment[indexComment].classList.remove('comment-active');
        indexComment++

        if(indexComment >= maxComment){
            indexComment = 0;
        }


        clientsComment[indexComment].classList.add('comment-active')
    });

    btnPrev.addEventListener('click', ()=>{
        clientsComment[indexComment].classList.remove('comment-active');
        indexComment--

        if(indexComment < 0){
            indexComment = maxComment - 1;
        }

        clientsComment[indexComment].classList.add('comment-active')

    });

}

export {CarouselClient, carrouselAbout}