'use strict';

// COUNT CLICKS

let clickNumber = 0;
let turn = "X";

const countClicks = $('.square').on('click', function() {
    clickNumber += 1;
    console.log(clickNumber);
  });

//


const whoseTurn = $('.square').on('click', function() {
  if (clickNumber === 0 || clickNumber % 2 ){
    turn = "X";
  } else {
    turn = "O";
  } return turn;
});



const addMarker = $('.square').on('click', function(){
  $(this).append("<h1 class='game-marker'>" + turn + "</h1>").off();
});

module.exports = {
  countClicks,
  whoseTurn,
  addMarker
};
