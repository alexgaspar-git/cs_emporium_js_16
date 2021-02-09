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

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
});

faders.forEach(el => {
    appearOnScroll.observe(el);
});

//modal

let modal = document.querySelector('#modalCo');
let btnModal = document.querySelector('#btnModal');
let closeModal = document.querySelectorAll('.close');

btnModal.onclick = function() {
    modal.style.display = "block"
}

console.log(closeModal);