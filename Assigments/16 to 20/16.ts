//Question No 16;

let guest:string[]= ["Anum","Umair","Fatima"];

let cannotAttend:string= "Umair"
let new_guest:string= "Noor";
guest[guest.indexOf(cannotAttend)]=new_guest;
console.log("Salam to all , we have found a bigger dinner table");
//to add in the bigging arrary we use unshift method;
guest.unshift("Bisma");
console.log(guest);

let middle_guest:string="Nimra";
let middleIndex=guest.length/2;
// splice method to add or remove anything from array.
guest.splice(middleIndex,0, middle_guest);
console.log(guest);

//push method is use to add anything in the end of the array;
guest.push("Rimsha");
console.log(guest);

guest.map((item)=>console.log(`\ndear ${item} we are inviting you at dinner tonight`));
