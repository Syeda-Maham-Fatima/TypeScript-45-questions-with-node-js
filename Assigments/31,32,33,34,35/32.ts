//Question no 32;
let currentUsers=["ali","Hamza","Hammad","Hani","Alina"];

let newUsers=["Habiba","sumeera","Ali","Hani","Arsal"];
//loop through newUsers it check for user name availablity
newUsers.forEach(newUser1=>{
    //making a condition to check arrary that users name exist in new users;
    //some is use to compile 2 or more arrary;
    let condition =(currentUsers.some(currentUser1=> currentUser1.toLowerCase()=== newUser1.toLowerCase()
    ))
    //print msgs using if else;
    if(condition){
        console.log(`sorry ${newUser1} is already taken`);
    }
    else{
        console.log(`this user name is available`);
    }
})
