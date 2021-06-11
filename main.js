name_array = [];
function show() {
    var guest_name = document.getElementById("name").value;
    name_array.push(guest_name);
    console.log(name_array);
    document.getElementById("show").innerHTML=name_array;
       
}
 
function jjnc(){
name_array.sort()
document.getElementById("showname").innerHTML=name_array;
}

function nameshow(){
var s = document.getElementById("name_type").value;
var found = 0;
var j;
for(j=0; j<name_array.length; j++){
if(s==name_array[j]){
found=found+1;
}

}
document.getElementById("search_name").innerHTML="name found "+found+"time/s";
}

