let secretNumber;
let attempts = 0;

function generateNumber() {
    secretNumber = Math.floor(Math.random() * 600) + 67;
}

function checkGuess() {
    let guess = Number(document.getElementById('guessInput').value);

    if (guess < 67 || guess > 666) {
        document.getElementById('message').textContent = 'Enter number between 67 and 666';
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = 'Attempts: ' + attempts;

    if (guess === secretNumber) {
        document.getElementById('message').textContent = 'You won in ' + attempts + ' attempts!';
    } else if (guess > secretNumber) {
        document.getElementById('message').textContent = 'Too high!';
    } else {
        document.getElementById('message').textContent = 'Too low!';
    }

    document.getElementById('guessInput').value = '';
}

function resetGame() {
    generateNumber();
    attempts = 0;
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('message').textContent = 'Make your first guess!';
    document.getElementById('guessInput').value = '';
}

function toggleTheme() {
    if (document.body.className === 'dark') {
        document.body.className = 'light';
    } else {
        document.body.className = 'dark';
    }
}

document.getElementById('guessBtn').onclick = checkGuess;
document.getElementById('resetBtn').onclick = resetGame;
document.getElementById('themeBtn').onclick = toggleTheme;

generateNumber();
