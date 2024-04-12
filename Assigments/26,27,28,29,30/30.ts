//Question no 30;

//making array;
let userName=["Maham","Umair","Salma","Admin","Ali"];

//using forEach method;
userName.forEach(oneUser =>{
    if(oneUser == "Admin"){
        console.log(`hello ${oneUser},would you like to see status report?`);
    }
    else(console.log(`hello ${oneUser},thank you for logging in again.`)
    );
})
