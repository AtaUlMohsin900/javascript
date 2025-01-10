const myNumbers = [1, 2, 3];
// const numsTotal = myNumbers.reduce(function(accumalater, currentVal){
    // console.log(`accumalater value: ${accumalater} and current value: ${currentVal}`);
    
    // return accumalater + currentVal

// },0)
// console.log(numsTotal);

// Example with arrow funciton
const numsTotal = myNumbers.reduce((accumalater, currentVal)=>{
    console.log(`Accumalater value is:${accumalater} and Current value is:${currentVal}`);
    
    return accumalater + currentVal

},0)
console.log(numsTotal);

// Example
const books = [
    {
        bookName: "Javascript",
        price: 1256
    },
    {
        bookName: "Python",
        price: 1800
    },
    {
        bookName: "Java",
        price: 1300
    },
    {
        bookName: "Rust",
        price: 1000
    },
    
]
const newbooks =books.reduce((accumalater,item){
    return accumalater + item.price

},0)
console.log(newbooks);
