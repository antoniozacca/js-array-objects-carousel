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

const parent = document.querySelector(".items");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


for(let i=0; i<images.length; i++){

    const item = document.createElement('div');
    item.classList.add('item');
    // image
    let img = document.createElement("img");
    img.src= images[i].image;
    item.appendChild(img)

    // titolo
    let titolo = document.createElement("h1");
    titolo.append(images[i].title);
    item.appendChild(titolo)

    // testo
    let testo= document.createElement("p");
    testo.append(images[i].text)
    item.appendChild(testo)
    

    parent.appendChild(item)

}

let active = 0;
document.querySelectorAll('.item')[active].classList.add('active')

next.addEventListener('click', function (){
    active++;
    if (active === document.querySelectorAll('.item').length){
        active=0;
    }
    
    document.querySelector('.item.active').classList.remove('active');
    document.querySelectorAll('.item')[active].classList.add('active');
   
})
prev.addEventListener('click', function(){
    active--;
    console.log(active);
    if (active< 0){
        active= document.querySelectorAll('.item').length-1;
    }
    document.querySelector('.item.active').classList.remove('active');
    document.querySelectorAll('.item')[active].classList.add('active');
    
})

