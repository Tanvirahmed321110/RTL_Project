

const nav = document.getElementById('nav')
document.getElementById('mobile-menu').addEventListener('click',()=>{
    nav.classList.toggle('active')
})


var swiper = new Swiper('.mySwiper', {
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000, 
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});