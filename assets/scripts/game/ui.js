'use strict';

const app = require('../app');



const showXWinMessage = function() {
  // $(".board").hide();
  $(".win-message").append("<h1>X wins!</h1>");
};

const showOWinMessage = function() {
  // $(".board").hide();
  $(".win-message").append("<h1>O wins!</h1>");
};

const showTieMessage = function() {
  // $(".board").hide();
  $(".win-message").append("<h1>It's a tie!</h1>");
};


const gameCreateSuccess = (data) => {
  console.log(data);
  app.game = data.game;
};


module.exports = {
  showXWinMessage,
  showOWinMessage,
  showTieMessage,
  gameCreateSuccess
};
