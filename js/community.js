function createIssue(){

let text =
document.getElementById(
"issueText"
).value;

let file =
document.getElementById(
"issueImage"
).files[0];


if(text==="" || !file){

alert(
"Please enter issue and upload image"
);

return;

}


let category=
detectIssue(
file.name.toLowerCase()
);

let confidence=
Math.floor(
85+Math.random()*10
);

let reader=
new FileReader();


reader.onload=(e)=>{

let card=`

<div class="issue-card">

<img src="${e.target.result}">

<h3>${text}</h3>

<div class="ai-tag">

AI detected:
${category}
(${confidence}% confidence)

</div>

<p>

📍 Ward 3

</p>


<div class="reactions">

<div
class="react-btn"
onclick="like(this)">

👍 <span>0</span>

</div>


<div
class="react-btn"
onclick="openComment(this)">

💬 <span>0</span>

</div>


<div
class="react-btn delete-btn"
onclick="removeIssue(this)">

🗑️

</div>

</div>


<div class="comment-section">

<input
class="comment-input"
placeholder="Write comment...">

<button
onclick="addComment(this)">

Post

</button>

<div class="comment-list">

</div>

</div>

</div>

`;

document
.getElementById(
"communityFeed"
)

.innerHTML += card;



document
.getElementById(
"issueText"
)
.value="";

document
.getElementById(
"issueImage"
)
.value="";

};

reader.readAsDataURL(file);

}



function detectIssue(name){

if(

name.includes("road")
||
name.includes("pothole")

){

return "Road Damage";

}

if(

name.includes("garbage")

){

return "Sanitation Issue";

}

if(

name.includes("water")

){

return "Water Leakage";

}

if(

name.includes("light")

){

return "Street Light Issue";

}

return "Public Issue";

}



/* LIKE */

function like(btn){

let count=
btn.querySelector(
"span"
);

count.innerText=

parseInt(
count.innerText
)+1;

}



/* COMMENT OPEN */

function openComment(btn){

let card=

btn.closest(
".issue-card"
);

let section=

card.querySelector(
".comment-section"
);

if(

section.style.display==="block"

){

section.style.display="none";

}

else{

section.style.display="block";

}

}



/* ADD COMMENT */

function addComment(button){

let section=

button.parentElement;

let input=

section.querySelector(
".comment-input"
);

let list=

section.querySelector(
".comment-list"
);

let text=
input.value;


if(text==="") return;


let comment=`

<div class="single-comment">

👤 ${text}

</div>

`;

list.innerHTML+=comment;


input.value="";



let issueCard=

button.closest(
".issue-card"
);

let commentCount=

issueCard.querySelectorAll(
".react-btn span"
)[1];

commentCount.innerText=

parseInt(
commentCount.innerText
)+1;

}



/* DELETE ISSUE */

function removeIssue(btn){

let confirmDelete=

confirm(
"Remove this issue?"
);


if(confirmDelete){

btn.closest(
".issue-card"
).remove();

}

}