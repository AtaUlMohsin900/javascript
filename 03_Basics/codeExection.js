/* Javascript Execution Context
The execution context refers to the environment in which code is evaluated and executed. It determines the scope and the 
   values of this during code execution. There are three main types of execution contexts:

Global Execution Context (GEC)-> This is the default context where global code (not inside any function) runs. In browsers, 
the global object is window, and in Node.js, it’s global.
code{} ->   Global Execution Context (Global Enviroment)   placed in "this" and in browser value should be in window object.

Function Execution Context (FEC)-> Created when a function is invoked. Each function call gets its own execution context,
 which includes:

A variable object (containing variables, parameters, and functions).
A scope chain.
The value of this.
code{} ->  Function Exectution Context

Eval Execution Context-> Created when code is executed within the eval() function. It is rarely used due to security and
 performance concerns.

The JavaScript engine manages execution contexts using a call stack, adding a new context for each function call and removing 
it after execution completes.

  code{} -> code in two phases
 1- Memory creation phase
 2- Execution phase
*/

// Examples

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
let result3 = addNum(num1,num2); 

let result4 = addNum(10,7); // -> New Execution Context( New variable enviroment + Execution thread) it should be deleted after execution.

// 2nd cycle (Execution phase) completed
