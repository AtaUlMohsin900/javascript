let newDate = new Date();
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleTimeString());
// console.log(newDate.toTimeString());
// console.log(newDate.toUTCString());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());
// console.log(typeof(newDate));
// let newCreatedDate = new Date(2010, 0, 23)
let newCreatedDate = new Date("2010-01-23")

// console.log(newCreatedDate.toLocaleString());
let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(newCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let nDate = new Date();
console.log(`we start our new course from ${nDate.getFullYear()}`);

newDate.toLocaleString('default' ,{
    weekday: "long",
    day:"numeric",
    year: "2-digit",
    timeZone:"GMT"
})

console.log(nDate);

                                                                                     






