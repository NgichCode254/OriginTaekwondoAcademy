'use strict';
let windowWidth = window.innerWidth;

let slides = document.getElementsByClassName('sectionSider-div');
let updates = document.getElementsByClassName('update');

let index = 0;

const next = () =>{
    slides[index].classList.remove('visible-slide');
    index = (index + 1) % slides.length;
    slides[index].classList.add('visible-slide');
}

const prev = () =>{
    slides[index].classList.remove('visible-slide');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('visible-slide');
}

let update_index = 0
const nextUpdate = () =>{
    updates[update_index].classList.remove('visible-slide');
    update_index = (update_index + 1) % updates.length;
    updates[update_index].classList.add('visible-slide');
}

let update_index_Big = 0
const nextUpdate_Big = () =>{
    updates[update_index_Big].classList.remove('visible-slide-inline-block');
    
    updates[ (update_index_Big + 1) % updates.length ].classList.remove('visible-slide-inline-block');

    update_index_Big = (update_index_Big + 2) % updates.length;

    updates[update_index_Big].classList.add('visible-slide-inline-block');
    
    updates[(update_index_Big + 1) % updates.length].classList.add('visible-slide-inline-block');
}


setInterval(() => {
    windowWidth = window.innerWidth;

    if (windowWidth < 900) {
        setInterval(() => {
            nextUpdate()
        }, 4000);
    }
    else{
        setInterval(() => {
            nextUpdate_Big()
        }, 4000);
    }
}, 4000);

// setInterval(() => {
//     nextUpdate()
// }, 6000);