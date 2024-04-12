//Question no 45;
//define a function to creat a car object with optional option...
function creat_car(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacture and model;
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //add aditional options to the car object;
    optional.forEach;
    {
        (function (option) {
            //split use to divide the value;
            var _a = option.split(":"), key = _a[0], value = _a[1];
            //trim is use to remove wild spaces;
            car[key.trim()] = value.trim();
        });
    }
    ;
    return car;
}
//call the fuction to creat a car object ;
var my_car = creat_car("toyota", "corolla", "color : black");
//print all the variable to ensure information is stored correctly in object;
console.log(my_car);
