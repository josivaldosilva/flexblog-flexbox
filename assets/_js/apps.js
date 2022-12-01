const menuMobile = document.querySelector('#menu-mobile');
const showMenu = document.querySelector('#showMenu');
const closeMenu = document.querySelector('#closeMobile');

const desktopLinks = document.querySelectorAll('.menu-nav a');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

const allLinks = [...desktopLinks, ...mobileLinks]
console.log(allLinks)


[showMenu, closeMenu].map( (icon) => {
    icon.addEventListener('click', (e) => {
        menuMobile.classList.toggle('active')
    })
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