/* A closure is a function paired with its surrounding context or lexical environment. 
  This allows the function to access variables from its outer scope even after that scope has exited.
  In JavaScript, closures are automatically formed whenever a function is created, 
 capturing its surrounding state at the time of creation.*/

function lexical(){
    const name = "khalid"
    function newFun(){
        console.log(name);
        
    }
    newFun();
}
lexical();
  