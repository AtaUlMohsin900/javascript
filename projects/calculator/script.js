// const input = document.getElementById('numInput')
const input = document.getElementById('numInput')
function buttonHandler(el){
    console.log(el.innerText)
    const exp = `${input.value} ${el.innerText}`
    input.value = exp

}