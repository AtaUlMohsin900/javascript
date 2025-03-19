const form = document.querySelector('form')
form.addEventListener('submit', function (e) {

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please write the valid height value ${height}`;
    }else if(weight  === '' || height < 0 || isNaN(weight )){
        results.innerHTML = `please write the valid weight  value ${weight }`;

    }else {
       const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //    Answer
     results.innerHTML = `<span>${bmi}</span>`
    }

<<<<<<< HEAD
    if (weight === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please write the valid height value ${weight}`;


    }

=======
    // results.innerHTML =  `${height}`;
    
>>>>>>> d746ef08af08307d0cf579e37dfa258c2d859a9c

})