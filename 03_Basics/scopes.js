let name1 = "khalid"
if(true){
    let name1 = "Javed"
    const name2 = "Hashim"
    // var name3 = "umer";
    // console.log("block_scope:",name1)
    
}
// console.log("global_scope:",name1);
// console.log(name2);
// console.log(name3);


// Nested Scope

// function first(){
//     const parent = "khalid"
//     console.log(parent)
//     function second(){
//         const child = "uzair"
//         console.log(child);
        
//     }
//     // second()
// }
//     first()


if(true){
    const firstname = "Ataul"
    if(firstname === "Ataul"){
        const secondname = " Mohsin"
        // console.log(firstname + secondname);
        
    }
    // console.log(secondname);
    // console.log(firstname + secondname);
    
    
}
//    console.log(firstname);

// hoisting
// console.log(addNumber(5));
   function addNumber(num){
      return num + 1
   }
//    addNumber(5)
// console.log(addNumber(5));

  
// console.log(addnum(5));
   const addnum = function(value){
    return value + 2

   }
   console.log(addnum(5));
   
