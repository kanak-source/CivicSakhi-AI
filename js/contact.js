// ================= FORM VALIDATION =================

const form=document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const subject=document.getElementById("subject").value.trim();
const message=document.getElementById("message").value.trim();

if(
name==="" ||
email==="" ||
subject==="" ||
message===""
){

alert("Please fill all fields");

return;

}

const emailPattern=
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email");

return;

}

alert(
"Message sent successfully!"
);

form.reset();

});




// ================= INPUT FOCUS EFFECT =================

const inputs=document.querySelectorAll(
"input, textarea"
);

inputs.forEach(input=>{

input.addEventListener("focus",()=>{

input.style.boxShadow=
"0 0 10px rgba(24,163,74,.25)";

});

input.addEventListener("blur",()=>{

input.style.boxShadow="none";

});

});




// ================= SCROLL REVEAL =================

const elements=document.querySelectorAll(
".contact-info,.contact-form,.map-section"
);

function reveal(){

elements.forEach(element=>{

const top=
element.getBoundingClientRect().top;

const visible=
window.innerHeight-100;

if(top<visible){

element.style.opacity="1";

element.style.transform=
"translateY(0)";

}

});

}

elements.forEach(element=>{

element.style.opacity="0";

element.style.transform=
"translateY(40px)";

element.style.transition=
"all .8s ease";

});

window.addEventListener(
"scroll",
reveal
);

reveal();