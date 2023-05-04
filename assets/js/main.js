const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container = document.querySelector(".container");
const carusel = document.querySelector(".carusel");
const thumbnails = document.querySelector("#thumbnails")
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".previous");
const autoPlay = document.querySelector(".autoPlay");
let counter = 0;

function addClass(element, classe, classe2) {
    element.classList.add(classe, classe2);
}

function filler(index){
    imageSlider.src = `./assets/${images[index].image}`; //SRC del immagine
    titleSlider.innerText = images[index].title//Titolo della slider
    textSlider.innerText = images[index].text//testo della slider
};

let autoCarusel = setInterval(incrementaContatore, 3000);

function incrementaContatore() {
    if (counter == images.length - 1) {
        counter = 0;
        filler(counter);
    } else {
        counter++;
        filler(counter);
    }
}

function decrementaContatore() {
    if (counter == 0) {
        counter = images.length - 1;
        filler(counter);
    } else {
        counter--;
        filler(counter);
    }
}

const slider = document.createElement("div");
// slider.classList.add("sliders");
addClass(slider, "sliders");

const imageSlider = document.createElement("img");
imageSlider.src = `./assets/${images[0].image}`; //SRC del immagine
// imageSlider.classList.add("absolute", "w-100");//aggingi classe
addClass(imageSlider, "absolute", "w-100");

const titleSlider = document.createElement("h3");
titleSlider.innerText = images[0].title//Titolo della slider
// titleSlider.classList.add("title");
addClass(titleSlider, "title");

const textSlider = document.createElement("p");
textSlider.innerText = images[0].text//testo della slider
// textSlider.classList.add("text");
addClass(textSlider, "text");


carusel.append(slider);
slider.append(imageSlider);
slider.append(titleSlider);
slider.append(textSlider);

btnNext.addEventListener("click", () => {
    incrementaContatore()
    clearInterval(autoCarusel);
});

btnPrev.addEventListener("click", () => {
    decrementaContatore()
    clearInterval(autoCarusel);
});

autoPlay.addEventListener("click", () => {
    autoCarusel = setInterval(incrementaContatore, 3000);
});

for (let i = 0; i < images.length; i++) {
    const listElement = images[i];
    const figure = document.createElement("img");
    figure.src = "./assets/" + listElement.image;
    thumbnails.append(figure);
    
    figure.addEventListener("click", function() {
        filler(i);
    })
}
