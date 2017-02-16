function checkTic(eventObject) {
  if ($('.box').html() === "X") {
  window.alert('Box 1 is an X')
  }
};

$(document).on('ready', function() {
  $('.box').on('click', formLetter);
  $('.box').on('click', checkTic);

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

});
