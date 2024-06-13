let hoursInput = document.getElementById("input-hours").value;
let minutesInput = document.getElementById("input-minutes").value;
let secondsInput = document.getElementById("input-seconds").value;

let secondsOutput = document.querySelector(".output-seconds");
let minutesOutput = document.querySelector(".output-minutes");
let hoursOutput = document.querySelector(".output-hours");

let seconds = parseInt(secondsInput);
let minutes = parseInt(minutesInput);
let hours = parseInt(hoursInput);

const counterDown = ()=>{
    if(seconds > 0){
        secondsOutput.textContent=seconds-=1;
    }else{
        if(minutes > 0){
            minutesOutput.textContent=minutes-=1;
            secondsOutput.textContent=seconds=59;
        }else{
            if(hours > 0 ){
                hoursOutput.textContent=hours-=1;
                 minutesOutput.textContent=minutes=59;
                 secondsOutput.textContent=seconds=59;
            }    
        }
        if(seconds==0 && minutes==0 && hours==0) clearInterval(timer);
    }
    console.log(seconds, minutes, hours)    
}
let timer= setInterval(counterDown, 500);
// let timer;

startButton = document.querySelector(".timer-button")
.addEventListener("click", ()=> {
    clearInterval(timer);

    hoursInput = document.getElementById("input-hours").value;
     minutesInput = document.getElementById("input-minutes").value;
     secondsInput = document.getElementById("input-seconds").value;    
     seconds = parseInt(secondsInput);
     minutes = parseInt(minutesInput);
     hours = parseInt(hoursInput);

    secondsOutput.textContent=parseInt(secondsInput);
    minutesOutput.textContent=parseInt(minutesInput);
    hoursOutput.textContent=parseInt(hoursInput);   
 
    timer= setInterval(counterDown, 500)
});