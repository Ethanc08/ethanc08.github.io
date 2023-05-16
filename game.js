// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;
let guessedNumber = 0;

// Function to handle the user's guess
function handleGuess() {
  // Get the user's guess from the input field
  const guessInput = document.getElementById('guessInput');
  guessedNumber = parseInt(guessInput.value);

  // Increment the number of guesses
  numberOfGuesses++;

  // Check if the guessed number is correct
  if (guessedNumber === targetNumber) {
    showResult(`Congratulations! You guessed the number in ${numberOfGuesses} guesses.`);
  } else if (guessedNumber < targetNumber) {
    showResult('Too low! Guess higher.');
  } else {
    showResult('Too high! Guess lower.');
  }
  
  // Clear the input field
  guessInput.value = '';
}

// Function to display the result message
function showResult(message) {
  const resultMessage = document.getElementById('resultMessage');
  resultMessage.textContent = message;
}

// Attach the handleGuess function to the button's click event
const guessButton = document.getElementById('guessButton');
guessButton.addEventListener('click', handleGuess);