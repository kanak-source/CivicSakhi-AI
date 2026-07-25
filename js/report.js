document
.getElementById(
"complaintForm"
)

.addEventListener(

"submit",

function(e){

e.preventDefault();

let id=

"NS"+

Math.floor(
100000+
Math.random()*900000
);

document
.getElementById(
"success"
)

.innerHTML=

`
<div style="
margin-top:20px;
padding:15px;
background:#e8f8ea;
border-radius:10px;
">

Complaint Registered Successfully

<br><br>

Complaint ID:

<b>${id}</b>

</div>

`;

});