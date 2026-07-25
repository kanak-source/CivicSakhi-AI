const search=

document.getElementById(
"searchInput"
);

const cards=

document.querySelectorAll(
".scheme-card"
);

search.addEventListener(
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