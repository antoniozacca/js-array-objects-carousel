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

let primaImmagine = document.getElementById("prima-img");
let img = document.createElement("img");
img.src= images[0].image
primaImmagine.appendChild(img)

let divThumb = document.getElementById("thumb")
for(let i=1; i<images.length; i++){
    let img = document.createElement("img");
    img.src= images[i].image;
    divThumb.appendChild(img)
}

divThumb.addEventListener('click', function(){

    document.querySelector('.item.active').classList.remove('item active');
    document.getElementById("prima-img").classList.add('thumb active')
    document.querySelector('.thumb.active').classList.remove('thumb active');
    document.getElementById("thumb").classList.add(' item active')
})