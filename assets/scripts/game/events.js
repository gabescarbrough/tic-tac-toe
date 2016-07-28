'use strict';

const gameLogic = require('../game/game-logic');

const addHandlers = () => {
  $('.square').on('click', gameLogic.countClicks);
  $('.square').on('click', gameLogic.whoseTurn);
  $('.square').on('click', gameLogic.addMarker);
};

module.exports = {
  addHandlers,
};
