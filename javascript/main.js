'use strict';
let members = document.getElementById('members');
let events = document.getElementById('events');
let blog = document.getElementById('blog');

let navbar = document.getElementById('navbar');
let menu = document.getElementById('menu');
let nav_small  = document.getElementById('nav-small');

let AboutUs_InAboutUs = document.getElementById('AboutUs_InAboutUs');
let ContactUsInAboutUS = document.getElementById('ContactUsInAboutUS');
let AboutUsSubSections = document.getElementById('AboutUsSubSections');

nav_small.addEventListener('click',()=>{
    menu.classList.toggle('display-block');
    navbar.classList.toggle('bgColor_nav_small');


});

window.addEventListener('scroll',()=>{
    let windowPosition = window.scrollY > 0;

    navbar.classList.toggle('navbar-bg', windowPosition);

});

let clicked = 1;
let firstClick = false;


AboutUs_InAboutUs.addEventListener('click',()=>{

    ContactUsInAboutUS.classList.toggle('margin-bottom-13rem');
    AboutUsSubSections.classList.toggle('display-block');
    AboutUs_InAboutUs.classList.toggle('bg-img-gradient');

    AboutUs_InAboutUs.addEventListener('blur', ()=>{
        ContactUsInAboutUS.classList.toggle('margin-bottom-13rem');
        AboutUsSubSections.classList.toggle('display-block');
        AboutUs_InAboutUs.classList.toggle('bg-img-gradient');

        console.log('absdjasd');
    })

});