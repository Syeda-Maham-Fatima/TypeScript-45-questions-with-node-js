//Question no 33;
let Numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9];

//using for-loop;
    for( let OneNumber of Numbers){
    let ordinalEnding:string;
    if (OneNumber === 1){
        ordinalEnding="st"
    }
    else if(OneNumber=== 2){
        ordinalEnding="nd"
    }
    else if(OneNumber === 3){
        ordinalEnding="rd"
    }
else{
    ordinalEnding="th"
}
console.log(`${OneNumber}${ordinalEnding}`);
}