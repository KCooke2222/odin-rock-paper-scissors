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

    const result = results[humanChoice][computerChoice];

    const resultsDiv = document.querySelector("#results");
    const resultText = document.createElement("p");

    resultText.innerText = result;

    resultsDiv.appendChild(resultText);

    if (result === "win") {
        humanScore += 1;
    }
    else if (result === "lose") {
        computerScore += 1;
    }
}

const btns = document.querySelector("#btns");

btns.addEventListener("click", (e) => {
    let choice = e.target.id;

    let computerChoice = getComputerChoice();

    playRound(choice, computerChoice);
})

