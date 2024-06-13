let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let start = false;
let level = 0;


$(document).keypress(function(){
    if(!start){
        $("#level-title").text("level " + level);
        nextSquence();
        start = true;
    }
});

function nextSquence (){
    level++;
    // $("#level-title").text("level " + level);
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    
};








nextSquence();
