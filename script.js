// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggleId && navId){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// active menu
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const nav = document.getElementById('nav-menu')
    nav.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//scroll home
sr.reveal('.home__title',{})
sr.reveal('.home__subtitle',{delay: 50})
sr.reveal('.button',{delay: 100})
sr.reveal('.home__social-icon',{interval: 200})
