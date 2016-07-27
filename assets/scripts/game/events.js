'use strict';

// COUNT CLICKS

let clickNumber = 0;
let currentPlayer = "x";
let currentBoard = [];



const countClicks = $('.square').on('click', function() {
    clickNumber += 1;
    console.log(clickNumber);
  });

//


const whoseTurn = $('.square').on('click', function() {
  if (clickNumber === 0 || clickNumber % 2 ){
    currentPlayer = "x";
  } else {
    currentPlayer = "o";
  } return currentPlayer;
});


const makeBoardArray = function() {
  for (let i = 0; i < 9; i++) {
    currentBoard.push($('[data-square=' + i + ']').data().value);
  } return currentBoard;
};


const addMarker = $('.square').on('click', function(){
  // adds visual marker
  $(this).append("<h1 class='game-marker'>" + currentPlayer + "</h1>").off();
  // adds data to data-square HTML attribute
  $(this).data().value = currentPlayer;
});

module.exports = {
  countClicks,
  whoseTurn,
  addMarker,
  makeBoardArray
};
