'use strict';

const ui = require('../game/ui');
const gameAPI = require('../game-api');
const app = require('../app');


// COUNT CLICKS

let clickNumber = 0;
let currentPlayer = 'x';
let gameOver = false;

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
    gameOver = true;
    $('.board').hide();
    $('.reset-button').show();
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
    gameOver = true;
    $('.board').hide();
    $('.reset-button').show();
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
    gameOver = true;
    $('.board').hide();
    $('.reset-button').show();
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

// reset board

const resetBoard = function(){
	$(".square").children().remove();
	$('.square').off();
	$('.square').on('click', countClicks);
  $('.square').on('click', whoseTurn);
  $('.square').on('click', addMarker);

  for (let i = 0; i < 9; i++) {
    $('[data-square=' + i + ']').data().value = '';

  $(".win-message").children().remove();
  }

  clickNumber = 0;
	currentPlayer = 'x';
	gameOver = false;

  $('.board').show();

  gameAPI.createGame()
    .done(ui.gameCreateSuccess)
    .fail(ui.failure);

  gameAPI.getGames()
    .done(ui.getGamesSuccess)
    .fail(ui.failure);
};

module.exports = {
  countClicks,
  whoseTurn,
  addMarker,
  currentPlayer,
  gameOver,
  resetBoard
};
