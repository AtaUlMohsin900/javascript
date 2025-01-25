/* Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article,
 we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.*/

 const myObject = {
  city: "Islamabad",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
