function trackComplaint(){

let id=

document
.getElementById(
"complaintId"
)
.value;


if(id==""){

alert(
"Enter Complaint ID"
);

return;

}


document
.getElementById(
"resultBox"
)

.innerHTML=

`

<div class="status-card">

<h2>

Complaint ID:
${id}

</h2>

<p>

Current Status:
<b style="color:orange">

Under Review

</b>

</p>


<div class="timeline">

<div class="step">

<div class="circle">

✓

</div>

Complaint Registered

</div>



<div class="step">

<div class="circle">

2

</div>

Under Review

</div>



<div class="step">

<div class="circle">

3

</div>

Assigned

</div>



<div class="step">

<div class="circle">

4

</div>

Resolved

</div>


</div>

</div>

`;

}