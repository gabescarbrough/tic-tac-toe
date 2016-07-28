'use strict';

const ui = require('../game/ui');
const gameAPI = require('../game-api');

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


const makeBoardArray = function() {
  let currentBoard = [];

  for (let i = 0; i < 9; i++) {
    currentBoard.push($('[data-square=' + i + ']').data().value);
  } return currentBoard;
};


// Check for wins

const checkWinArrayHorizontal = function() {
  let testBoard = makeBoardArray(currentPlayer);

  if (
    testBoard[0] === currentPlayer && testBoard[1] === currentPlayer && testBoard[2] === currentPlayer ||
    testBoard[3] === currentPlayer && testBoard[4] === currentPlayer && testBoard[5] === currentPlayer ||
    testBoard[6] === currentPlayer && testBoard[7] === currentPlayer && testBoard[8] === currentPlayer
  ){
    if (currentPlayer === "x"){
      ui.showXWinMessage();
    } else {
      ui.showOWinMessage();
    }
    winner = currentPlayer;
    gameOver = true;
  }
};

const checkWinArrayVertical = function() {
  let testBoard = makeBoardArray(currentPlayer);

  if (
    testBoard[0] === currentPlayer && testBoard[3] === currentPlayer && testBoard[6] === currentPlayer ||
    testBoard[1] === currentPlayer && testBoard[4] === currentPlayer && testBoard[7] === currentPlayer ||
    testBoard[2] === currentPlayer && testBoard[5] === currentPlayer && testBoard[8] === currentPlayer
  ){
    if (currentPlayer === "x"){
      ui.showXWinMessage();
    } else {
      ui.showOWinMessage();
    }
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
    if (currentPlayer === "x"){
      ui.showXWinMessage();
    } else {
      ui.showOWinMessage();
    }
    winner = currentPlayer;
    gameOver = true;
  }
};

const checkForTie = function() {
  if (clickNumber === 9 && gameOver === false){
    ui.showTieMessage();
    gameOver = true;
  }
};

const addMarker = function(){
  // adds visual marker
  $(this).append("<h1 class='game-marker'>" + currentPlayer + "</h1>").off();
  // adds data to data-square HTML attribute
  $(this).data().value = currentPlayer;

  let index = $(this).data('square');

  //checks for win
  checkWinArrayHorizontal();
  checkWinArrayVertical();
  checkWinArrayDiagonal();
  checkForTie();

  // sends data to back-end
  gameAPI.updateGame(index, currentPlayer, gameOver);

};

module.exports = {
  countClicks,
  whoseTurn,
  addMarker,
  currentPlayer,
  gameOver,
  winner
};
