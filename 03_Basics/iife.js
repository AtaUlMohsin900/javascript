// Immediately Invoked Function Expressions IIFE


// simple function
function newFun(){
    console.log(`Database now connected`)

}
newFun();

// iife function
(function iifeFun(){    //named iife
    console.log(`Database is connected now`)

})();

// iife with arrow function
(  iifeArrow = () =>{   //simple iife
    console.log(`Database is connected using iife_arrow function`);
    

} )();

// another example
(  iifeVariable = (value) =>{
    console.log(`Database is connected ${value}`);
    

} )("khalid")