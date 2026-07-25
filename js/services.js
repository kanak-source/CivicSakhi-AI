const searchInput=
document.querySelector(
".search-box input"
);

const cards=
document.querySelectorAll(
".service-card"
);

searchInput.addEventListener(
"keyup",
function(){

let value=
this.value.toLowerCase();

cards.forEach(card=>{

let text=
card.innerText.toLowerCase();

card.style.display=

text.includes(value)

? "block"
: "none";

});

});