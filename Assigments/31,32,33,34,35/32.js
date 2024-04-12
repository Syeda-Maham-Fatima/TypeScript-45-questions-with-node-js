//Question no 32;
var currentUsers = ["ali", "Hamza", "Hammad", "Hani", "Alina"];
var newUsers = ["Habiba", "sumeera", "Ali", "Hani", "Arsal"];
//loop through newUsers it check for user name availablity
newUsers.forEach(function (newUser1) {
    //making a condition to check arrary that users name exist in new users;
    var condition = (currentUsers.some(function (currentUser1) { return currentUser1.toLowerCase() === newUser1.toLowerCase(); }));
    //print msgs using if else;
    if (condition) {
        console.log("sorry ".concat(newUser1, " is already taken"));
    }
    else {
        console.log("this user name is available");
    }
});
