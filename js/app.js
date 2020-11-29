let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");
const buttons = document.querySelectorAll(".selection button");
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
// random class array
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById("demo2");

// Game Functionity :seeting each function for the buttons
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            let clickedBtn = e.target.className;
            showIcon.className= clickedBtn;
            let randomNum = Math.floor(Math.random() * randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];
            // Game Score.
            // If it's a Tie/
            if(showIcon.className === computerShowIcon.className){
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML - cScore.innerHTML;
                text.innerHTML = "Its's a Tie ! ";
                text.style.color = "orange";
                // above changed the color if something happens
                // REMBER ABOVE
                text2.innerHTML= text.innerHTML;
                text2.style.color = "orange";
            }
            // If it isn't a tie
            else if(showIcon.className === randomClasses[0] &&
            computerShowIcon.className === randomClasses[2]){
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a Win !";
                text.style.color ='rgb(1, 146, 1)';
                text.style.fontSize("30PX");
                text2.innerHTML= text.innerHTML;
                text2.style.color = 'rgb(1, 146, 1)';
            }else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Lost !";
                text.style.color = "red";
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'red';
            }else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Lost !";
                text.style.color = "red";
                text2.innerHTML = text.innerHTML;
                text2.style.color = 'red';
            }else if(showIcon.className === randomClasses[1] &&
                computerShowIcon.className === randomClasses[0]){
                    pScore.innerHTML = playerScore;
                    playerScore++;
                    text.innerHTML = "It's a Win !";
                    text.style.color ='rgb(1, 146, 1)';
                    text2.innerHTML= text.innerHTML;
                    text2.style.color = 'rgb(1, 146, 1)';
                }else if (showIcon.className === randomClasses[2] && 
                    computerShowIcon.className === randomClasses[0]){
                        cScore.innerHTML = computerScore;
                        computerScore++;
                        text.innerHTML = "You Lost! ";
                        text.style.color = "red";
                        text2.innerHTML = text.innerHTML;
                        text2.style.color = "red";
                }else if(showIcon.className === randomClasses[2] &&
                    computerShowIcon.className === randomClasses[1]){
                        pScore.innerHTML = playerScore;
                        playerScore++;
                        text.innerHTML = "It's a Win !";
                        text.style.color ='rgb(1, 146, 1)';
                        text2.innerHTML= text.innerHTML;
                        text2.style.color = 'rgb(1, 146, 1)';
                }
        });
    });
}
game();
