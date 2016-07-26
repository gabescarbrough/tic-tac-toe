'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const showSignUpModal = function showPasswordModal(){
  $('#sign-up-modal').modal('show');
};

const showSignInModal = function showPasswordModal(){
  $('#sign-in-modal').modal('show');
};

const showChangePasswordModal = function showPasswordModal(){
  $('#change-password-modal').modal('show');
};



const addHandlers = () => {
  $('#sign-up-modal-link').on('click', showSignUpModal);
  $('#sign-in-modal-link').on('click', showSignInModal);
  $('#change-password-modal-link').on('click', showChangePasswordModal);
};

module.exports = {
  addHandlers,
};
