const showMenu = document.querySelector('#showMenu');
const closeMenu = document.querySelector('#closeMenu');
const desktopLinks = document.querySelectorAll('.menu-nav a');
const mobileLinks = document.querySelectorAll('#menu-mobile a');
const menuMobile = document.querySelector('.menu-mobile');

const allLinks = [...desktopLinks, ...mobileLinks];

showMenu.addEventListener('click', (e) => {
    e.target.classList.add('active')
    menuMobile.classList.add('active')
    closeMenu.classList.add('active')
})

closeMenu.addEventListener('click', (e) => {
    e.target.classList.remove('active')
    menuMobile.classList.remove('active')
    showMenu.classList.remove('active')
})

function smoothScroll(e){
    e.preventDefault();
 
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
 
    scroll({
     top: offsetTop,
     behavior: "smooth",
    });
 
    setTimeout(() => {
         if(menuMobile.classList.contains('active')){
             menuMobile.classList.remove('active')
         }
    }, 500)
 };

allLinks.map( (links) => {
    links.addEventListener('click', smoothScroll)
 })
