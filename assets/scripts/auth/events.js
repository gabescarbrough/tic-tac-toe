'use strict';

const getFormFields = require('../../../lib/get-form-fields');


const showChangePasswordModal = function showPasswordModal(){
  $('#change-password-modal').modal('show');
};



const addHandlers = () => {
  $('#change-password-modal-link').on('click', showChangePasswordModal);
};

module.exports = {
  addHandlers,
};
