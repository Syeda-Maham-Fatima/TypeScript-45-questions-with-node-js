//Question no 43;
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
;
//make function to print the graet with array;
function make_graet(magician) {
    //using map method;
    return magician.map(function (name) { return "The great ".concat(name); });
}
var magician_name = ["Noor", "sara", "Samad"];
//let graet_magician= make_graet(magician_name);
//show_magician(graet_magician);
//making a copy of original array through slice() method;
var copy_magician_name = magician_name.slice();
// modify the copy array to include "the great" with each name
// make variable of make_great function;
var copy_great_maguician = make_graet(copy_magician_name);
//show both arrary ... original & copy;
//original;
show_magician(magician_name);
//copied;
show_magician(copy_great_maguician);
