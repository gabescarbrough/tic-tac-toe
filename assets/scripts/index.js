'use strict';

const authEvents = require('./auth/events.js');
require('./game/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
});
