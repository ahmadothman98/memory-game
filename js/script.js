/*  1-play random tone
    2-listen
    3-  if correct go to 1
        if false stop
*/
let pattern = [];
let index = 0 ;
let level = 0;
const theColors = ["green","red","yellow","blue"];// 0:green ; 1:red ; 2:yellow ; 3:blue

// game starts on mouse click or keypress

// function startGame -> main function
function startGame(){ 
    level = 0;
    pattern = [];
    index = 0 ;
    document.removeEventListener('keypress',startGame);
    console.log("started")
        setTimeout(function(){playNextTone();},500);
        boxClick();


}
//------------------------------------End of main function //

// playNextTone plays random tone and appends to existing pattern --------------//
function playNextTone(){
    level++;
    document.getElementById("title").innerHTML = "Level " + level;
    console.log("nexttone")

    let chooseRandom = Math.floor(Math.random() * 4); // random nb from 0 to 3
    let color = theColors[chooseRandom];
    let sound = new Audio("../assets/sounds/"+ color +".mp3");
    sound.play();
    let playedColor = document.getElementById(color);
    playedColor.style.backgroundColor = '#011C38';
    setTimeout(function(){playedColor.style.backgroundColor= color;},200);
    //make played button gray
    pattern= pattern + chooseRandom ;// append number correspending to the color 
    console.log(pattern);
}
//------------------------------------End of playNextTone() //


function playColor(color){
    let sound = new Audio("../assets/sounds/"+ color +".mp3");
    sound.play();
    console.log("color pay");

    playedColor = document.getElementById(color);
    playedColor.className = playedColor.className + " clicked";
    setTimeout(function(){playedColor.className=playedColor.className.replace(" clicked","");},200);
    
}


function boxClick(){
    console.log("box click")

    document.getElementById("green").addEventListener('click',green);
    document.getElementById("red").addEventListener('click',red);
    document.getElementById("yellow").addEventListener('click',yellow);
    document.getElementById("blue").addEventListener('click',blue);
}
function stopListen(){
    document.getElementById("green").removeEventListener('click',green);
    document.getElementById("red").removeEventListener('click',red);
    document.getElementById("yellow").removeEventListener('click',yellow);
    document.getElementById("blue").removeEventListener('click',blue);
}
function green(){

    console.log("green")
    console.log(index);
    if (pattern[index] === '0'){
        playColor("green");
        index = index +1;
        if(index<pattern.length){
        boxClick();
        }
        else{
            console.log(pattern.length+" vs " + index);
            index = 0;
            setTimeout(function(){
            playNextTone();},600)
            boxClick();
        }
    }
    else{
        console.log("g");
        gameOver();
    }
}
function red(){
    console.log(index);
    if (pattern[index] === '1'){
        playColor("red");
        index = index +1;
        if(index<pattern.length){
            boxClick();
            }
        else{
            console.log(pattern.length+" vs " +index);
            index = 0;
            setTimeout(function(){
            playNextTone();},600)
            boxClick();
        }
    }
    else{
        console.log("r");

        gameOver();
    }
}
function yellow(){
    console.log(index);
    if (pattern[index] === '2'){
        playColor("yellow");
        index = index +1;
        if(index<pattern.length){
            
            boxClick();
            }
        else{
            console.log(pattern.length+" vs "+ index);
            index = 0;
            setTimeout(function(){
            playNextTone();},600)
            boxClick();
        }

    }
    else{
        console.log("y");

        gameOver();
    }
}
function blue(){
    console.log(index);

    if (pattern[index] === '3'){
        playColor("blue");
        index = index +1;
        if(index<pattern.length){
            
            boxClick();
            }
        else{
            console.log(pattern.length+" vs "+ index);
            index = 0;

            setTimeout(function(){
            playNextTone();},600)
            boxClick();
        }
    }
    else{
        console.log("b");

        gameOver();
    }
}
function gameOver(){
    let sound = new Audio("../assets/sounds/wrong.mp3");
    sound.play();
    document.getElementsByTagName("body")[0].style.backgroundColor="red";
    setTimeout(function(){document.getElementsByTagName("body")[0].style.backgroundColor="#011C38";},200);
    document.getElementById("title").innerHTML = "Game Over, Press Any Key to Restart";
    stopListen();
    document.addEventListener('keypress',startGame);


}

document.addEventListener('keypress',startGame);