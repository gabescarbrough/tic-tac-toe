'use strict';

const app = require('./app');
const getFormFields = require('../../lib/get-form-fields');

const index = function () {
  return $.ajax({
    url: app.api + '/games',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'GET',
  });
};

// const show = function (form) {
//   let data = getFormFields(form);
//   let id = data.game.id;
//
//   return $.ajax({
//     url: app.api + '/games/' + id,
//     method: 'GET',
//   });
// };

const createGame = function () {
  return $.ajax({
    url: app.api + '/games',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
    method: 'POST',
  });
};

// const destroy = function (form) {
//   let data = getFormFields(form);
//   let id = data.game.id;
//   return $.ajax({
//     url: app.api + '/games/' + id,
//     method: 'DELETE',
//   });
// };
//
// const update = function (form) {
//   let data = getFormFields(form);
//   let id = data.game.id;
//   return $.ajax({
//     url: app.api + '/games/' + id,
//     method: 'PATCH',
//     data: data,
//   });
// };

module.exports = {
  createGame,
};
