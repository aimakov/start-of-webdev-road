// if we click startreset
    // if we are playing    
        // reload page                          √
        // set score to 0                       √
    // else
        // show countdown box                   √
        // reduce time by 1                     √
// loops
        // time left?
            // yes -> continue                  √
            // no -> gameover                   √
        // change button to reset               √
        // generate new Q&A                     √

// if we click on answer box
        // if we are playing
            // correct?
                // show correct box for 1 sec   √
                // score+1                      √
                // new Q&A                      √
            // else
                // try again for 1 sec          √

var playing = false;
var gamefinished = false;
var score = 0;
var timeleft = 60;
var time = document.getElementById("timeremainingvalue");



document.getElementById("startreset").onclick = function(){
    if(playing==false)
        {
            playing = true;
            startCountdown();
            document.getElementById("startreset").innerHTML = "Reset Game";
           
            document.getElementById("timeremaining").style.visibility = "visible";
            document.getElementById("scorevalue").innerHTML = score;
            
            
            newQuestion();       
            }
            
        
    else
        {location.reload();}
}




for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing == true && gamefinished == false){
            if(this.innerHTML==trueAns){
                document.getElementById("correct").style.display = "block";
                score+=1;
                document.getElementById("scorevalue").innerHTML = score;
                setTimeout(function(){document.getElementById("correct").style.display = "none";},1000);
                newQuestion();
            }
            else{
                document.getElementById("wrong").style.display = "block";
                setTimeout(function(){document.getElementById("wrong").style.display = "none";},1000);
            }
    }
        
    }
    
}

// Function Start Countdown
    
function startCountdown()
{
    action = setInterval(function()
    {    
        timeleft-=10;
        time.innerHTML=timeleft;
        if(timeleft==0)
           {
               stopCountdown();
           }
    },1000);
}

// Function Stop Countdown
    
function stopCountdown(){
    gamefinished = true;
    clearInterval(action);
    setTimeout(function(){document.getElementById("gameover").style.display = "block";},500);
    document.getElementById("gameovertext").innerHTML = "Congratulations! <br /> You have " + score + " points!";
}

// Function Generate Questions
    
function newQuestion(){
    var a = Math.ceil(Math.random()*10);
    var b = Math.ceil(Math.random()*10);
    
    trueAns = a*b;
    
    document.getElementById("question").innerHTML = a + "x" + b;
    
    var truePos = Math.ceil(Math.random()*4);
    document.getElementById("box"+truePos).innerHTML = a*b;
    
    var wrongPos = [1,2,3,4];
    
    for(i=1;i<5;i++){
        if(i==truePos){
            wrongPos.splice(i-1,1);
        }
    }
    
    for(i=0;i<3;i++){
        var x = Math.ceil(Math.random()*10);
        var y = Math.ceil(Math.random()*10); 
        document.getElementById("box"+wrongPos[i]).innerHTML = x*y;
    }
    
    
}