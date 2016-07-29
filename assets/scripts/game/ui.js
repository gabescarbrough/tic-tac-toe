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

const getGamesSuccess = (data) => {
  console.log(data);
  app.games = data.games;
  console.log(app.games);
  $('.games-played').text(app.games.length + ' games');
  $('.game-text').show();
};


module.exports = {
  showXWinMessage,
  showOWinMessage,
  showTieMessage,
  gameCreateSuccess,
  getGamesSuccess
};
