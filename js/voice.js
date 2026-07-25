const SpeechRecognition=

window.SpeechRecognition ||
window.webkitSpeechRecognition;

const recognition=
new SpeechRecognition();

recognition.lang="hi-IN";

document
.getElementById("micBtn")

.addEventListener(

"click",

()=>{

recognition.start();

}

);

recognition.onresult=(e)=>{

let text=

e.results[0][0]
.transcript;

document
.getElementById(
"userInput"
)
.value=text;

sendMessage();

};