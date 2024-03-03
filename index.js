let randomNum;

document.getElementById('start-game').onclick = startGame;

function startGame() {
    document.getElementById('start-game').style.display = "none";

    randomNum = Math.round(Math.random() * 9 + 1);

    document.getElementById('generated-num').style.display = "block";
    document.getElementById('guess').style.display = "block";
    document.getElementById('submit').style.display = "block";

    document.getElementById('submit').onclick = getValue;
}

function getValue() {
    let value;
    value = document.getElementById('guess').value;
    value = Number(value);
    if (value == "") {
        window.alert("Enter a value!");
        return;
    }
    else if (isNaN(value) || value > 10 || value < 1) {
        window.alert("Enter an acceptable value!");
        return;
    }
    else {
        if (value == randomNum) {
            document.getElementById('win-label').style.display = "block";
            gameEnder();
        }
        else {
            document.getElementById('lose-label').style.display = "block";
            gameEnder();
        }
    }
}

function gameEnder() {
    document.getElementById('generated-num').textContent = `My number was ${randomNum}`;
    document.getElementById('guess').style.display = "none";
    document.getElementById('submit').style.display = "none";
    document.getElementById('play-again').style.display = "block";
}

document.getElementById('play-again').onclick = playAgain;

function playAgain() {
    document.getElementById('play-again').style.display = "none";
    document.getElementById('lose-label').style.display = "none";
    document.getElementById('win-label').style.display = "none";
    document.getElementById('generated-num').textContent = "I've got my number";
    startGame();
}