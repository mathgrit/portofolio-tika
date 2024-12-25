/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {   
            navMenu.classList.add('show-menu') 
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener("click", () => {   
            navMenu.classList.remove('show-menu') 
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //ketika klik di setiap nav__link, maka kelas show-menu dihapus
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))




/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    //when the scroll is grater tah 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >=50) header.classList.add('scroll-header'); 
        else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);



/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper",{
    spaceBetween:16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true'
});

/*=============== SERVICES TAB ===============*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('services__active')
        })

        target.classList.add('services__active')

        tabs.forEach(tab => {
            tab.classList.remove('services__active')
        })

        tab.classList.add('services__active')
    })
})

/*=============== LIGHTBOX GALLERY ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(navLink => {
        navLink.classList.remove('active-link');
        if (navLink.getAttribute('href').includes(current)) {
            navLink.classList.add('active-link');
        }
    });
});


window.addEventListener('scroll', () => { 
    if (window.innerWidth <= 768) { // Memastikan kode hanya berjalan pada perangkat dengan lebar maksimal 768px 
    let current = ''; 
    
    sections.forEach(section => { 
        const sectionTop = section.offsetTop; 
        const sectionHeight = section.clientHeight; 
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id'); 
        } 
    }); 
        
    navLinks.forEach(navLink => { 
        navLink.classList.remove('active-link'); 
        if (navLink.getAttribute('href').includes(current)) { 
            navLink.classList.add('active-link'); 
        } 
    }); 
} });
