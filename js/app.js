
const carouselSlide = document.querySelector('.carousel-slide')
const carouselImage = document.querySelectorAll('.carousel-slide img')
  
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

const size = carouselImage[0].clientWidth
let counter = 1
const positonReal = "transform 0.4s ease-in-out"

function positionPX(counter) {
    var value = -(carouselImage[0].clientWidth * counter)
    return 'translateX(' + value + 'px)'
}


carouselSlide.style.transform = positionPX(counter)

 
nextBtn.addEventListener('click', () => {
    if(counter >= carouselImage.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    carouselSlide.style.transform = positionPX(counter)

})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = positionPX(counter)
})


carouselSlide.addEventListener('transitionend', () => {
    if (carouselImage[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none"
        counter = carouselImage.length - 2
        carouselSlide.style.transform = positionPX(counter)
    }

    if (carouselImage[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none"
        counter = carouselImage.length - counter
        carouselSlide.style.transform = positionPX(counter)
    }
})