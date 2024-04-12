// Question no 42;
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
var graet_magician = make_graet(magician_name);
show_magician(graet_magician);
