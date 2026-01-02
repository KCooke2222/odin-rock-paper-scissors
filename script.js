let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else if (choice === 2) {
        return "scissors";
    }
}


function getHumanChoice() {
    return prompt("Enter a choice:");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const results = {
        rock: { rock: "tie", paper: "lose", scissors: "win" },
        paper: { rock: "win", paper: "tie", scissors: "lose" },
        scissors: { rock: "lose", paper: "win", scissors: "tie" },
    };

    result = results[humanChoice][computerChoice];

    console.log(result)

    if (result === "win") {
        humanScore += 1;
    }
    else if (result === "lose") {
        computerScore += 1;
    }
}


function playGame(rounds = 5) { 
    for (i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    

    if (humanScore > computerScore) {
        console.log("You win game!");
    }
    else {
        console.log("You die!")
    }

    console.log(humanScore + " " + computerScore);
}

playGame()