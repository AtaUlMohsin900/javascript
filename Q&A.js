// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// Standard IEEE 754
if (0.1 + 0.2 === 0.3) {
    console.log(true);

} else {
    console.log(false);

}

// 2 Question find the problem (interview in Walmart)

const users = {
    personOne: {},
    Mohsin: {}
}
        let name ='constructor';
        // name comes from input text
        // if(users[name]) {
        //     console.log('BOSS');
           // let's fix it
        if(Object.hasOwn(users, name)) {

        }else{
                console.log('NOT BOSS');
                
        }

// Find how many vowels from Array

const str = "Hey Java Script is Amazing";
const vowels = ['a','e','i','o','u']
function totalVowels(data) { // it return the number of vowels
    let count = 0;                //count of v


data.toLowerCase().split('').forEach((ch)=>{
    vowels.includes(ch) && count++;
})
return count;
    
}
const totalNumOfVowels = totalVowels(str)
console.log(totalNumOfVowels);

// What is output in log when we use constructor and normal function

function userName(fname, lname){

  this.firstName = fname;
  this.lastName = lname;
}
const fullName = new userName('Sam', 'John');
const aName = userName('Sam', 'John')

console.log(fullName);
console.log(aName);

// Output->  userName { firstName: 'Ata', lastName: 'khalid' }
// output->  undefined
