window.speechSynthesis.onvoiceschanged = ()=>{

window.speechSynthesis.getVoices();

};
const input=
document.querySelector(
".chat-input input"
);

const sendBtn=
document.querySelector(
".chat-input button"
);

const messages=
document.querySelector(
".chat-messages"
);



sendBtn.addEventListener(
"click",
sendMessage
);

input.addEventListener(
"keypress",
function(e){

if(e.key==="Enter"){

sendMessage();

}

}
);



function sendMessage(){

let text=input.value;

if(text.trim()==="") return;



addMessage(
text,
"user"
);

generateReply(text);

input.value="";

}



function addMessage(
message,
type
){

let div=
document.createElement(
"div"
);

div.className=type;

div.innerText=message;

messages.appendChild(div);

messages.scrollTop=
messages.scrollHeight;

}

function generateReply(text){

text=text.toLowerCase();

let response=null;



/* WATER */

for(let ward of NagarDB.wards){

if(

text.includes("water") ||
text.includes("पानी") ||
text.includes("supply")

){

response=

`${ward.name}
(${ward.area})

Water supply:
${ward.waterSupply}`;

break;

}

}



/* GARBAGE */

if(!response){

for(let ward of NagarDB.wards){

if(

text.includes("garbage") ||
text.includes("कचरा")

){

response=

`${ward.name}

Garbage collection:
${ward.garbage}`;

break;

}

}

}



/* OFFICERS */

if(!response){

for(let officer of NagarDB.officers){

if(

text.includes(
officer.role
.toLowerCase()
)

||

text.includes(
officer.name
.toLowerCase()
)

){

response=

`${officer.role}

${officer.name}

Phone:
${officer.phone}`;

break;

}

}

}



/* WORKS */

if(!response){

for(let work of NagarDB.works){

if(

text.includes("road")

||

text.includes("work")

||

text.includes(
work.title
.toLowerCase()
)

){

response=

`${work.title}

Ward:
${work.ward}

Progress:
${work.progress}

Contractor:
${work.contractor}`;

break;

}

}

}



/* HOSPITAL */

if(!response){

for(let hospital of NagarDB.hospitals){

if(

text.includes("hospital")

||

text.includes("health")

){

response=

`${hospital.name}

Location:
${hospital.location}

Phone:
${hospital.phone}`;

break;

}

}

}



/* SCHEMES */

if(!response){

for(let scheme of NagarDB.schemes){

if(

text.includes("scheme")

||

text.includes("yojana")

){

response=

`${scheme.name}

${scheme.description}`;

break;

}

}

}



/* CONTACTS */

if(!response){

for(let department of NagarDB.departments){

if(

text.includes(
department.name
.toLowerCase()
)

){

response=

`${department.name}

Phone:
${department.phone}`;

break;

}

}

}



/* DEFAULT */

if(!response){

response=

"मुझे यह जानकारी नहीं मिली। आप पानी, सड़क, शिकायत, अस्पताल, योजना, EO, JE, कचरा आदि पूछ सकते हैं।";

}



setTimeout(()=>{

addMessage(
response,
"bot"
);

speak(
response
);

},500);

}

function speak(text){

window.speechSynthesis.cancel();

let speech = new SpeechSynthesisUtterance();

speech.text = text;

speech.lang = "hi-IN";

speech.volume = 1;

speech.rate = 1;

speech.pitch = 1;



let voices = window.speechSynthesis.getVoices();

let hindiVoice = voices.find(

voice => voice.lang.includes("hi")

);

if(hindiVoice){

speech.voice = hindiVoice;

}



window.speechSynthesis.speak(speech);

}