// A function that takes a function as an argument is called High Oder Function
function add(a, b, newfun){
    let answer = a + b;
    newfun(answer)
    return ()=> console.log(answer);
    
}
// function showAnswer(answer){
//     console.log(answer);
// }
// add(2,4,showAnswer)
// add(2,4,(val)=>console.log(val))
// add(2,4, value =>console.log(value))
// add(100, 20, (res)=>console.log(res))
let anotherFun = add(2,4,()=>{})
anotherFun()