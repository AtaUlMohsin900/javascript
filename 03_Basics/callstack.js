// Javascript Execution Context
// code{} ->   Global Execution Context      placed in "this" and in browser value should be in window object
// code+{} ->  Function Exectution Context
// code+{} ->  Eval Exectution Context
//  code+{} -> code in two phases
// 1- Memory creation phase
// 2- Execution phase
// Example
let num1 = 5;
let num2 = 7;
function addNum(num1,num2){
    let answer = num1+num2;
    return answer
}
let result1 = addNum(num1,num2);
let result2 = addNum(10,7);

