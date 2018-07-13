/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as they wish. Each result get added to their ROUND score
- BUT, if the player rolls a 1, all of their ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that their ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//document.querySelector('#current-' + activePlayer).textContent = dice;

//let x = document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    //Dice roll
    let dice = Math.floor(Math.random() * 6) + 1;

    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
        //Add current score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    //Add current score to global score
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.querySelector(('#name-') + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector(('.player-') + activePlayer + '-panel').classList.add('winner');
        document.querySelector(('.player-') + activePlayer + '-panel').classList.remove('active');
    } else {
    nextPlayer();

    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}