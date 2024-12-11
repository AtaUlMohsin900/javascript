const arrowSum = (a, b) =>{

console.log(a + b);

}
arrowSum(4, 5)


const client = {
    clientName: "khlaid",
    clientId: "784",
    message4client: function(){
        // console.log(`${this.clientName}, You are successfully join our team`);
        
    }
}

// client.message4client()
// client.clientName ="Mohsin"
// client.message4client()
// console.log(this)

// function newFun(){
//    console.log(this);
    
// }
// newFun()


// explicit return
let addnum1 = (num1, num2) => {
    return num1+num2
    
}
      // console.log(addnum1(4,4))

// implicit return
let addnum2 = (num1, num2) => num1+num2
     // console.log(addnum2(4,5))
let addnum3 = (num1, num2) => (num1+num2)

    // console.log(addnum3(4,6))


// Object return using arrow function

let addnum4 = (num1, num2) => ({username:"Mohsin"})

    //  console.log(addnum4(4,6))


