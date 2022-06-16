/* Initialize Swiper */  
var swiper = new Swiper(".mySwiper", {
slidesPerView: 2,
centeredSlides: false,
slidesPerGroupSkip: 1,
grabCursor: true,
spaceBetween : 20,
keyboard: {
    enabled: true,
},
breakpoints: {
    769: {
    slidesPerView: 2,
    slidesPerGroup: 1,
    },
},
scrollbar: {
    el: ".swiper-scrollbar",
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
});