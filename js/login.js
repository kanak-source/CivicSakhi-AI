const password =
document.getElementById("password");

const eyeBtn =
document.getElementById("eyeBtn");

const loginForm =
document.getElementById("loginForm");


/* PASSWORD SHOW/HIDE */

eyeBtn.onclick=()=>{

if(password.type==="password"){

password.type="text";

eyeBtn.classList.remove(
"fa-eye"
);

eyeBtn.classList.add(
"fa-eye-slash"
);

}

else{

password.type="password";

eyeBtn.classList.remove(
"fa-eye-slash"
);

eyeBtn.classList.add(
"fa-eye"
);

}

};



/* ROLE BUTTONS */

let roles=
document.querySelectorAll(".role");

roles.forEach(btn=>{

btn.onclick=function(){

roles.forEach(r=>{

r.classList.remove(
"active-role"
);

});

this.classList.add(
"active-role"
);

};

});



/* LOGIN + SIGNUP MODE */

let isSignup=false;

const loginTitle=
document.querySelector(
".login-card h2"
);

const bottomLink=
document.querySelector(
".signup-text a"
);

const form=
document.getElementById(
"loginForm"
);



bottomLink.onclick=function(e){

e.preventDefault();

isSignup=!isSignup;


/* SIGNUP */

if(isSignup){

loginTitle.innerHTML=
"Create Account";


if(!document.getElementById("fullName")){

let field=
document.createElement(
"input"
);

field.type="text";

field.placeholder=
"Full Name";

field.id=
"fullName";

form.insertBefore(
field,
form.firstChild
);

}

bottomLink.innerHTML=
"Login";

}

/* LOGIN */

else{

loginTitle.innerHTML=
"Welcome Back";

let nameField=
document.getElementById(
"fullName"
);

if(nameField){

nameField.remove();

}

bottomLink.innerHTML=
"Register";

}

};



/* SUBMIT */

loginForm.addEventListener(
"submit",

function(e){

e.preventDefault();


let email=
document.querySelector(
'input[type="email"]'
).value;

let pass=
password.value;


if(email==="" || pass===""){

alert(
"Fill all fields"
);

return;

}



/* SIGNUP */

if(isSignup){

let name=
document.getElementById(
"fullName"
).value;


let user={

name:name,
email:email,
password:pass

};


localStorage.setItem(

email,

JSON.stringify(user)

);


alert(
"Registration Successful"
);

location.reload();

}


/* LOGIN */

else{

let user=

JSON.parse(

localStorage.getItem(
email
)

);


if(user==null){

alert(
"User not found"
);

return;

}


if(user.password!==pass){

alert(
"Wrong Password"
);

return;

}


/* Save logged in user */

localStorage.setItem(

"currentUser",

JSON.stringify(user)

);


alert(
"Login Successful"
);


/* Redirect to Home */

window.location.href=
"index.html";

}

});