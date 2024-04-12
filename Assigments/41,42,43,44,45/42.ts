// Question no 42;
function show_magician(magician:string[]){
    magician.forEach(name => console.log(name)
        
   ) };
   //make function to print the graet with array;
   function make_graet(magician:string[]){
    //using map method;
   return magician.map(name=>`The great ${name}`);
   }

   let magician_name=["Noor","sara","Samad"]
   
let graet_magician= make_graet(magician_name);
show_magician(graet_magician);

