//Question no 24;
var apple = "apple";
//test for equality & unequality with string;
//Equality;
console.log("is apple is equal to apple?");
console.log(apple == "apple");
//Unequality;
console.log("\nis apple is not equal to apple");
console.log(apple != "apple");
//test for using the lower case function;
var uppercaseApple = "APPLE";
console.log("is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("is APPLE is not eqaual to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical test involving equality and unequality,<&>,>&==,<& ==.
var two = 2;
var twenty = 20;
//equal to;
console.log("is 2 is equal to 20?");
console.log(two == twenty);
//unequal to;
console.log("is 2 not equal to twenty?");
console.log(2 != twenty);
//Greater then;
console.log("\n is ten is graeter then zero?");
console.log(10 > 0);
//less then;
console.log("is twenty less then 2?");
console.log(twenty < 2);
//greater then or equal to;
console.log("is twenty graeter then or eqaul to 2?");
console.log(twenty >= 2);
//less the or equal to;
console.log("\nis twenty less then or eqaul to 2?");
console.log(twenty <= 2);
//testes using "and" & "or" operators;
//using and;
console.log("\ntwenty is not equal to 2  And twenty is greater then 2");
console.log(twenty != 2 && twenty > 2);
console.log("\ntwenty is not equal to 2  And twenty is greater then 2");
console.log(twenty != 2 && twenty > 30);
//using or (||);
console.log("\n twenty > 50 OR twenty is equal to 20");
console.log(twenty > 50 || twenty == 20);
console.log("\n twenty > 50 OR twenty is equal to 20");
console.log(twenty > 50 || twenty == 20);
console.log("\n twenty > 50 OR twenty is not equal to 20");
console.log(twenty > 50 || twenty != 20);
//test whether an item is inculde in arrary;
//include;
var days = ["monday", " tuesday", "thursday"];
console.log("is monday include in my days array");
console.log(days.includes("monday"));
// to run .includes confilge file (tsc --init) is have to make;
//not include;
console.log("is monday not include in my days array");
console.log(!days.includes("monday"));
