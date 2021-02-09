//nav&titre fixed on scroll

let titre = document.querySelector('h1');
let nav = document.querySelector('nav');
let navPos = nav.offsetTop

let fixeroo = () => {
    if (window.pageYOffset >= navPos) {
        nav.classList.add('navFixed');
        titre.classList.add('titleFixed');
    } else {
        nav.classList.remove('navFixed');
        titre.classList.remove('titleFixed');
    }
}

console.log(window.pageYoffset);

window.onscroll = function() {fixeroo()};