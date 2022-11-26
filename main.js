'use strict'

// nav
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const content = document.getElementById('content');

function menuActive() {
    nav.classList.toggle('menu-active');
    content.classList.toggle('visible');
}
function navQuery() {
    if (x.matches) {
        nav.classList.add('menu-active')
    }
}
let x = window.matchMedia("(min-width: 812px)");
navQuery(x);
x.addListener(navQuery);

burger.addEventListener('click', function (event) {
    menuActive();
    const menuElement = document.getElementById('menuElement');
    let menu = menuElement.querySelectorAll('a');
    if (nav.classList != "") {
        for (let i = 0; i < menu.length; i++) {
            menu[i].addEventListener('click', menuActive)
        };
    };
});

// content 

let lastScrollTop = 0;
window.addEventListener('scroll', function (e) {
    const aboutMe = document.getElementById('about');
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        aboutMe.classList.add('about2');
        aboutMe.style.visibility = "visible";
        if (st > 532) {
            doType();
        }
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);



let txt = "A few technologies I've been learning";
let txtHu = "vmifdgdfg sdfgsdfg"
var doType = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            typeWriter();
        }
    };

})();

function typeWriter() {
    let i = 0;
    setInterval(function () {
        if (i < txt.length) {
            document.getElementById('techs').innerHTML += txt.charAt(i);
            i++;
        }

    }, 100);
}

//slider
const galleryContainer = document.getElementsByClassName('.gallery-contanier');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
let galleryItems = document.querySelectorAll('.gallery-item');


class Carousel {

    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

        });
        this.addButtonText();
    }
    addButtonText() {
        galleryControlsContainer.childNodes[0].innerHTML = ' <i class="fa-solid fa-arrow-left"></i> Prev';
        galleryControlsContainer.childNodes[1].innerHTML = 'Next <i class="fa-solid fa-arrow-right"></i>';

    }
    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

//HU || EN 
const language = document.getElementById('isChecked').checked;
const checkSwitch = document.getElementById('isChecked');
const huText = document.querySelectorAll('.textHidden');
const enText = document.querySelectorAll('.enText');
const galleryEn = document.getElementById('galleryEn');
const galleryHu = document.getElementById('galleryHu');


checkSwitch.addEventListener('click', function (e) {
    huText.forEach(el => {
        el.classList.toggle('textHidden');
    });
    enText.forEach(el => {
        el.classList.toggle('textHidden');
    });
    galleryEn.classList.toggle('galleryTxt');
    galleryHu.classList.toggle('galleryTxt');
});
function changeButton(language) {
    if (true) {
        galleryControlsContainer.childNodes[0].innerHTML = ' <i class="fa-solid fa-arrow-left"></i> Előző';
        galleryControlsContainer.childNodes[1].innerHTML = 'Követ. <i class="fa-solid fa-arrow-right"></i>';
    }
}
























