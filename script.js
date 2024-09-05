var rulesbutton = document.getElementsByClassName("rulesfooter");
rulesbutton[0].addEventListener("click",showRules);

var rulescrossbutton = document.getElementsByClassName("cross");
rulescrossbutton[0].addEventListener("click",hideRules);

var nextbutton = document.getElementsByClassName("nextfooter");
nextbutton[0].addEventListener("click",loadFinalGamePage);

var winnerplayagainptag = document.getElementsByClassName("winnerplayagain");
winnerplayagainptag[0].addEventListener("click",loadGameAgain);

if(localStorage.getItem("computerWinnings")){
    computerWinnings = Number(localStorage.getItem("computerWinnings"));
    let computerscorevaluediv = document.getElementById("computerscorevalue");
    computerscorevaluediv.innerHTML = computerWinnings;
}
if(!(localStorage.getItem("computerWinnings"))){
    var computerWinnings = 0;
}

if(localStorage.getItem("userWinnings")){
    userWinnings = Number(localStorage.getItem("userWinnings"));
    let userscorevaluediv = document.getElementById("userscorevalue");
    userscorevaluediv.innerHTML = userWinnings;
}
if(!(localStorage.getItem("userWinnings"))){
    var userWinnings = 0;
}

function showRules(){
    var rulesdiv = document.getElementsByClassName("rulesmain");
    if(rulesdiv[0].style.display === "none"){
        rulesdiv[0].style.display = "block";
    }
}

function hideRules(){
    var rulesdiv = document.getElementsByClassName("rulesmain");
    if(rulesdiv[0].style.display !== "none"){
        rulesdiv[0].style.display = "none";
    }
}

function loadFinalGamePage(){
    var scorediv = document.getElementsByClassName("score");
    if(scorediv[0].style.display !== "none"){
        scorediv[0].style.display = "none";
    }
    var gamediv = document.getElementsByClassName("game");
    if(gamediv[0].style.display !== "none"){
        gamediv[0].style.display = "none";
    }
    var gameseconddiv = document.getElementsByClassName("gamesecond");
    if(gameseconddiv[0].style.display !== "none"){
        gameseconddiv[0].style.display = "none";
    }
    var nextfooterdiv = document.getElementsByClassName("nextfooter");
    if(nextfooterdiv[0].style.display !== "none"){
        nextfooterdiv[0].style.display = "none";
    }
    var secondrowmaindiv = document.getElementsByClassName("secondrowmain");
    if(secondrowmaindiv[0].style.marginBottom !== "200px"){
        secondrowmaindiv[0].style.marginBottom = "200px";
    }
    var winnernextdiv = document.getElementsByClassName("winnernext");
    if(winnernextdiv[0].style.display === "none"){
        winnernextdiv[0].style.display = "";
    }
    var rulesmaindiv = document.getElementsByClassName("rulesmain");
    if(rulesmaindiv[0].style.marginTop !== "250px"){
        rulesmaindiv[0].style.marginTop = "250px";
    }
}

function loadGameAgain(){
    var winnernextdiv = document.getElementsByClassName("winnernext");
    if(winnernextdiv[0].style.display !== "none"){
        winnernextdiv[0].style.display = "none";
    }
    var secondrowmaindiv = document.getElementsByClassName("secondrowmain");
    if(secondrowmaindiv[0].style.marginBottom === "200px"){
        secondrowmaindiv[0].style.marginBottom = "";
    }
    var scorediv = document.getElementsByClassName("score");
    if(scorediv[0].style.display === "none"){
        scorediv[0].style.display = "";
    }
    var gamediv = document.getElementsByClassName("game");
    if(gamediv[0].style.display === "none"){
        gamediv[0].style.display = "";
    }
    var rulesmaindiv = document.getElementsByClassName("rulesmain");
    if(rulesmaindiv[0].style.marginTop !== "50px"){
        rulesmaindiv[0].style.marginTop = "50px";
    }
    replayGame();
}

function playingGame(userInput){
    const values = ["rock","scissor","paper"];
    let userSelectedInput = values.indexOf(`${userInput}`);
    let computerInput = values[Math.floor(Math.random() * values.length)];
    let computerSelectedInput = values.indexOf(computerInput);
    
    var gamediv = document.getElementsByClassName("game");
    if(gamediv[0].style.display !== "none"){
        gamediv[0].style.display = "none";
    }
    var gameseconddiv = document.getElementsByClassName("gamesecond");
    if(gameseconddiv[0].style.display === "none"){
        gameseconddiv[0].style.display = "";
    }

    if(userSelectedInput === computerSelectedInput){
        if(userSelectedInput === 0 && computerSelectedInput === 0){
            var userrockgamediv = document.getElementsByClassName("userrockgame");
            if(userrockgamediv[0].style.display === "none"){
                userrockgamediv[0].style.display = "";
            }
            var computerrockgamediv = document.getElementsByClassName("computerrockgame");
            if(computerrockgamediv[0].style.display === "none"){
                computerrockgamediv[0].style.display = "";
            }
        }

        if(userSelectedInput === 1 && computerSelectedInput === 1){
            var userscissorsgamediv = document.getElementsByClassName("userscissorsgame");
            if(userscissorsgamediv[0].style.display === "none"){
                userscissorsgamediv[0].style.display = "";
            }
            var computerscissorsgamediv = document.getElementsByClassName("computerscissorsgame");
            if(computerscissorsgamediv[0].style.display === "none"){
                computerscissorsgamediv[0].style.display = "";
            }
        }

        if(userSelectedInput === 2 && computerSelectedInput === 2){
            var userpapergamediv = document.getElementsByClassName("userpapergame");
            if(userpapergamediv[0].style.display === "none"){
                userpapergamediv[0].style.display = "";
            }
            var computerpapergamediv = document.getElementsByClassName("computerpapergame");
            if(computerpapergamediv[0].style.display === "none"){
                computerpapergamediv[0].style.display = "";
            }
        }

        var tiegamediv = document.getElementsByClassName("tiegame");
        if(tiegamediv[0].style.display === "none"){
            tiegamediv[0].style.display = "";
        }
    }

    if(userSelectedInput === 0 && computerSelectedInput === 1){
        var userrockgamediv = document.getElementsByClassName("userrockgame");
        if(userrockgamediv[0].style.display === "none"){
            userrockgamediv[0].style.display = "";
        }
        if(userrockgamediv[0].style.boxShadow === ""){
            userrockgamediv[0].style.boxShadow = "0 0 0 30px #289A27,0 0 0 50px #1DA82BC9,0 0 0 65px #2E9A2563";
        }
        var computerscissorsgamediv = document.getElementsByClassName("computerscissorsgame");
        if(computerscissorsgamediv[0].style.display === "none"){
            computerscissorsgamediv[0].style.display = "";
        }
        var userwongamediv = document.getElementsByClassName("userwongame");
        if(userwongamediv[0].style.display === "none"){
            userwongamediv[0].style.display = "";
        }
        var nextfooterdiv = document.getElementsByClassName("nextfooter");
        if(nextfooterdiv[0].style.display === "none"){
            nextfooterdiv[0].style.display = "";
        }
        calculateUserWinnings();
    }
    if(userSelectedInput === 0 && computerSelectedInput === 2){
        var userrockgamediv = document.getElementsByClassName("userrockgame");
        if(userrockgamediv[0].style.display === "none"){
            userrockgamediv[0].style.display = "";
        }
        var computerpapergamediv = document.getElementsByClassName("computerpapergame");
        if(computerpapergamediv[0].style.display === "none"){
            computerpapergamediv[0].style.display = "";
        }
        if(computerpapergamediv[0].style.boxShadow === ""){
            computerpapergamediv[0].style.boxShadow = "0 0 0 30px #289A27,0 0 0 50px #1DA82BC9,0 0 0 65px #2E9A2563";
        }
        var computerwongamediv = document.getElementsByClassName("computerwongame");
        if(computerwongamediv[0].style.display === "none"){
            computerwongamediv[0].style.display = "";
        }
        calculateComputerWinnings();
    }
    
    if(userSelectedInput === 1 && computerSelectedInput === 0){
        var userscissorsgamediv = document.getElementsByClassName("userscissorsgame");
        if(userscissorsgamediv[0].style.display === "none"){
            userscissorsgamediv[0].style.display = "";
        }
        var computerrockgamediv = document.getElementsByClassName("computerrockgame");
        if(computerrockgamediv[0].style.display === "none"){
            computerrockgamediv[0].style.display = "";
        }
        if(computerrockgamediv[0].style.boxShadow === ""){
            computerrockgamediv[0].style.boxShadow = "0 0 0 30px #289A27,0 0 0 50px #1DA82BC9,0 0 0 65px #2E9A2563";
        }
        var computerwongamediv = document.getElementsByClassName("computerwongame");
        if(computerwongamediv[0].style.display === "none"){
            computerwongamediv[0].style.display = "";
        }
        calculateComputerWinnings();
    }
    if(userSelectedInput === 1 && computerSelectedInput === 2){
        var userscissorsgamediv = document.getElementsByClassName("userscissorsgame");
        if(userscissorsgamediv[0].style.display === "none"){
            userscissorsgamediv[0].style.display = "";
        }
        if(userscissorsgamediv[0].style.boxShadow === ""){
            userscissorsgamediv[0].style.boxShadow = "0 0 0 30px #289A27,0 0 0 50px #1DA82BC9,0 0 0 65px #2E9A2563";
        }
        var computerpapergamediv = document.getElementsByClassName("computerpapergame");
        if(computerpapergamediv[0].style.display === "none"){
            computerpapergamediv[0].style.display = "";
        }
        var userwongamediv = document.getElementsByClassName("userwongame");
        if(userwongamediv[0].style.display === "none"){
            userwongamediv[0].style.display = "";
        }
        var nextfooterdiv = document.getElementsByClassName("nextfooter");
        if(nextfooterdiv[0].style.display === "none"){
            nextfooterdiv[0].style.display = "";
        }
        calculateUserWinnings();
    }

    if(userSelectedInput === 2 && computerSelectedInput === 0){
        var userpapergamediv = document.getElementsByClassName("userpapergame");
        if(userpapergamediv[0].style.display === "none"){
            userpapergamediv[0].style.display = "";
        }
        if(userpapergamediv[0].style.boxShadow === ""){
            userpapergamediv[0].style.boxShadow = "0 0 0 30px #289A27,0 0 0 50px #1DA82BC9,0 0 0 65px #2E9A2563";
        }
        var computerrockgamediv = document.getElementsByClassName("computerrockgame");
        if(computerrockgamediv[0].style.display === "none"){
            computerrockgamediv[0].style.display = "";
        }
        var userwongamediv = document.getElementsByClassName("userwongame");
        if(userwongamediv[0].style.display === "none"){
            userwongamediv[0].style.display = "";
        }
        var nextfooterdiv = document.getElementsByClassName("nextfooter");
        if(nextfooterdiv[0].style.display === "none"){
            nextfooterdiv[0].style.display = "";
        }
        calculateUserWinnings();
    }
    if(userSelectedInput === 2 && computerSelectedInput === 1){
        var userpapergamediv = document.getElementsByClassName("userpapergame");
        if(userpapergamediv[0].style.display === "none"){
            userpapergamediv[0].style.display = "";
        }
        var computerscissorsgamediv = document.getElementsByClassName("computerscissorsgame");
        if(computerscissorsgamediv[0].style.display === "none"){
            computerscissorsgamediv[0].style.display = "";
        }
        if(computerscissorsgamediv[0].style.boxShadow === ""){
            computerscissorsgamediv[0].style.boxShadow = "0 0 0 30px #289A27,0 0 0 50px #1DA82BC9,0 0 0 65px #2E9A2563";
        }
        var computerwongamediv = document.getElementsByClassName("computerwongame");
        if(computerwongamediv[0].style.display === "none"){
            computerwongamediv[0].style.display = "";
        }
        calculateComputerWinnings();
    }

}

function replayGame(){
    var gamediv = document.getElementsByClassName("game");
    if(gamediv[0].style.display === "none"){
        gamediv[0].style.display = "";
    }
    var gameseconddiv = document.getElementsByClassName("gamesecond");
    if(gameseconddiv[0].style.display !== "none"){
        gameseconddiv[0].style.display = "none";
    }
    var nextfooterdiv = document.getElementsByClassName("nextfooter");
    if(nextfooterdiv[0].style.display !== "none"){
        nextfooterdiv[0].style.display = "none";
    }

    var userrockgamediv = document.getElementsByClassName("userrockgame");
    if(userrockgamediv[0].style.display !== "none"){
        userrockgamediv[0].style.display = "none";
    }
    if(userrockgamediv[0].style.boxShadow !== ""){
        userrockgamediv[0].style.boxShadow = "";
    }
    var userscissorsgamediv = document.getElementsByClassName("userscissorsgame");
    if(userscissorsgamediv[0].style.display !== "none"){
        userscissorsgamediv[0].style.display = "none";
    }
    if(userscissorsgamediv[0].style.boxShadow !== ""){
        userscissorsgamediv[0].style.boxShadow = "";
    }
    var userpapergamediv = document.getElementsByClassName("userpapergame");
    if(userpapergamediv[0].style.display !== "none"){
        userpapergamediv[0].style.display = "none";
    }
    if(userpapergamediv[0].style.boxShadow !== ""){
        userpapergamediv[0].style.boxShadow = "";
    }
    var userwongamediv = document.getElementsByClassName("userwongame");
    if(userwongamediv[0].style.display !== "none"){
        userwongamediv[0].style.display = "none";
    }
    var computerwongamediv = document.getElementsByClassName("computerwongame");
    if(computerwongamediv[0].style.display !== "none"){
        computerwongamediv[0].style.display = "none";
    }
    var tiegamediv = document.getElementsByClassName("tiegame");
    if(tiegamediv[0].style.display !== "none"){
        tiegamediv[0].style.display = "none";
    }
    var computerrockgamediv = document.getElementsByClassName("computerrockgame");
    if(computerrockgamediv[0].style.display !== "none"){
        computerrockgamediv[0].style.display = "none";
    }
    if(computerrockgamediv[0].style.boxShadow !== ""){
        computerrockgamediv[0].style.boxShadow = "";
    }
    var computerscissorsgamediv = document.getElementsByClassName("computerscissorsgame");
    if(computerscissorsgamediv[0].style.display !== "none"){
        computerscissorsgamediv[0].style.display = "none";
    }
    if(computerscissorsgamediv[0].style.boxShadow !== ""){
        computerscissorsgamediv[0].style.boxShadow = "";
    }
    var computerpapergamediv = document.getElementsByClassName("computerpapergame");
    if(computerpapergamediv[0].style.display !== "none"){
        computerpapergamediv[0].style.display = "none";
    }
    if(computerpapergamediv[0].style.boxShadow !== ""){
        computerpapergamediv[0].style.boxShadow = "";
    }
    
}



function calculateComputerWinnings(){
    let computerscorevaluediv = document.getElementById("computerscorevalue");
    let computerScore = Number(localStorage.getItem("computerWinnings")) + 1;
    computerscorevaluediv.innerHTML = computerScore;
    localStorage.setItem("computerWinnings", computerScore);
}

function calculateUserWinnings(){
    let userscorevaluediv = document.getElementById("userscorevalue");
    let userScore = Number(localStorage.getItem("userWinnings")) + 1;
    userscorevaluediv.innerHTML = userScore;
    localStorage.setItem("userWinnings", userScore);
}