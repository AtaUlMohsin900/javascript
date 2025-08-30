// const input = document.getElementById('numInput')
const input = document.getElementById('numInput')
const result = document.getElementById('result')
function buttonHandler(el){
    console.log(el.innerText)
    const exp = `${input.value} ${el.innerText}`
    input.value = exp
    result.value = eval.exp

}

function reset(){
    input.value = '';
    result.value = '';
}