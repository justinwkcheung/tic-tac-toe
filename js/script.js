function checkTic(eventObject) {
  if ($('#box1').html() === "X" && $('#box2').html() === 'X' && $('#box3').html() === 'X') {
    window.alert('X WINS!')
    // $('.box').empty();
  }
  else if ($('#box1').html() === "X" && $('#box4').html() === 'X' && $('#box7').html() === 'X') {
    window.alert('X WINS!')
  }
  else if ($('#box1').html() === "X" && $('#box5').html() === 'X' && $('#box9').html() === 'X') {
    window.alert('X WINS!')
  }
  else if ($('#box2').html() === "X" && $('#box5').html() === 'X' && $('#box8').html() === 'X') {
    window.alert('X WINS!')
  }
  else if ($('#box3').html() === "X" && $('#box6').html() === 'X' && $('#box9').html() === 'X') {
    window.alert('X WINS!')
  }
  else if ($('#box3').html() === "X" && $('#box5').html() === 'X' && $('#box7').html() === 'X') {
    window.alert('X WINS!')
  }
  else if ($('#box4').html() === "X" && $('#box5').html() === 'X' && $('#box6').html() === 'X') {
    window.alert('X WINS!')
  }
  else if ($('#box7').html() === "X" && $('#box8').html() === 'X' && $('#box9').html() === 'X') {
    window.alert('X WINS!')
  }
  else if ($('#box1').html() === "O" && $('#box2').html() === 'O' && $('#box3').html() === 'O') {
    window.alert('O WINS!')
  }
  else if ($('#box1').html() === "O" && $('#box4').html() === 'O' && $('#box7').html() === 'O') {
    window.alert('O WINS!')
  }
  else if ($('#box1').html() === "O" && $('#box5').html() === 'O' && $('#box9').html() === 'O') {
    window.alert('O WINS!')
  }
  else if ($('#box2').html() === "O" && $('#box5').html() === 'O' && $('#box8').html() === 'O') {
    window.alert('O WINS!')
  }
  else if ($('#box3').html() === "O" && $('#box6').html() === 'O' && $('#box9').html() === 'O') {
    window.alert('O WINS!')
  }
  else if ($('#box3').html() === "O" && $('#box5').html() === 'O' && $('#box7').html() === 'O') {
    window.alert('O WINS!')
  }
  else if ($('#box4').html() === "O" && $('#box5').html() === 'O' && $('#box6').html() === 'O') {
    window.alert('O WINS!')
  }
  else if ($('#box7').html() === "O" && $('#box8').html() === 'O' && $('#box9').html() === 'O') {
    window.alert('O WINS!')
  }
  else if ($('.box').not('.letter').length === 0) {
    window.alert("TIE GAME FOLKS!")
  }
};


$(document).on('ready', function() {
  $('.box').on('click', formLetter);
  $('.box').on('click', checkTic);
  $('.clear button').on('click', clearBoard);


  var lastLetterX = false;

  function formLetter() {
    if (lastLetterX === false) {
      $(this).html('X').addClass('letter');
      lastLetterX = true;
    }
    else {
      $(this).html('O').addClass('letter');
      lastLetterX = false;
    }
  };

  function clearBoard() {
    $('.box').empty();
    lastLetterX = false; 
  };

});
