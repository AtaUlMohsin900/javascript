// Javascript Execution Context
// code{} ->   Global Execution Context (Global Enviroment)   placed in "this" and in browser value should be in window object.
// code+{} ->  Function Exectution Context
// code+{} ->  Eval Exectution Context
//  code+{} -> code in two phases
// 1- Memory creation phase
// 2- Execution phase


// Example
// Momory phase
let num1 = 5;
let num2 = 7;
// num1 and num2  in Memory execution and its value is Undefined
function addNum(num1,num2){  // Defination
    let answer = num1+num2;
    return answer
}
let result1 = addNum(num1,num2); // undefined

let result2 = addNum(10,7); // undefined

// 1st cycle (Memory phase) completed

// Execution phase
let num3 = 5;
let num4 = 7;
// num3 and num4  in Execution and its values are 5, 7 
function addNum(num1,num2){  // Defination
    let answer = num1+num2;
    return answer
}
let result3 = addNum(num1,num2); // undefined

let result4 = addNum(10,7); // undefined

// 2st cycle (Execution phase) completed
