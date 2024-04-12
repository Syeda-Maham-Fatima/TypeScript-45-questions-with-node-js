//Quewsrion no 45;
//define a function to print each magician name in the array;
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
;
//creating an array;
var magician_name = ["Noor", "sara", "Samad"];
//call the function to print each magician name;
show_magician(magician_name);
