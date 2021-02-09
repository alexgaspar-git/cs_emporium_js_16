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

window.onscroll = function() {fixeroo()};

//night mode

let btnDark = document.querySelector('.btnDark');
let body = document.querySelector('body');

btnDark.addEventListener('click', () => {
    body.classList.toggle('dark');
    nav.classList.toggle('dark');
    if (body.classList[0] == 'dark') {
        btnDark.innerHTML = '<i class="fas fa-sun"></i>'
    } else {
        btnDark.innerHTML = '<i class="fas fa-moon"></i>'
    }
});

//fade in
