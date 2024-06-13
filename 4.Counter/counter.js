counterDisplay = document.querySelector(".counter-display");
counterAdd = document.querySelector(".counterAdd");
counterSub = document.querySelector(".counterSub");

let total = 0;
const limit = 20;

const reloadCounter = ()=>{
    if(total>20) total=limit;
    if(total<0) total=0;

    counterDisplay.textContent=total;
    document.body.style.setProperty('background', `rgb(15, ${(total/limit) * 255}, 88)`);
}

counterAdd.addEventListener("click", ()=>{
    total+=1;
    reloadCounter();
});

counterSub.addEventListener("click", ()=>{
    total-=1;
    reloadCounter();
});

reloadCounter();