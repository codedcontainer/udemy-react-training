var nameVar = "Jason";
var nameVar = 'Mike';
console.log('navVar', nameVar);

let nameLet = "Jen";
nameLet = 'Julie';
console.log("nameLet", nameLet); 

const nameConst = "Frank"; 
console.log("nameConst", nameConst); 

function getPetName(){
    let petName = 'Hal'; 
    return petName; 
}
//var is function scoped
//let is block scoped
const petName = getPetName(); 
console.log(petName);

var fullName = "Jason Utt"; 
let firstName; 
if(fullName){
    firstName = fullName.split(" ")[0];
    console.log(firstName); 
}
console.log(firstName);