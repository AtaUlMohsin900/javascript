/* A closure is a function paired with its surrounding context or lexical environment. 
  This allows the function to access variables from its outer scope even after that scope has exited.
  In JavaScript, closures are automatically formed whenever a function is created, 
 capturing its surrounding state at the time of creation.*/

// function lexical(){
//     const name = "khalid"
//     function newFun(){
//         console.log(name);

//     }
//     return newFun;
// }
// const surrounding = lexical();
//   surrounding();

const courseName = document.getElementById("nam");
const btn = document.getElementById("mybtn");
function increaseTextSize(size) {
  function changeSize() {
    courseName.style.fontSize = `${size}px`;
  }
  return changeSize;
}

const size12 = increaseTextSize(12);
const size20 = increaseTextSize(20);
const size30 = increaseTextSize(30);
const size32 = increaseTextSize(32);
const size42 = increaseTextSize(42);


btn.addEventListener('click', () => size42)
