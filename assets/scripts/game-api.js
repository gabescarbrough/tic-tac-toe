'use strict';

const app = require('./app');

const getCompletedGames = function () {
  return $.ajax({
    url: app.api + '/games[?over=]',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'GET',
  });
};

const getGame = function () {
  return $.ajax({
    url: app.api + '/games/' + app.game.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'GET',
  });
};

const createGame = function () {
  return $.ajax({
    url: app.api + '/games',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
    method: 'POST',
  });
};

const updateGame = function (index, currentPlayer, gameOver) {
  console.log(index, currentPlayer, gameOver);
  return $.ajax({
    url: app.api + '/games/' + app.game.id,
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
    method: 'PATCH',
    data: {
            "game": {
              "cell": {
                "index": index,
                "value": currentPlayer
              },
              "over": gameOver
            }
          },
  });
};

module.exports = {
  getCompletedGames,
  getGame,
  createGame,
  updateGame
};
