// const books = ["physics","Bio","English","Math"]
const courseBooks = ["Javascript","Python", [".Net", "Roby",["CSS","HTML"]] ]

// books.push(courseBooks)

// console.log(books[4][2]);
// const allBooks = books.concat(courseBooks)
// console.log(allBooks);
// const  allNewBooks = [...books, ...courseBooks]
// console.log(allNewBooks);

const moreCourses = courseBooks.flat(Infinity)
console.log(moreCourses);
console.log(Array.isArray("khalid"));
console.log(Array.from("khalid"));
console.log(Array.from({
    name: "khalid",
    age:46,
    address:"islamabad" 
}));
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


