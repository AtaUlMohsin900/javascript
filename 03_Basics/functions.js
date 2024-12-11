

function alphabits(){
console.log("A")
console.log("B")
console.log("C")
console.log("D")
console.log("E")
console.log("F")
console.log("G")


}
function addNumbers(){
    let sum =0;
    for(let i = 0; i < arguments.length; i++){
        sum = sum + arguments[i]
        
    }
    return sum
}
console.log(addNumbers(125,458,68));

// Parameter and Arguments
function myfunction(msg){  //parameter input
    console.log(msg)
}
myfunction("Awsome JavaScript Course") // function calling and passing the arguments

// Multiple parameters input

function myfunction1(msg1, newone){  //two parameters input
    console.log(msg1+ newone)
}
myfunction1("Awsome JavaScript Course"," Join US") // function calling and passing the arguments



// alphabits()

function twoValue(value1, value2){
    // console.log(value1+value2);
    
}
// twoValue(8,null)

function addTwoStrings(string1, string2){
    // console.log(string1+string2);
    
}
addTwoStrings(4,"b")
// console.log(typeof(addTwoStrings(4)));

//Value Return in Functions
function addNums(x, y){
    sum = x + y;
    return  sum;       // retun keyword only returns One Value from a function.
} 
console.log(addNums(2,3)); //or
let value = addNums(4,5);
console.log(value);




// addTwoStrings("Ataul", "Mohsin")

function twoValueAdd(val1, val2){
//   let result = val1 + val2;
//   return result
return val1+val2
}
const result = twoValueAdd(5,6);
// console.log("Result is:",result);

function isPresent(attence = "student"){
    // if(attence === undefined){
       if(!attence){
        // console.log("Please enter the student Name");
        return
    }
    return `Today ${attence} is present.`
}

// console.log(isPresent("Mohsin"));
// console.log(isPresent("khalid"));

function countCartPrice(price1, price2, ...price3){
    return price3

}

// console.log(countCartPrice(400, 600, 800, 1000));

// Functions with Objects

const product ={
    productName: "T-shirt",
    price:"850"

}

function productObject(anyObject){
    // console.log(`product Name is: ${anyObject.productName} and product price is: ${anyObject.price} Rs.`);
    

}
// productObject(product)

productObject({
    productName:"Jacket",
    price: 1580
})

// Fuctions with Arrays

const priceArray =[1800, 800, 700]

function valArray(newVal){
    return newVal[2]

}
// console.log(valArray(priceArray));
// console.log(valArray([400,500,600,700]));

