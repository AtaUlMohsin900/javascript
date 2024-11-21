// Singleton
// object.constructor

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

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",5:"f"}
const obj3 = {6:"d",7:"e",8:"f"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)


// Array of Objects

