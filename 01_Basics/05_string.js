const userName = "khalid"
const userAge = 46;
const gameName = new String('DangerOne')

// console.log(`user name is ${userName } and his age is ${userAge}.and game name is ${gameName}`);

console.log(gameName.toLowerCase());
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("g"));

const newGame = gameName.substring(0, 3);
console.log(newGame);
const secondGame = gameName.slice(-8, 3)
console.log(secondGame);

const thirdGame = "  khalid  "
 console.log(thirdGame);
 console.log(thirdGame.trim());

 const url = "https://ataulmohsin.vercel.app%20.com"
 console.log(url.replace("%20", "-"));
 console.log(url.includes("ataulmohsin"));

 console.log(gameName.split('-'));
 
 
 
 
 





 