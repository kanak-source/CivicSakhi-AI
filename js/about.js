// ================= NAVBAR ACTIVE LINK =================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

navLinks.forEach(item=>{
item.classList.remove("active");
});

link.classList.add("active");

});

});




// ================= CARD HOVER ANIMATION =================

const cards = document.querySelectorAll(
".card,.service-card,.feature-box"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";
card.style.transition=".4s ease";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});




// ================= SCROLL REVEAL EFFECT =================

const revealElements=document.querySelectorAll(
".card,.service-card,.hero-left,.hero-right,.vision,.cta"
);

function reveal(){

revealElements.forEach(element=>{

const top=element.getBoundingClientRect().top;
const windowHeight=window.innerHeight;

if(top < windowHeight-100){

element.style.opacity="1";
element.style.transform="translateY(0)";

}

});

}

revealElements.forEach(element=>{

element.style.opacity="0";
element.style.transform="translateY(40px)";
element.style.transition=
"all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();