// There are two ways to diclare Objects in Javascript
// constractor (Singleton)
// object.create

//  literels 

// 1- literels 
const newSym = Symbol("@")
const newUser ={
    name: "khlaid",
    [newSym]: "@",
    "full name": "Ataul Mohsin",
    age: 46,
    location: "Islamabad",
    email: "ataulmohsin900@gmail.com",
    isLogedIn: false,
    lastLogedInDays:["Monday", "Friday"]
}
newUser.name = "Mohsin"
// console.log(newUser.name);
// Object.freeze(newUser)
newUser.email = "abc@gmail.com"
// console.log(newUser);



// console.log(newUser.age);
// console.log(newUser["full name"]);
// console.log(newUser[newSym]);
newUser.newFun = function(){
    
        console.log("Hello world");
        
    
}
console.log(newUser.newFun())

newUser.newFunTwo = function(){
    
    console.log(`This value from ${this.location}`);
    

}
console.log(newUser.newFunTwo())