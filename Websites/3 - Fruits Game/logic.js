var playing = false;
var lives = 3;
var fruit_width = 30;
var fruit_types = 3;
var score=0;


var fruits = ['Apple','Orange','Pineapple'];

$(function(){
   $("#startreset").click(function(){
       console.log("pressed");
       if(playing==false){
           
           playing = true;
           $("#startreset").text("Reset Game");
           $("#lives").show();
           

           addHearts();   
           startAction();
        
           
          
           $('.fruit').mouseenter(function(){
               $(".fruit").stop();
               chooseFruit();
               moveFruit();
               score+=1;
               $("#scorevalue").text(score);
              console.log("cut"); 
              
           });
           
           
//           $(".fruit").hover(function(){
//               score+=1;
//               
//                console.log(score);
//               $(".fruit").css('top',-40);
//
//               moveFruit();
//
//           });
       }
       else{
           location.reload();
       }
      
   });
    
//    startAction();
});

function addHearts(){
    lives = 3;
     for(i=0;i<lives;i++){
               
               $("#lives").append('<img class="lives" src="Fruits/heart.png">')
           }
}

function removeHearts(){
        $("#lives").children().last().remove();
}

function startAction(){
    $("#fruit1").show();
    $("#fruit1").css({'top': -40});
    
    chooseFruit();
    moveFruit();
}

function chooseFruit(){
    $("#fruit1").attr('src','Fruits/'+ fruits[Math.round(Math.random()*(fruits.length-1))] +'.png'); 
}

function moveFruit(){
    
    var fruit_pos = Math.round(Math.random()*($("#question").width()-90));
    
    $(".fruit").css({
       'left': fruit_pos+25,
        'top': -40
    });
    
    $( ".fruit" ).animate({
    top: $("#question").height()+50,
  }, 1500,function(){
        lives-=1;
        
        
        
        removeHearts();
        
        if(lives<1){
//            window.alert("Game Over");


            $("#gameover").show();

            $("#gameovertext").text("Congratulations! Your score is " + score);
            
            
//            location.reload();
        }
        else{
            startAction();
        }
        
    });
    
    }