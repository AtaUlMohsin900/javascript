// Santax 
// Normal function 
function sayHello(){
    console.log('Hello world!');
    
}
sayHello()

// Arrow Function

const sayBay=()=>{
    console.log('Bay Bay');
    
}
sayBay()

// add arguments
const add=(a,b)=>{
    return a+b;
}
// OR  
// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them
// const add = (a,b) => a+b; only for one line statement.

console.log( add(2,6));
// **************************************

// Arguments & Keywords
// Argument works only on Normal Functions
// we can use spread operator as argument

const addNumbers =(...arg)=>{
    console.log(arg);
    
}
addNumbers(1,2,3,4,5,6,7,8,9)

// **************************************

// Hoisting
// Hoisting is only avilible in Normal Function.
// it dos'nt work because we access before this function.

hello()
const hello =()=>{
    console.log('Hello Javascript');
    
}

// **************************************

// 'this' Keyword
const  newObj = {
    id: 1,
    newFunc(){
      console.log('ID is:+ this.id');
      
    }
}
newObj.newFunc()

// we can easy access the object property using this keyword in Normal function and it refer only inner funciton when execute.
// But when we use the this keyword in an arrow function, the output shows the global object (or undefined in strict mode) 
// because arrow functions inherit the this value from their lexical (surrounding) scope, not from how they're called.
const  arrObj = {
    id: 1,
    arrFunc: () =>{
      console.log('ID is:+ this.id');
      
    }
}
arrObj.arrFunc()