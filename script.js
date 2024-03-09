let hitrandomNum = 0;
let score = 0;

function makeBubbles(){
    let bubbles ="";
    for(let i = 1;i <= 119; i++){
        let rn = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${rn}</div>`;
    }
    document.getElementById("pbottom").innerHTML = bubbles;
}

function getNewHit(){
    hitrandomNum =  Math.floor(Math.random() * 10);
    document.getElementById("hit-value").textContent = hitrandomNum;
}

function runTimer(){
    let timerVal = 60;
    let timerInterval = setInterval(()=>{
            if(timerVal > 0){
                timerVal--;
                document.getElementById("timer-value").textContent = `${timerVal}`;
            }
            else{
                clearInterval(timerInterval);
                document.getElementById("pbottom").innerHTML = `<h1 class="play-again">GAME OVER !<br>Score : ${score}<br><i id="play-button" class="ri-play-circle-fill"></i> </h1>`;
            }
        
    
        },1000);


}

function increaseScoreBy10(){
 score += 10;
 document.getElementById("score-value").textContent = score;
}


function play(){
    makeBubbles();
    getNewHit();
    runTimer()
    
    document.querySelector("#pbottom").addEventListener("click",function(e){
    const clickedNum = Number(e.target.textContent);
    if(clickedNum === hitrandomNum){
        increaseScoreBy10();
        getNewHit();
        makeBubbles();
    }
    })

    document.getElementById("pbottom").addEventListener("click",function(e){
        if(e.target.parentElement.classList.contains("play-again")){
            play();
        }
    });
}

play();


