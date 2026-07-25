const summaries=[

[
{
icon:"fa-droplet",
text:"Water supply at 6 PM for Ward 3 and 4"
},

{
icon:"fa-road",
text:"Road repair in Ward 3 is 70% completed"
},

{
icon:"fa-truck",
text:"Garbage vehicle delayed by 20 minutes"
}

],


[
{
icon:"fa-lightbulb",
text:"Street lights maintenance in Ward 2"
},

{
icon:"fa-tree",
text:"Park development work starts tomorrow"
},

{
icon:"fa-building",
text:"Municipality office holiday on Sunday"
}

],


[
{
icon:"fa-hospital",
text:"Free health camp available today"
},

{
icon:"fa-broom",
text:"Special cleanliness drive in Main Market"
},

{
icon:"fa-water",
text:"Low water pressure in Ward 5"
}

]

];


let index=0;


function updateSummary(){

let container=

document.getElementById(
"summaryContent"
);

container.innerHTML="";


summaries[index].forEach(item=>{

container.innerHTML+=`

<div class="summary-item">

<i class="fa-solid ${item.icon}"></i>

<p>${item.text}</p>

</div>

`;

});


document.getElementById(
"summaryTime"
)

.innerText=

"Updated: " +

new Date()

.toLocaleTimeString();


index++;

if(index>=summaries.length){

index=0;

}

}



/* update every 15 sec */

setInterval(

updateSummary,

15000

);

updateSummary();