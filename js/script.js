const navBox = document.querySelectorAll('.nav_box');
const boxGrid = document.querySelectorAll('.box_grid');

navBox.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.nav_box.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.box_grid.active').classList.remove('active');
        boxGrid[idx].classList.add('active');
    });
});

const burgerBtn = document.getElementById('checkbox');
const moreContent = document.querySelector('.more');

burgerBtn.addEventListener('click', () => {
    moreContent.classList.toggle('active');
});

function aboutPage() {
    location.href = 'about.html';
    moreContent.classList.remove('active');
}

function refreshPage() {
    location.reload();
}

// const typed = new Typed('.multiple-text', {
//     strings: [ 'Justdhif', 'Frontend', 'Gamer', 'Student'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });

// var swiper = new Swiper(".", {
//     slidesPerView: 1,
//     spaceBetween: 50,
//     loop: true,
//     effect: "cube",
//     grabCursor: true,
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//     },
//     autoplay: {
//         delay: 3500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".next",
//         prevEl: ".back",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
// });