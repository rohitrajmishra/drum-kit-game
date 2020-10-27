// console.log('Connected..');

function makeSound(buttonText){
  switch (buttonText) {
    case "w":
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log("Something went wrong... " + buttonText);
  }
}

// handleClick
function handleClick() {
  buttonText = this.textContent;
  console.log(this.textContent);

  makeSound(buttonText);
  buttonAnimation(buttonText);
}

all_buttons = document.querySelectorAll('.drum');

all_buttons.forEach(item => {
  item.addEventListener('click', handleClick);
});

// handleKeyPress
function handleKeyPress(e){
  keyText = e.key;
  console.log("Pressed --> ", keyText);

  makeSound(keyText);
  buttonAnimation(keyText);
}


// Keypress events
document.addEventListener('keydown', handleKeyPress)

// buttonAnimation
function buttonAnimation(currentKey){
  console.log("Inside buttonAnimation -> ", currentKey);

  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
