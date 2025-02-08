const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
     
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please write the valid height value ${height}`;
    }else if(weight  === '' || height < 0 || isNaN(weight )){
        results.innerHTML = `please write the valid weight  value ${weight }`;

    }else {
        (weight / ((height*height)/10000)).toFixed(2)
    }

    // results.innerHTML =  `${height}`;
    

})