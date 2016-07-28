'use strict';

const app = require('../app');
const gameAPI = require('../game-api');

const success = (data) => {
  console.log(data);
};

const gameCreateSuccess = (data) => {
  console.log(data);
  app.game = data.game;
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $('.board').show();
  gameAPI.createGame()
    .done(gameCreateSuccess)
    .fail(failure);
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
