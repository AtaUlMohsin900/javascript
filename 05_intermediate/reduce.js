const myNumbers = [1, 2, 3];
const numsTotal = myNumbers.reduce(function(accumalater, currentVal){
    console.log(`accumalater value: ${accumalater} and current value: ${currentVal}`);
    
    return accumalater + currentVal

},0)
console.log(numsTotal);
