//Question no 45;
 //define a function to creat a car object with optional option...
function creat_car(manufacturer,model,...optional){
    //initialize a car object with manufacture and model;
    let car={
        manufacturer:manufacturer,
        model:model,


    };
    //add aditional options to the car object;
optional.forEach
{option=>{
    //split use to divide the value;
    let [key,value]=option.split(":")
    //trim is use to remove wild spaces;
    car[key.trim()]=value.trim()
    
}};
return car;
}
//call the fuction to creat a car object ;
let my_car =creat_car("toyota","corolla","color : black");
//print all the variable to ensure information is stored correctly in object;

console.log(my_car);