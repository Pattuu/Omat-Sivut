(function(obj){

let scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-hold').addEventListener("click", function() {
    hideDice();
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >= 100) {
            document.querySelector('#pelaaja-' + activePlayer).textContent = 'Voittaja!';

            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
        document.querySelector('#p-1-vuoro').style.visibility = 'visible';
        document.querySelector('#p-0-vuoro').style.visibility = 'hidden';
    } else {
        activePlayer = 0;
        document.querySelector('#p-0-vuoro').style.visibility = 'visible';
        document.querySelector('#p-1-vuoro').style.visibility = 'hidden';
    }

    roundScore = 0;
    document.getElementById('roundscore-0').textContent = '0';
    document.getElementById('roundscore-1').textContent = '0';
};

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        hideRoll1();
        hideDice();
        let dice = Math.floor(Math.random() * 6) + 1;
        showDice(dice);
        if ( dice !== 1) {
            roundScore += dice;
            document.querySelector('#roundscore-' + activePlayer).textContent = roundScore;
        } else {
            document.querySelector('#p' + activePlayer + '-roll1').style.visibility = 'visible';
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener("click", init);


function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('#diceimg1').style.visibility = 'hidden';
    document.querySelector('#diceimg2').style.visibility = 'hidden';
    document.querySelector('#diceimg3').style.visibility = 'hidden';
    document.querySelector('#diceimg4').style.visibility = 'hidden';
    document.querySelector('#diceimg5').style.visibility = 'hidden';
    document.querySelector('#diceimg6').style.visibility = 'hidden';
    document.querySelector('#p-1-vuoro').style.visibility = 'hidden';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('roundscore-0').textContent = '0';
    document.getElementById('roundscore-1').textContent = '0';
    document.getElementById('pelaaja-0').textContent = 'Player 1';
    document.getElementById('pelaaja-1').textContent = 'Player 2';
    document.querySelector('#p0-roll1').style.visibility = 'hidden';
    document.querySelector('#p1-roll1').style.visibility = 'hidden';
};

function hideRoll1() {
    document.querySelector('#p0-roll1').style.visibility = 'hidden';
    document.querySelector('#p1-roll1').style.visibility = 'hidden';
}

function showDice(dice) {
    if (dice === 1) {
        document.querySelector('#diceimg1').style.visibility = 'visible';
    } else if (dice === 2) {
        document.querySelector('#diceimg2').style.visibility = 'visible';
    } else if (dice === 3) {
        document.querySelector('#diceimg3').style.visibility = 'visible';
    } else if (dice === 4) {
        document.querySelector('#diceimg4').style.visibility = 'visible';
    } else if (dice === 5) {
        document.querySelector('#diceimg5').style.visibility = 'visible';
    } else {
        document.querySelector('#diceimg6').style.visibility = 'visible';
    }
}

function hideDice() {
    document.querySelector('#diceimg1').style.visibility = 'hidden';
    document.querySelector('#diceimg2').style.visibility = 'hidden';
    document.querySelector('#diceimg3').style.visibility = 'hidden';
    document.querySelector('#diceimg4').style.visibility = 'hidden';
    document.querySelector('#diceimg5').style.visibility = 'hidden';
    document.querySelector('#diceimg6').style.visibility = 'hidden';
}

})(window);



