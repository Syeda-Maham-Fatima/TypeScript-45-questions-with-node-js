//Question no 15;
var guest = ["Anum", "Umair", "Fatima"];
var cannotAttend = "Umair";
console.log("".concat(cannotAttend), "can not make at dinner");
var new_guest = "Noor";
guest[guest.indexOf(cannotAttend)] = new_guest;
console.log(guest);
guest.map(function (items) { return console.log("hello ".concat(items, " i would like to invite you at dinner tonight")); });
