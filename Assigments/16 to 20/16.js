//Question No 16;
var guest = ["Anum", "Umair", "Fatima"];
var cannotAttend = "Umair";
var new_guest = "Noor";
guest[guest.indexOf(cannotAttend)] = new_guest;
console.log("Salam to all , we have found a bigger dinner table");
//to add in the bigging arrary we use unshift method;
guest.unshift("Bisma");
console.log(guest);
var middle_guest = "Nimra";
var middleIndex = guest.length / 2;
// splice method to add or remove anything from array.
guest.splice(middleIndex, 0, middle_guest);
console.log(guest);
//push method is use to add anything in the end of the array;
guest.push("Rimsha");
console.log(guest);
guest.map(function (item) { return console.log("\ndear ".concat(item, " we are inviting you at dinner tonight")); });
