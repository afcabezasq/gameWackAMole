const body = document.body;
const grid = document.createElement("div");
grid.className ="grid"

body.appendChild(grid);


for( var i=0;i<9;i++){

    var child = document.createElement("div");
    child.className = "square";
    
    child.id = `${i}`;
    grid.appendChild(child);
}

const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId =  null;

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole');
    })
    
    let randomSquare = squares[Math.floor(Math.random()*9)];
    
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        console.log(result)
        if(square.id == hitPosition){
            result++;
            score.textContent = result
            hitPosition = null

        }
        
    })
})

function moveMole(){
    
    timerId = setInterval(randomSquare,1000);
}


moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0){
        clearInterval(countDownTimeId)
        clearInterval(timerId)
        alert('GAME OVER: your final score is :'+ result)
    }
}

let countDownTimeId = setInterval(countDown,1000)