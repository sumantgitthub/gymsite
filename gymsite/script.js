const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');
// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu)

//animation
gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
    duration: 0.6,
    opactiy: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opactiy: 1,
    x: -150,
    stagger: 0.13
});


gsap.from('.animate-img', {
    scrollTrigger: '.animate-services',
    duration: 1.2,
    opactiy: 0,
    x: -200,
});

gsap.from('.animate-membership', {
    scrollTrigger: '.animate-membership',
    duration: 1,
    opactiy: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5,
});

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opactiy: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2,
});

gsap.from('.animate-team', {
    scrollTrigger: '.animate-team',
    duration: 1,
    opactiy: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2,
});

gsap.from('.animate-email', {
    scrollTrigger: '.animate-email',
    duration: 0.8,
    opactiy: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.4,
});