const difficultySelect = document.querySelector("#selectorDiff");
const guessSection = document.querySelector(".guess-section");
const guessInput = document.querySelector("#guess");
const guessBtn = document.querySelector("#guess-button");
const resultParagraph = document.querySelector("#result");
const difficultySection = document.querySelector("#diffSet");
const gameSection = document.querySelector("#game-section");
const triesLeftSpan = document.querySelector("#tries-left")
const resetButton = document.querySelector("#reset-btn");
const title = document.querySelector("#title")

let maxTries;
let randomNumber;
let triesLeft;

difficultySelect.addEventListener("change", function() {

    const difficulty = parseInt(difficultySelect.value);

    switch(difficulty) {
        case 1:
            maxTries = 10;
            break;
        case 2:
            maxTries = 7;
            break;
        case 3:
            maxTries = 5;
            break;
        default:
            maxTries = 10
            break;
    }

    triesLeft = maxTries
    triesLeftSpan.textContent = maxTries

    randomNumber = Math.floor(Math.random() * 100) + 1;

    difficultySection.style.display = "none";
    gameSection.style.display = "block";
    guessSection.style.display = "flex";

    console.log(randomNumber)
});

guessBtn.addEventListener("click", function() {
    const guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < 1 || guess > 100) {
        resultParagraph.textContent = "Please, enter a number between 1 and 100."
    } else {
        if(guess === randomNumber) {
            title.style.display = "none";
            resultParagraph.textContent = `Congratulations, you win! The number was ${randomNumber}
                                             and you used ${maxTries - triesLeft + 1} try(ies).`;

            resetButton.style.display = "block";
            guessSection.style.display = "none";
        } else if(guess > randomNumber) {
            resultParagraph.textContent = `The number I thinking is minor then ${guess}`
            triesLeft--;
        } else {
            resultParagraph.textContent = `The number I thinking is major then ${guess}`
            triesLeft--
        }

        if(triesLeft === 0) {
            resultParagraph.textContent = `Sorry, you lose! The number was ${randomNumber}.`;
            gameSection.style.display = "block";
            guessSection.style.display = "none";
            resetButton.style.display = "block";
            title.style.display = "none";
        }
        triesLeftSpan.textContent = triesLeft

        guessInput.value = "";
    }
});

function resetGame() {
    difficultySelect.value = "";

    difficultySection.style.display = "flex";
    gameSection.style.display = "none";
    guessSection.style.display = "none";
    resetButton.style.display = "none";
    resultParagraph.style.display = "none";
    title.style.display = "flex";
}

resetButton.addEventListener("click", resetGame)

// resolver bug do firefox
function inpNum(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    if (!charStr.match(/^[0-9]+$/))
      e.preventDefault();
  }