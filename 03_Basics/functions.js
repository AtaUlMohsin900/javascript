

function alphabits(){
console.log("A")
console.log("B")
console.log("C")
console.log("D")
console.log("E")
console.log("F")

}

// alphabits()

function twoValue(value1, value2){
    console.log(value1+value2);
    
}
// twoValue(8,null)

function addTwoStrings(string1, string2){
    console.log(string1+string2);
    
}
// addTwoStrings("Ataul", "Mohsin")

function twoValueAdd(val1, val2){
//   let result = val1 + val2;
//   return result
return val1+val2
}
const result = twoValueAdd(5,6);
// console.log("Result is:",result);

function isPresent(attence){
    // if(attence === undefined){
       if(!attence){
        console.log("Please enter the student Name");
        return
    }
    return `Today ${attence} is present.`
}

// console.log(isPresent("Mohsin"));
console.log(isPresent());

