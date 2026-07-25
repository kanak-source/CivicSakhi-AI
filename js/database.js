let NagarDB={};

fetch("data/nagarsathiDB.json")

.then(response=>response.json())

.then(data=>{

NagarDB=data;

console.log("Database loaded");

});