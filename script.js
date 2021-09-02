let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus")
let task = document.querySelector("#task")
let sign;
let correctAnswer;
let ok = document.querySelector("#ok")
let userInput =document.querySelector("input")
let multiplication = document.querySelector("#multiplication")
let score,time,timer;
let timeTitle = document.querySelector("#timeTitle")
let scoreTitle = document.querySelector("#scoreTitle")
let highScoreTitle = document.querySelector("#highScoreTitle")
let highScore = 0
let minimum,maximum;
let division = document.querySelector("#division")

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function setTimer(){
    time=30;
    score=0
    scoreTitle.innerHTML = "счёт: "+score
    clearInterval(timer)
    timer=setInterval(function(){
        time = time-1
        // console.log(time);
        timeTitle.innerHTML = "время: "+time
        if(time==0){
            clearInterval(timer)
            // console.log(score>highScoreTitle,score,highScoreTitle)
            if(score>highScore){
                highScore=score
                highScoreTitle.innerHTML = "рекорд: "+highScore
            }
        }
    },1000)
}
function getExample(){
    let firstNumber = getRandom(minimum,maximum)
    let secondNumber = getRandom(minimum,maximum)
    if(firstNumber%secondNumber>0){
        getExample()
        console.log(firstNumber%secondNumber);
    }
    userInput.select()
    let ex = firstNumber+ sign +secondNumber
    correctAnswer=eval(ex)
    task.innerHTML = "пример: "+ex
}

plus.onclick=function(event){
    event.preventDefault();
    sign="+"
    minimum=0
    maximum=200
    getExample()
    setTimer()
    // for (let i=0; i<1000000;i++ ){
        //     let x = Math.random()+1
        //     if(x<1.001000){
            //         console.log(x);
            //     break
            //     }
            // }
        }
        minus.onclick=function(event){
            event.preventDefault();
            sign="-"
            minimum=100
            maximum=200
            getExample()
            setTimer()
        }
        ok.onclick=function(event){
            event.preventDefault()
            if(userInput.value==correctAnswer){
                console.log("lol");
                score = score+1
                scoreTitle.innerHTML = "счёт:"+score
            }
            getExample()
        }
        multiplication.onclick=function(event){
            event.preventDefault();
            sign="*"
            minimum=1
            maximum=20
            getExample()
            setTimer()
        }
        division.onclick=function(event){
            event.preventDefault();
            sign="/"
            minimum=1
            maximum=100
            getExample()
            setTimer()
        }