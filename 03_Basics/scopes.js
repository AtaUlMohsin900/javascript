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

function first(){
    const parent = "khalid"
    console.log(parent)
    function second(){
        const child = "uzair"
        console.log(child);
        
    }
    first()
}

// second()



// if(true){
//     const username = "khalid"
//     if(username === "khalid"){
//         const newuser = " Malik"
//         console.log(username+ newuser);
        
//     }
//     // console.log(newuser)
// }

// console.log(newuser);