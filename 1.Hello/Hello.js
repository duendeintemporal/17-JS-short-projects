const spanHello = document.querySelector('h1 > span');
const helloButton = document.querySelector('.hello-button')

helloButton.onclick = function(){
    const yourName = prompt('Please enter your name: ');
    spanHello.textContent = yourName;
}

console.log(document);