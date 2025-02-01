const buttons = document.querySelectorAll('.button');
const body = document.querySeclector("body")


buttons.forEach( function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        

    })
    
})
    
