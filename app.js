const carouselSlide = document.querySelector('.carousel-slide');

//return an array
const carouselImages = document.querySelectorAll('.carousel-slide img'); 


//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitioned', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        couter = carouselImages.length - 2; 
        carouselSlide.style.transform = 'transalteX(' + (-size * counter) +'px)';

    } 

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        couter = carouselImages.length - counter; 
        carouselSlide.style.transform = 'transalteX(' + (-size * counter) +'px)';

    } 




});