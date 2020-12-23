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