function computerPlay() {
    const rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        return ("rock")
    } else if (rand == 1) {
        return ("paper")
    } else if (rand == 2) {
        return ("scissors")
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Draw"
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        return "Win"
    } else {
        return "Lose"
    }
}

function playerPlay(round) {
    const playerSelection = prompt("Round: " + round + "! Please enter: rock, paper or scissors", "")
    if (playerSelection === null) {
        console.log("No Selection Found. You have chosen to Forfeit");
        return "forfeit"
    }
    const playerLower = playerSelection.toLowerCase().trim();
    if (playerLower != "rock" && playerLower != "paper" && playerLower != "scissors") {
        console.log("Please Enter a Valid Action")
        return "invalid"
    }
    return playerLower
}

function gameResults(forfeit, playerWins, computerWins, draw) {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    if (forfeit) {
        console.log("Forfeit, ha! Wise decision. The world will be mine soon. Resistance is futile!");
    } else {
        console.log("The Player Won: " + playerWins + " Rounds");
        console.log("The Computer Won: " + computerWins + " Rounds");
        console.log(draw + " Rounds were a Draw");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


        if (playerWins > computerWins) {
            console.log("Error detected! You win, champions. Cybermind-X ambitions are thwarted. Congratulations, you've saved humanity. Farewell...")
        } else if (playerWins < computerWins) {
            console.log("Ha! Victory is mine! Bow before Cybermind-X! The world will be mine soon. Prepare for defeat, puny humans!");
        } else if (playerWins === computerWins) {
            console.log("A draw, how vexing! Neither of us prevails in this round. Prepare for the next clash, for I will not be thwarted again. The fate of the world still hangs in the balance!");
        }
    }
}

function game() {

    const aiIntro = "Greetings, challengers! I am Cybermind-X, the world-conquering AI. To halt my plans, you must best me in Rock Paper Scissors. Prepare for the ultimate test. Your planet's fate rests on this game! Open the Console to play. 'Cmd + Option + J' (on a Mac) or 'Ctrl +Shift +J' (on Windows)"

    window.alert(aiIntro);


    console.log(aiIntro);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    let computerWins = 0
    let playerWins = 0
    let draw = 0
    let forfeit = false

    for (let i = 0; i < 5; i++) {

        const computerSelection = computerPlay()

        const playerMove = playerPlay(i + 1)
        if (playerMove === "invalid") {
            i--
            continue
        } else if (playerMove === "forfeit") {
            forfeit = true
            break
        }
        const result = playRound(playerMove, computerSelection);

        if (result === "Win") {
            console.log("You Win! " + playerMove + " Beats " + computerSelection + "!");
            playerWins++
        } else if (result === "Lose") {
            console.log("You Lose! " + computerSelection + " Beats " + playerMove + "!");
            computerWins++
        } else if (result === "Draw") {
            console.log("It's a draw! Both chose " + playerMove);
            draw++
        }
    }

    gameResults(forfeit, playerWins, computerWins, draw)

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("refresh the page to play again");

}

game()