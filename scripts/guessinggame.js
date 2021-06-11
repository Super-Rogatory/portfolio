const submitButton = document.getElementById("submit-guess-btn");
const playAgainButton = document.getElementById("play-again-btn");
const hintButton = document.getElementById("hint-button");
const gameplayTitleInformation = document.getElementById("gameplay-title");
const answer = Math.floor(Math.random() * 100);
const h2 = 1;
const p = 2;
const correct = true;
let previousGuess;
let count = 5;
function checkVal(elementObject) {
  const val = parseInt(elementObject.value);
  elementObject.value = "";
  return val === answer ? true : false;
}
function isHigher(previousGuess) {
  return previousGuess > answer ? true : false;
}
submitButton.addEventListener("click", function () {
  // querySelector returns the first element object that matches the argument selector
  const inputElement = document.querySelector("input");
  previousGuess = inputElement.value;
  if (inputElement.value !== "") {
    if (count === 0)
      gameplayTitleInformation.children[p].innerText =
        "You lost! It's alright. Press Play Again to Restart!";
    else if (checkVal(inputElement) === correct && count > 0) {
      gameplayTitleInformation.children[p].innerText =
        "Congratulations, you win! The answer is " + previousGuess + ".";
    } else {
      count--;
      gameplayTitleInformation.children[h2].innerText = previousGuess;
      gameplayTitleInformation.children[p].innerText =
        "Submit a Guess, you have " + count + " trie(s) left";
    }
  }
});
hintButton.addEventListener("click", function () {
  if (count === 5)
    gameplayTitleInformation.children[p].innerText =
      "You have not made a guess yet!";
  else if (previousGuess) {
    switch (count) {
      case 4:
        // POTENTIAL BUG INTRODUCED. WE ARE ACCESSED THE LAST ELEMENT OBJECT OF <div id="gameplay-title"> via the value p. THIS COULD CHANGE.
        gameplayTitleInformation.children[p].innerText = isHigher(previousGuess)
          ? "You have " + count + " guesses left, you were a little too high!"
          : "You have " + count + " guesses left, you were a little too low!";
        break;
      case 3:
        gameplayTitleInformation.children[p].innerText = isHigher(previousGuess)
          ? "UH OH! You have " +
            count +
            " guesses left, take a deep breathe. Too HIGH!"
          : "UH OH! You have " +
            count +
            " guesses left, take a deep breathe. Too LOW!";
        break;
      case 2:
        gameplayTitleInformation.children[p].innerText = isHigher(previousGuess)
          ? "Too high. " + count + " guesses left."
          : "Too low. " + count + " guesses left.";
        break;
      case 1:
        gameplayTitleInformation.children[p].innerText = isHigher(previousGuess)
          ? "Too high. " + count + " guesses left."
          : "Too low. " + count + " guesses left. ";
        break;
      default:
        "The game has ended";
    }
  }
});
playAgainButton.addEventListener("click", function () {
  count = 5;
  const inputElement = document.querySelector("input");
  inputElement.value = "";
  gameplayTitleInformation.children[h2].innerText = "-";
  gameplayTitleInformation.children[p].innerText = "RESET!";
});
