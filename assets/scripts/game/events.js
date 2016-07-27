'use strict';

const addMarker = $(".square").on('click', function(){
  $(this).append('<h1 class="game-marker X">X</h1>').off();
});

module.exports = {
  addMarker,
};
