"use strict";
//Question no 37;
//making a function;
function make_shirt(size = "large", print_message = "i love typescript") {
    console.log(`creating a ${size} shirt with the ${print_message} print on shirt`);
}
//calling a funcrion with by default values;
make_shirt();
//calling a function noe with medium size with by default msg;
make_shirt("medium");
//calling a function now with small size and print diff msg;
make_shirt("small", "i love javascript");
