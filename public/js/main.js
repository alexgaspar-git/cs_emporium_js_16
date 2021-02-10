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
let modalDeux = document.querySelector('#modalInsc');
let btnModal = document.querySelector('#btnModal');
let closeModal = document.querySelectorAll('.close');
let btnCo = document.querySelectorAll('.btnCo')
let btnInsc = document.querySelectorAll('.btnInsc')

btnModal.onclick = function() {
    modal.style.display = "block"
}

closeModal.forEach(el => {
    el.onclick = function() {
        modal.style.display = "none"
        modalDeux.style.display = "none"
    }
});

window.onclick = function(event) {
    if (event.target == modal || event.target == modalDeux) {
        modal.style.display = "none";
        modalDeux.style.display = "none"
    }
}

btnCo.forEach(el => {
    el.onclick = function() {
        modal.style.display = "block"
        modalDeux.style.display = "none"
    }
});

btnInsc.forEach(el => {
    el.onclick = function () {
        modal.style.display = "none"
        modalDeux.style.display = "block"
    }
});

//carousel

let pitiPoin = document.querySelectorAll('#pitiPoin>div')
let rProducts = document.querySelectorAll('.rProducts')

pitiPoin[0].onclick = (e) => {
    pitiPoin.forEach(el => {
        el.style.backgroundColor = ""
        e.target.style.backgroundColor = "red"
    });
    rProducts.forEach(el => {
        el.style.left = "0"
    });
}
pitiPoin[1].onclick = (e) => {
    pitiPoin.forEach(el => {
        el.style.backgroundColor = ""
        e.target.style.backgroundColor = "red"
    });
    rProducts.forEach(el => {
        el.style.left = "-25%"
    });
}
pitiPoin[2].onclick = (e) => {
    pitiPoin.forEach(el => {
        el.style.backgroundColor = ""
        e.target.style.backgroundColor = "red"
    });
    rProducts.forEach(el => {
        el.style.left = "-50%"
    });
}
pitiPoin[3].onclick = (e) => {
    pitiPoin.forEach(el => {
        el.style.backgroundColor = ""
        e.target.style.backgroundColor = "red"
    });
    rProducts.forEach(el => {
        el.style.left = "-75%"
    });
}