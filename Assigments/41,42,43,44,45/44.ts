//Question no 44;
//define a function with a rest parameter that accept items arrguments representing;
function make_sandwhich(...items:string[]){
console.log("making a sandwhich with the following item; \n");
items.forEach(singleitem=>console.log(singleitem));
console.log("\nnow enjoy sandwhich");
}
//call the function 3 times with diff arrguments;
 make_sandwhich("chicken","chees","mayyo","katchup");
 make_sandwhich("egg","butter");
 make_sandwhich("bread","butter","mayo","egg","souce");