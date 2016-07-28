'use strict';

// COUNT CLICKS

let clickNumber = 0;
let currentPlayer = 'x';
let gameOver = false;
let winner = '';

const countClicks = function() {
    clickNumber += 1;
  };

//


const whoseTurn = function() {
  if (clickNumber === 0 || clickNumber % 2 ){
    currentPlayer = 'x';
  } else {
    currentPlayer = 'o';
  } return currentPlayer;
};


// const checkWin = function() {
//   if (
//     $('[data-square="0"]').data().value === $('[data-square="1"]').data().value && $('[data-square="1"]').data().value === $('[data-square="2"]').data().value ||
//     $('[data-square="3"]').data().value === $('[data-square="4"]').data().value && $('[data-square="5"]').data().value === $('[data-square="2"]').data().value ||
//     $('[data-square="6"]').data().value === $('[data-square="7"]').data().value && $('[data-square="8"]').data().value === $('[data-square="2"]').data().value
//   ) {
//     console.log('You win!');
//   }
// };


const makeBoardArray = function() {
  let currentBoard = [];

  for (let i = 0; i < 9; i++) {
    currentBoard.push($('[data-square=' + i + ']').data().value);
  } return currentBoard;
};


const showWinMessage = function() {
  $(".board").hide();
  $(".win-message").append("<h1>" + currentPlayer + " wins!</h1>");

};

const showTieMessage = function() {
  $(".board").hide();
  $(".win-message").append("<h1>It's a tie!</h1>");

};


// Check for wins

const checkWinArrayHorizontal = function() {
  let testBoard = makeBoardArray(currentPlayer);

  if (
    testBoard[0] === currentPlayer && testBoard[1] === currentPlayer && testBoard[2] === currentPlayer ||
    testBoard[3] === currentPlayer && testBoard[4] === currentPlayer && testBoard[5] === currentPlayer ||
    testBoard[6] === currentPlayer && testBoard[7] === currentPlayer && testBoard[8] === currentPlayer
  ){
    showWinMessage();
    winner = currentPlayer;
    gameOver = true;
  }
};

const checkWinArrayVertical = function() {
  let testBoard = makeBoardArray(currentPlayer);

  if (
    testBoard[0] === currentPlayer && testBoard[3] === currentPlayer && testBoard[6] === currentPlayer ||
    testBoard[1] === currentPlayer && testBoard[4] === currentPlayer && testBoard[7] === currentPlayer ||
    testBoard[3] === currentPlayer && testBoard[6] === currentPlayer && testBoard[8] === currentPlayer
  ){
    showWinMessage();
    winner = currentPlayer;
    gameOver = true;
  }
};

const checkWinArrayDiagonal = function() {
  let testBoard = makeBoardArray(currentPlayer);

  if (
    testBoard[0] === currentPlayer && testBoard[4] === currentPlayer && testBoard[8] === currentPlayer ||
    testBoard[2] === currentPlayer && testBoard[4] === currentPlayer && testBoard[6] === currentPlayer
  ){
    showWinMessage();
    winner = currentPlayer;
    gameOver = true;
  }
};

const checkForTie = function() {
  if (clickNumber === 9 && gameOver === false){
    showTieMessage();
    gameOver = true;
  }
};

const addMarker = function(){
  // adds visual marker
  $(this).append("<h1 class='game-marker'>" + currentPlayer + "</h1>").off();
  // adds data to data-square HTML attribute
  $(this).data().value = currentPlayer;
  checkWinArrayHorizontal();
  checkWinArrayVertical();
  checkWinArrayDiagonal();
  checkForTie();
};




const addHandlers = () => {
  $('.square').on('click', countClicks);
  $('.square').on('click', whoseTurn);
  $('.square').on('click', addMarker);
};

module.exports = {
  addHandlers,
};
