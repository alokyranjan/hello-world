// Words database (replace with your desired words)
const words = ["javascript", "programming", "challenge", "recursion", "algorithm"];

function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function createGuessedLetters() {
    return new Array(chosenWord.length).fill("-");
}

function updateGuessedLetters(letter, guessedLetters, chosenWord) {
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            guessedLetters[i] = letter;
        }
    }
}

function isWordGuessed(guessedLetters) {
    return guessedLetters.join("") === chosenWord;
}

function isGameOver(wrongGuesses) {
    return wrongGuesses >= MAX_WRONG_GUESSES; // Define MAX_WRONG_GUESSES (e.g., 6)
}

function displayGame(guessedLetters, wrongGuesses) {
    console.log("Word:", guessedLetters.join(" "));
    console.log("Wrong guesses:", wrongGuesses);
    console.log("Used letters:", usedLetters.join(" "));
}

const chosenWord = chooseWord();
const guessedLetters = createGuessedLetters();
let wrongGuesses = 0;
const usedLetters = new Set();

while (!isGameOver(wrongGuesses) && !isWordGuessed(guessedLetters)) {
    displayGame(guessedLetters, wrongGuesses);
    const letter = prompt("Guess a letter:").toLowerCase();

    if (usedLetters.has(letter)) {
        console.log("Letter already used! Try again.");
    } else {
        usedLetters.add(letter);
        if (chosenWord.includes(letter)) {
            updateGuessedLetters(letter, guessedLetters, chosenWord);
        } else {
            wrongGuesses++;
        }
    }
}

if (isWordGuessed(guessedLetters)) {
    console.log("Congratulations! You guessed the word:", chosenWord);
} else {
    console.log("Game over! The word was:", chosenWord);
}