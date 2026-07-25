document
.getElementById(
"imageBtn"
)

.onclick=()=>{

document
.getElementById(
"imageUpload"
)

.click();

};



document
.getElementById(
"imageUpload"
)

.onchange=(e)=>{

let file=

e.target.files[0];

let fileName=

file.name.toLowerCase();

let response=
"Image uploaded.";



if(
fileName.includes(
"road"
)
){

response=
"Possible road damage detected";

}

else if(
fileName.includes(
"garbage"
)
){

response=
"Garbage issue detected";

}

else if(
fileName.includes(
"water"
)
){

response=
"Water leakage issue detected";

}



addMessage(
response,
"bot"
);

speak(
response
);

};