const form = document.querySelector('form')
form.addEventListener('submit', function (e) {

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "please write the valid height value "

    }

    if (weight === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "please write the valid height value "

    }


})