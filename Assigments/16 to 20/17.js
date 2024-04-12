//Question no 17;
var guest = ["Anum", "Umair", "Fatima"];
var cannotAttend = "Umair";
var new_guest = "Noor";
guest[guest.indexOf(cannotAttend)] = new_guest;
//to add in the bigging arrary we use unshift method;
guest.unshift("Bisma");
//console.log(guest);
var middle_guest = "Nimra";
var middleIndex = guest.length / 2;
// splice method to add or remove anything from array.
guest.splice(middleIndex, 0, middle_guest);
//console.log(guest);
//push method is use to add anything in the end of the array;
guest.push("Rimsha");
console.log(guest);
console.log("We can invite only two people for dinner");
while (guest.length > 2) {
    var remove_guest = guest.pop();
    console.log("sorry ".concat(remove_guest, " we can't invite to dinner"));
}
guest.map(function (item) { return console.log("\nHello dear ".concat(item, " you are still invited for dinner")); });
guest.pop();
guest.pop();
console.log(guest);
