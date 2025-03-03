var swiper = new Swiper(".mySwiper", {
   sliderPerView: 3,
   loop: true,
   spaceBetween: 30,
   autoplay:{
    delay:4000,
    disableOnInteraction: false,
   },
breakpoints: {
    0: {
        slidesPerView: 1,
    },
    550: {
        slidesPerView: 2,
    },
    800: {
        slidesPerView: 3,
    },
    1000: {
        slidesPerView: 4,
    },
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});