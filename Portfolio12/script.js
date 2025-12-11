const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


// mobile menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    // CLOSE MOBILE MENU
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // header animation
    header.classList.remove('active');
    setTimeout(() => header.classList.add('active'), 1100);

    // nav links
    navLinks.forEach(link => link.classList.remove('active'));

    // bars
    barsBox.classList.remove('active');
    setTimeout(() => barsBox.classList.add('active'), 1100);

    // sections
    sections.forEach(section => section.classList.remove('active'));
};

         menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {

        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                // FIXED: dot instead of comma
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

// LOGO CLICK → GO HOME
logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active'); // FIXED

        setTimeout(() => {
            sections[0].classList.add('active'); // FIXED
        }, 1100);
    }
});









const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click',() =>{
        const resumeDetails = document.querySelectorAll('.resume-details');


        resumeBtns.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail =>{
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');

    });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portpolio-kk .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-details');

    // Fix transform
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    // Fix: portfolioDetails is now a NodeList
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    if (portfolioDetails[index]) {
        portfolioDetails[index].classList.add('active');
    }
}

// Right arrow
arrowRight.addEventListener('click', () => {

    if (index < 4) {      // 5 slides → index 0–4
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 4;         // stop at last slide
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

// Left arrow
arrowLeft.addEventListener('click', () => {

    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0;          // stop at first slide
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});





