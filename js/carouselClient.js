export const carouselClient = {
    image: document.querySelectorAll('.about-content-img-mobile img'),
    imageInterval: 3000,
    imageIndex: 0,
    carouselActivated(){
        let carouselLength = carouselClient.image.length - 1;
        let carouselArr = carouselClient.image;

        setInterval(()=>{
            carouselArr[carouselClient.imageIndex].classList.remove('active-img-about');
            carouselClient.imageIndex += 1;

            if(this.imageIndex > carouselLength){
                this.imageIndex = 0
            }

            carouselArr[carouselClient.imageIndex].classList.add('active-img-about');

        }, this.imageInterval)
    }
}