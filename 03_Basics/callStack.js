/* Call Stack in JavaScript is a data structure that keeps track of function calls in the program. 
It follows a Last In, First Out (LIFO) principle, meaning the last function added to the stack is the 
first one to be executed. When a function is invoked, it's pushed onto the stack. Once the function completes,
 it's popped off the stack.
*/
// example

// go to chrome browser open inspect and go to source ->create one file abc.paste the following code
// js check call stack and run this code
// press enter button check out one by one.

function first(){
    console.log("first");
    second()

}
function second(){
    console.log("second");
    third()
}
function third(){
    console.log("third");
}
first()
second()
third()