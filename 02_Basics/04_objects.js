// Singleton
// object.constructor

const newUser = new Object()
newUser.id =  "khalid123"
newUser.name = "khlalid"
newUser.isLogedIn = true
// console.log(newUser);
const regularUser = {
    userOneName: {
        firstName: "ataul moshin",
        lastName: "khalid",
        email: "abc@gamil.com",
    otherInfo : {
        adress:"Islamabad",
        Ocupassion: "Bank Empolyee",
        Qualification:"Bachlor in IT",
        }
    },
    userTwoName: {
        firstName: "Muhammad",
        lastName: "uzair",
        email: "asdf@gamil.com",
    otherInfo : {
        adress:"Islamabad",
        Ocupassion: "Developer in IBM",
        Qualification:"Bachlor in Computer Science",
        }
    }
}
console.log(regularUser.userOneName.otherInfo.Qualification);

