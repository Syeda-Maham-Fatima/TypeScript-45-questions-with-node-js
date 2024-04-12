//Question no 31;

let userName=["Maham","Umair","Salma","Admin","Ali"];
if(userName.length === 0){
    console.log("we need to find users");
}
else{

//using forEach method;
userName.forEach(oneUser =>{
   if(oneUser == "Admin"){
       console.log(`hello ${oneUser},would you like to see status report?`);
  }
    else(console.log(`hello ${oneUser},thank you for logging in again.`)
);
})
}

//remove all the users name;
 let usersName=[]
 if(usersName.length === 0){
    console.log("we need to find users");
}
else{

//using forEach method;
usersName.forEach(oneUser =>{
   if(oneUser == "Admin"){
       console.log(`hello ${oneUser},would you like to see status report?`);
  }
    else(console.log(`hello ${oneUser},thank you for logging in again.`)
);
})
}
