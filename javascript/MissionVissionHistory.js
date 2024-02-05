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

AboutUs_InAboutUs.addEventListener('click',()=>{

    ContactUsInAboutUS.classList.toggle('margin-bottom-13rem');
    AboutUsSubSections.classList.toggle('display-block');
    AboutUs_InAboutUs.classList.toggle('bg-img-gradient');

});


let remainingPara = document.getElementsByClassName('remainingPara');
let continueReading = document.getElementsByClassName('continueReading');
let close_blog = document.getElementsByClassName('close_blog');

console.log(continueReading);
for (let index = 0; index < continueReading.length; index++) {
    const element = continueReading[index];
    console.log(element);
    element.addEventListener('click', () =>{
        remainingPara[index].classList.add('display-block');
        continueReading[index].classList.add('display-none');
    })
}
for (let index = 0; index < close_blog.length; index++) {
    const element = close_blog[index];
    console.log(element);
    element.addEventListener('click', () => {
        remainingPara[index].classList.remove('display-block');
        continueReading[index].classList.remove('display-none');
    })
}