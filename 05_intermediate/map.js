const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((item)=> item + 10) // we can use forEach loop instead of map

// Map with channing
const newNums = myNums
                .map((item)=> item *  10)
                .map((item)=> item /  2)
                .filter((item)=>item >= 35 )

console.log(newNums);
