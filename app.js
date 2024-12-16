const prompt = require('prompt-sync')();

// Ett ord i en array
// en input från en användare
// jämför om användarens input (bokstav) finns med i arrayn
//Om match, placera bokstaven på index där den matchar
//ge användaren 10 försök
//om användaren anger samtliga bokstäver rätt vinner hen
// om inte förlorar hen

//To run:
//npm init -y
//npm i readline-sync

sayWelcome()

function playHangman() {
    const hangmanWord = ["c", "a", "r"]
    const hangmanStatus = ["_", "_", "_"]
    let guessedLetters = []
    let guessedAmmount = 0
    let failedGuesses = 0
    while (guessedAmmount < hangmanWord.length && failedGuesses < 10) {
        console.log(`You have guessed ${guessedAmmount} of the letters. You have ${10 - failedGuesses} guesses left`)
        console.log(hangmanStatus.join(" "))
        const guess = prompt('Enter the next letter: ');
        if (hangmanWord.includes(guess)) {
            console.log("Nice, you guessed: " + guess)
            guessedAmmount++
            const guessIndex = hangmanWord.indexOf(guess)
            hangmanStatus[guessIndex] = guess
        } else if (guessedLetters.includes(guess)) {
            console.log("You already guessed that")
            failedGuesses++
        } else {
            console.log("Wrong guess!")
            failedGuesses++
        }
        guessedLetters.push(guess)
    }
    if (failedGuesses > 10) {
        console.log("RIP")
    } else {
        console.log(`You WIN, the word was ${hangmanWord}`)
    }
}

function sayWelcome() {
    const start = prompt('Welcome to hangman. Press enter to start! ');
    playHangman()
}