function checkGuess() {
    // Generate a random number between 1 and 10
    var randNum = Math.floor(Math.random() * 10) + 1;

    // Get user's guess from input
    var userGuess = parseInt(document.getElementById('userGuess').value);

    // Check if the guess is correct
    // Also Dynamic change in rext
    if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
        if (userGuess === randNum) {
            document.getElementById('result').innerText = '🎉🎉🎉Congratulations🥳 You guessed the correct number🐣';
            document.getElementById('result').style.color = '#4CAF50';
        } else {
            document.getElementById('result').innerText = '🌬️Sowwyyyy! Try again☃️ \nThe correct number was ' + randNum + '👋😜';
            document.getElementById('result').style.color = '#FF5733';
        }
    } else {
        document.getElementById('result').innerText = 'Enter a valid number between 1 and 10 !\n Many have never succeeded but give your best bet🤏🥸';
        document.getElementById('result').style.color = '#FF5733';
    }
}
