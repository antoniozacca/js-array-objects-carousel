'use strict'

const images = [
    {
        image: '../img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '../img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '../img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '../img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '../img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
 

// const primaImmagine = document.getElementById("immagine-primaria");
// let img = document.createElement("img");
// img.src= images[0].image;
// primaImmagine.appendChild(img)
// let titolo = document.createElement("h1");
// titolo.append(images[0].title);
// primaImmagine.appendChild(titolo)
// let testo= document.createElement("p");
// testo.append(images[0].text)
// primaImmagine.appendChild(testo)

const next = document.querySelector(".next");
next.addEventListener('click', function(){
    for(let i=0; i<images.length; i++){
        const primaImmagine = document.getElementById("immagine-primaria");
let img = document.createElement("img");
img.src= images[i].image;
primaImmagine.appendChild(img)
let titolo = document.createElement("h1");
titolo.append(images[i].title);
primaImmagine.appendChild(titolo)
let testo= document.createElement("p");
testo.append(images[i].text)
primaImmagine.appendChild(testo)

    }
})

