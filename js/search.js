function searchDatabase(query){

query=

query.toLowerCase();



for(

let work of
NagarDB.works

){

if(

query.includes(
work.title
.toLowerCase()
)

){

return

work.title+

" progress: "+

work.progress;

}

}



for(

let officer of
NagarDB.officers

){

if(

query.includes(

officer.role
.toLowerCase()

)

){

return

officer.name;

}

}



return null;

}