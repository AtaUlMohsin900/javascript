// Singleton
// object.constructor
// const oldUser = new Object();
const oldUser = {}
oldUser.id = "123xyz"
oldUser.name = "khalid"
oldUser.isLogedIn = false
// console.log(oldUser.name);

// const newUser = new Object()
// newUser.id =  "khalid123"
// newUser.name = "khlalid"
// newUser.isLogedIn = true
// // console.log(newUser);
// const regularUser = {
//     userOneName: {
//         firstName: "ataul moshin",
//         lastName: "khalid",
//         email: "abc@gamil.com",
//     otherInfo : {
//         adress:"Islamabad",
//         Ocupassion: "Bank Empolyee",
//         Qualification:"Bachlor in IT",
//         }
//     },
//     userTwoName: {
//         firstName: "Muhammad",
//         lastName: "uzair",
//         email: "asdf@gamil.com",
//     otherInfo : {
//         adress:"Islamabad",
//         Ocupassion: "Developer in IBM",
//         Qualification:"Bachlor in Computer Science",
//         }
//     }
// }
// console.log(regularUser.userOneName.otherInfo.Qualification);

// combine objects

const obj1 = {1:"a",2:"b",3:"c",4:"d"}
const obj2 = {5:"e",6:"f",7:"g",8:"h"}
const obj3 = {9:"i",10:"j",11:"k",12:"l"}

// const obj4 = Object.assign({},obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// Array of Objects

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "abc@gmail.com"
    },
    {
        id: 3,
        email: "abc@gmail.com"
    },
]
// users[3].email

// console.log(oldUser);
 console.log(Object.keys(oldUser)); //Most important
// console.log(Object.values(oldUser));
// console.log(Object.entries(oldUser));

console.log(oldUser.hasOwnProperty("name"));





