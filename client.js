console.log('Javascript');
var randNum = 0;
  $('document').ready(function() {
    console.log('document ready');
    displayName();
//Images appended to the DOM for the Game
    $('.container').append('<div data-id="1"><img src="https://github.com/emilykuplic.png"></div>');
    $('.container').append('<div data-id="2"><img src="https://github.com/jamesleary.png"></div>');
    $('.container').append('<div data-id="3"><img src="https://github.com/AlecSands.png"></div>');
    $('.container').append('<div data-id="4"><img src="https://github.com/chasewhitney.png"></div>');
    $('.container').append('<div data-id="5"><img src="https://github.com/CatYanish.png"></div>');

  $('.container').on('click', 'div', clickHandlers);

 hover();

}); // end of doc ready
// Adding a border for correct and incorrect answers
// Added a 2 second delay and remove class to reset the quiz
function clickHandlers (){
  console.log('clicked');
  if ($(this).data("id") == randNum) {
    //Need to define $(this)within the original function so we can call
    //it within the inner setTimeout function
    var $el = $(this);
    $(this).addClass('correct');
    setTimeout(function(){
      $el.removeClass('correct');
    }, 2000);
    displayName();
  } else{
var $dl  = $(this);
    $(this).addClass('incorrect');
    setTimeout(function(){
      $dl.removeClass('incorrect');
      alert('Try again');
    }, 2000);
}
}

//Generates a random Name
function displayName(){
  randNum = randomNumber(1, 5);
  switch(randNum) {
    case 1:
        $('#random-name').text("Emily");
        break;
    case 2:
        $('#random-name').text("James");
        break;
    case 3:
        $('#random-name').text("Alec");
        break;
    case 4:
        $('#random-name').text("Chase");
        break;
    case 5:
        $('#random-name').text("Catherine");
        break;
  }
}
//Creates a random number to assign a name in above switch statment
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//hover function
function hover (){
    $('img').hover(function() {
  $( this ).animate({
    height: "150px",
    width: "150px",
  });
  $( this ).animate({
    height: "100px",
    width: "100px",
  });
});
}
