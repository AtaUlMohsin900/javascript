const client = {
    clientName: "khlaid",
    clientId: "784",
    message4client: function(){
        console.log(`${this.clientName}, You are successfully join our team`);
        
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

let addnum1 = (num1, num2) => {
    return num1+num2
    
}

console.log(addnum1(4,4))

let addnum2 = (num1, num2) => num1+num2
console.log(addnum2(4,5))

let addnum3 = (num1, num2) => (num1+num2)

    console.log(addnum3(4,6))

