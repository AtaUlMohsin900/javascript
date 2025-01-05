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


//Even numbers
// for(let numbers = 1; numbers <=100; numbers++){ 
//     if(numbers %2 === 0){
//         console.log(numbers);
        
//     }
// }

// Odd numbers
// for(let numbers = 1; numbers <=100; numbers++){ 
//     if(numbers %2 !== 0){
//         console.log(numbers);
        
//     }
// }


    
// }
// console.log("Table Complete");

// Do'nt use any infinite loop

//************** */ While loop in JavaScript ***************

// let username = 0;
// while (username <= 10){
//     // console.log("khalid");
//     username++
    
// }

// create a Table using while loop
// let i = 1;
// while (i <= 10){
    // console.log(`2 x ${i} = ${i*2}`);
    // i++
    
// }
let  num = 0;
while (num <= 100){
    // console.log(`value is :${num}`)
    num = num+1
}
let studentName = ["Amir","Fawaod","yasir","Anjum","Nasir","Akmal"]
let newArr = 0;
while(newArr < studentName.length){
    // console.log(`Name of student is: ${studentName[newArr]}`);
    newArr++
    

}


// ****************** Do While Loop *******************
// Example 1
// let i = 20;

//  do {
//      console.log("khalid");
//      i++;
    
//  }while(i<=10)
// Table with do while loop
// let i = 1;
// Example 2

let score = 11;
do{
    // console.log(`score is ${score}`);
    score++

}while(
    score<=10
)


//***************FOR OF LOOP************** remember that it use only Strings and Arrays not for Object

// let userName = "AtaulMohsin"
// let length = 1;
// for(let i of userName){
//     console.log(`${length} = ${i}`)
//     length++

// }

// *************** for in loop ************** (it works with Object) it return only keys
// let user1 ={
//     name: "Yasir",
//     age:  36,
//     isLogedIn: true

// }
//  for (let i in user1){
//     console.log(user1[i]);
    
// }
// let requireInput = 25;
// let userInput = prompt("Enter your Answer: ");
// while(userInput != requireInput){
//  userInput = prompt("You Entered wrong answer try again ");


//  }
// alert("Greate you Entered right answer")

// ***************** MAP ********************

const map = new Map()
map.set("JS","Java Script")
map.set("PY","Python")
map.set("HTML","Hyper Text Markup Language")
map.set("CSS","Cascading Style Sheet")
// map.set("JS","abc")
// console.log(map);

for (const [key,value] of map){
    // console.log(`${key} means: ${value}`);
    
}

// ***************** FOR IN LOOP *****************

// const books = {
//     first: "DevOps",
//     second: "DSA",
//     third: "Python"
// }

// for (key in books){
//     console.log(`${key} course is: ${books[key]}`);
    
// }

// // For Each Loop

// const language = ["javascript","Python","Rust","Java","Rubi"]

// const value = language.forEach((item)=>{
//     console.log(item);
    
// })
// console.log(value);

const nums = [1,2,3,4,5,6,7,8,9,10]

nums.filter((item)=> item > 4)

