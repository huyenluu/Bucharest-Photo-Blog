const carouselSlide = document.querySelector('.carousel-slide');

//return an array
const carouselImages = document.querySelectorAll('.carousel-slide img'); 


//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

debugger

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
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

    } 

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        couter = carouselImages.length - counter; 
        carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

    } 




});


//Option 2 - jQuery Smooth Scrolling
$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});


//About Page 

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

jQuery("document").ready(function($){
  var pos = $('.navegation-static').offset().top;
  var nav = $('.navegation-static');

    $(window).scroll(function () {
      if ($(this).scrollTop() > pos) {
      nav.removeClass("navegation-static");
      nav.addClass("navegation-static-scroll");
    } else {
      nav.removeClass("navegation-static-scroll");
      nav.addClass("navegation-static");
    }
  });
});

jQuery("document").ready(function($){
  var pos = $('.logo').offset().top;
  var nav = $('.logo');

    $(window).scroll(function () {
      if ($(this).scrollTop() > pos) {
      nav.removeClass("logo");
      nav.addClass("logo-scroll");
    } else {
      nav.removeClass("logo-scroll");
      nav.addClass("logo");
    }
  });
});

//End About Page