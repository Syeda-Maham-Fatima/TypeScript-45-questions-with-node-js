//Question no 31;
var userName = ["Maham", "Umair", "Salma", "Admin", "Ali"];
if (userName.length === 0) {
    console.log("we need to find users");
}
else {
    //using forEach method;
    userName.forEach(function (oneUser) {
        if (oneUser == "Admin") {
            console.log("hello ".concat(oneUser, ",would you like to see status report?"));
        }
        else
            (console.log("hello ".concat(oneUser, ",thank you for logging in again.")));
    });
}
//remove all the users name;
var usersName = [];
if (usersName.length === 0) {
    console.log("we need to find users");
}
else {
    //using forEach method;
    usersName.forEach(function (oneUser) {
        if (oneUser == "Admin") {
            console.log("hello ".concat(oneUser, ",would you like to see status report?"));
        }
        else
            (console.log("hello ".concat(oneUser, ",thank you for logging in again.")));
    });
}
