'use strict';

// MOUSE CLICK

document.getElementsByClassName('')
let numberOfNodes = document.querySelectorAll('.drum').length;

for(let i = 0; i< numberOfNodes; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        
    let buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    })

}

// KEYBOARD PRESS 

document.addEventListener('keypress', function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();    
            break;
        
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();    
            break;
            
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();    
            break;

        case 'd':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'k': 
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break; 

        case 'l':
            let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default: console.log();
            break;
    }
}


function buttonAnimation(currentKey){

    var element = document.querySelector("." + currentKey);
    
    element.classList.add("pressed");
    setTimeout(() => {
      element.classList.remove("pressed");  
    }, 200);

}