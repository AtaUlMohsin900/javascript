// A function that takes a function as an argument is called High Oder Function
function add(a, b, callback){
    let answer = a+b;
    callback(answer)
}

console.log(add(2,4, function(value){
    console.log(value);
    
}));
