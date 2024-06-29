const score=document.getElementById("score");
const keys=document.querySelectorAll(".keys");
let n=Math.floor(Math.random()*keys.length);
const wrapper=document.querySelector(".wrapper");
const time=document.getElementById("time");
const finalScore=document.getElementById("finalScore");
//console.log(n);
let i=0;
let t=31;
let delay=10000;

keys[n].style.opacity=1;
keys[n].addEventListener("click",handler);

function handler(){
    i++;
    score.textContent=i;
    keys[n].style.opacity=0;
    keys[n].removeEventListener("click",handler)
    n=Math.floor(Math.random()*keys.length);
    keys[n].style.opacity=1;
    keys[n].addEventListener("click",handler);
}
let countDown = setInterval(() => {
    t--;
    time.textContent = t;

    if (t <= 0) {
        clearInterval(countDown);
        setTimeout(() => {
            location.reload();
        }, 1000); // Slight delay before reloading to display '0' on timer
    }
    if(t==0){
        setTimeout(()=>{
            finalScore.textContent="Your Clicks:"+i;
            keys[n].style.opacity=0;
        },100)
    }
}, 1000);