'use strict';

const gameLogic = require('../game/game-logic');
const gameAPI = require('../game-api');
const gameUI = require('../game/ui');

// const onCreateGame = function (event) {
//   event.preventDefault();
//   gameAPI.createGame()
//   .done(gameUI.success)
//   .fail(gameUI.failure);
// };


const addHandlers = () => {
  $('.square').on('click', gameLogic.countClicks);
  $('.square').on('click', gameLogic.whoseTurn);
  $('.square').on('click', gameLogic.addMarker);
};

module.exports = {
  addHandlers,
};
