/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i);
    });
});

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        });
    });
});

/*=============== WORK MODAL ===============*/

const workViews = document.querySelectorAll('.work__modal'),
    workBtns = document.querySelectorAll('.work__button'),
    workClose = document.querySelectorAll('.work__modal-close');

let modalWork = function(modalClick){
    workViews[modalClick].classList.add('active__work-modal');
}

workBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modalWork(i);
    });
});

workClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        workViews.forEach((mv) => {
            mv.classList.remove('active__work-modal');
        });
    });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
/* Link active work */ 

const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork));

/*=============== SWIPER WORK ===============*/

let swiperWork = new Swiper(".work__modal", {
    spaceBetween: 24,
    loop: true,
    grapCursor: true,
    
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window./* `scrollY` is a variable that is used to determine the current scroll
    position of the user. */
    scrollY;

    sections.forEach(current => {
        console.log('scrollY', scrollY);
        
        const sectionHeight = current./* The height of the element. */
        offsetHeight,
            sectionTop = current./* The distance from the top of the page to the top of the element. */
            offsetTop - 58,
            sectionId = current.getAttribute('id');
            console.log('1', scrollY > sectionTop);
            console.log('2', scrollY <= sectionTop + sectionHeight);
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== LIGHT DARK THEME ===============*/ 

const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
    document.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {delay: 700});
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'});