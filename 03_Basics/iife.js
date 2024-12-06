// Immediately Invoked Function Expressions IIFE


// simple function
function newFun(){
    console.log(`Database now connected`)

}
newFun();

// iife function
(function iifeFun(){
    console.log(`Database is connected now`)

})();

// iife with arrow function
(  iifeArrow = () =>{
    console.log(`Database is connected using iife_arrow function`);
    

} )()