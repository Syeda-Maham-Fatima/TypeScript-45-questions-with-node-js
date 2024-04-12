//Question no 43;

function show_magician(magician:string[]){
    magician.forEach(name => console.log(name)
        
   ) };
   //make function to print the graet with array;
   function make_graet(magician:string[]){
    //using map method;
   return magician.map(name=>`The great ${name}`);
   }

   let magician_name=["Noor","sara","Samad"]
   
//let graet_magician= make_graet(magician_name);
//show_magician(graet_magician);

//making a copy of original array through slice() method;
let copy_magician_name=magician_name.slice(
)
// modify the copy array to include "the great" with each name
// make variable of make_great function;

let copy_great_maguician=make_graet(copy_magician_name);

//show both arrary ... original & copy;
//original;
show_magician(magician_name);
//copied;
show_magician(copy_great_maguician);


