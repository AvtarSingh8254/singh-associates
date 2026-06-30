// Navbar Effect

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(15,15,15,.88)";
nav.style.marginTop="10px";

}else{

nav.style.background="rgba(20,20,20,.45)";
nav.style.marginTop="20px";

}

});

// Hero Slideshow

const slides=document.querySelectorAll(".slide");

let current=0;

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

},5000);