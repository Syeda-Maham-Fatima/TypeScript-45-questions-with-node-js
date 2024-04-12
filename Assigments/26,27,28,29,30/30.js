//Question no 30;
//making array;
var userName = ["Maham", "Umair", "Salma", "Admin", "Ali"];
//using forEach method;
userName.forEach(function (oneUser) {
    if (oneUser == "Admin") {
        console.log("hello ".concat(oneUser, ",would you like to see status report?"));
    }
    else
        (console.log("hello ".concat(oneUser, ",thank you for logging in again.")));
});
