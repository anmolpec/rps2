function getValUser(playerChoice){
    const radioInput=document.getElementsByName("choice");
    for(let i=0;i<radioInput.length;i++){
        if(radioInput[i].checked){
            playerChoice=radioInput[i].value;
        }
    }
    if(playerChoice!==""){
        console.log(playerChoice);
        return playerChoice;
    }
    else{
        const result=document.querySelector("#result");
        result.textContent="Choose a Hand";
        if(document.querySelector("button").onclick()){
            return playGame();
        }
    }
}

function getValComputer(){
    let choiceNumber=Math.floor((Math.random()*3));
    let computerChoice="";
    switch(true){
        case choiceNumber<1:computerChoice="Rock";break;
        case choiceNumber<2:computerChoice="Paper";break;
        case choiceNumber<=3:computerChoice="Scissor";break;
    }
    console.log(computerChoice);
    return computerChoice;
}

function showComputerChoice(computerChoice){
    const displayDiv=document.querySelector("#computerChoice");
    displayDiv.textContent=computerChoice;
}

function showResult(playerChoice,computerChoice){
    const result=document.querySelector("#result");
    if(playerChoice.toUpperCase()===computerChoice.toUpperCase()){
        result.textContent="Result: TIE";
        return 0;
    }
    switch(computerChoice.toUpperCase()){
        case "ROCK":if(playerChoice.toUpperCase()=="PAPER"){
            result.textContent="Result: You WIN! "+playerChoice+ " beats "+computerChoice;
            return 1;
            }
            else{
                result.textContent="Result: You LOSE! "+computerChoice+ " beats "+playerChoice;
                return -1;
            }
            break;
        case "PAPER":if(playerChoice.toUpperCase()=="SCISSOR"){
                result.textContent="Result: You WIN! "+playerChoice+ " beats "+computerChoice;
                return 1;
            }
            else{
                result.textContent="Result: You LOSE! "+computerChoice+ " beats "+playerChoice;
                return -1;
            }break;
        case "SCISSOR":if(playerChoice.toUpperCase()=="ROCK"){
                result.textContent="Result: You WIN! "+playerChoice+ " beats "+computerChoice;
                return 1;
            }
            else{
                result.textContent="Result: You LOSE! "+computerChoice+ " beats "+playerChoice;
                return -1;
            }break;
    }
}

function showPoints(playerPoints,computerPoints){
    const playerHeading=document.querySelector("#playerHeading");
    const computerHeading=document.querySelector("#computerHeading");
    playerHeading.textContent="Player: "+playerPoints;
    computerHeading.textContent="Computer: "+computerPoints;
}

function finalResult(playerPoints,computerPoints){
    const result=document.querySelector("#result");
    if(playerPoints>computerPoints)result.textContent="You Win the Game!!!";
    else result.textContent="You Lose the Game";
    const newGameBtn=document.createElement("button");
    newGameBtn.textContent="New Game";
    newGameBtn.setAttribute("id","newGameButton");
    result.appendChild(newGameBtn);
    newGameBtn.style.backgroundColor="white";
    newGameBtn.style.width="100px";
    newGameBtn.addEventListener("click",playNewGame);
}

function playNewGame(){
    const x=document.querySelector("#newGameButton");
    x.parentNode.removeChild(x);
    resetRadio();
    playGame();
}

function resetRadio(){
    const radioInput=document.getElementsByName("choice");
    for(let i=0;i<radioInput.length;i++){
        radioInput[i].checked=false;
    }
}
function playGame(){
        let playerChoice="";
        playerChoice=getValUser(playerChoice);
        let computerChoice=getValComputer();
        showComputerChoice(computerChoice);
        let playerResult=showResult(playerChoice,computerChoice);
        if(playerResult==1)playerPoints++;
        else if(playerResult==-1)computerPoints++;
        showPoints(playerPoints,computerPoints);
        if(playerPoints>=5||computerPoints>=5){
            showPoints(playerPoints,computerPoints);
            finalResult(playerPoints,computerPoints);
            computerPoints=0;
            playerPoints=0;
            showPoints(playerPoints,computerPoints);
            return;
        }
}

let playerPoints=0, computerPoints=0;
const playBtn=document.querySelector("button");
playBtn.addEventListener("click", playGame);

 