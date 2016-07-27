'use strict';

// COUNT CLICKS

let clickNumber = 0;
let currentPlayer = "x";


const countClicks = function() {
    clickNumber += 1;
    console.log(clickNumber);
  };

//


const whoseTurn = function() {
  if (clickNumber === 0 || clickNumber % 2 ){
    currentPlayer = "x";
  } else {
    currentPlayer = "o";
  } return currentPlayer;
};

const addMarker = function(){
  // adds visual marker
  $(this).append("<h1 class='game-marker'>" + currentPlayer + "</h1>").off();
  // adds data to data-square HTML attribute
  $(this).data().value = currentPlayer;
};


const makeBoardArray = function() {
  let currentBoard = [];

  for (let i = 0; i < 9; i++) {
    currentBoard.push($('[data-square=' + i + ']').data().value);
  } return currentBoard;
};



const addHandlers = () => {
  $('.square').on('click', countClicks);
  $('.square').on('click', whoseTurn);
  $('.square').on('click', addMarker);
};

module.exports = {
  addHandlers
};
