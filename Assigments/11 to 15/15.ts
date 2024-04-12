//Question no 15;

let guest:string[]= ["Anum","Umair","Fatima"];

let cannotAttend:string= "Umair"
console.log(`${cannotAttend}`,"can not make at dinner");
let new_guest:string= "Noor";
guest[guest.indexOf(cannotAttend)]=new_guest;
console.log(guest)

guest.map((items)=>console.log(`hello ${items} i would like to invite you at dinner tonight`));
