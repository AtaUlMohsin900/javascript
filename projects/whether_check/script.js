const button = document.getElementById('search_button');
const input = document.getElementById('city-input');

button.addEventListener('click', ()=> {
   alert(input.value);
})