// Loops are used to execute a peice of code again and again.

// syntax of for loop it has Three statements 
// 1. initialize statement
// 2. running length of loop is second statement
// 3. updatation statement

// for(let i = 0; i<=10; i++){
//     console.log(i);

    
// }
// console.log("Loop Ended");

// let sum = 0;
// for(let i = 0; i<=10; i++){
//     sum = sum + i;

    
// }
// console.log("Total:", sum);
// console.log("Loop End");

// create a Table using for loop

// for(let i = 1; i<=10; i++){
//     console.log(`2 x ${i} = ${i*2}`);

    
// }
// console.log("Table Complete");

// Do'nt use any infinite loop

// While loop in JavaScript

let username = 0;
while (username <= 10){
    // console.log("khalid");
    username++
    
}

// create a Table using while loop
// let i = 1;
// while (i <= 10){
    // console.log(`2 x ${i} = ${i*2}`);
    // i++
    
// }

// Do While Loop

// let i = 20;

//  do {
//      console.log("khalid");
//      i++;
    
//  }while(i<=10)
// Table with do while loop
// let i = 1;

// for Of Loop remember that it use only Strings and Arrays not for Object

// let userName = "AtaulMohsin"
// let length = 1;
// for(let i of userName){
//     console.log(`${length} = ${i}`)
//     length++

// }

// for in loop           (it works with Object) it return only keys
let user1 ={
    name: "Yasir",
    age:  36,
    isLogedIn: true

}
for (let i in user1){
    console.log(i);
    
}