$(document).ready(function(){
  $('.slider').slick({
arrows:false,
dots:true,
appendDots:'.slider-dots',
dotsClass:'dots',

 slidesToShow: 1,
autoplay: true,
autoplaySpeed: 10000,
  });

let ham = document.querySelector('.ham');
let time = document.querySelector('.times')
let mobilenav = document.querySelector(".mobile-nav");





ham.addEventListener('click',function (){
  mobilenav.classList.add('open');
});
time.addEventListener('click',function (){
  mobilenav.classList.remove('open');
});

$( '.mobile-nav a' ).on("click", function(){
  mobilenav.classList.remove('open');
});

});
