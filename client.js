console.log('Javascript');

  $('document').ready(function() {
    console.log('document ready');
    $('.container').append('<div data-name="emily" data-id="1"><img src="https://github.com/emilykuplic.png"></div>');
    $('.container').append('<div data-name="james" data-id="2"><img src="https://github.com/jamesleary.png"></div>');
    $('.container').append('<div data-name="alec" data-id="3"><img src="https://github.com/AlecSands.png"></div>');
    $('.container').append('<div data-name="chase" data-id="4"><img src="https://github.com/chasewhitney.png"></div>');
    $('.container').append('<div data-name="catherine" data-id="5"><img src="https://github.com/CatYanish.png"></div>');

  $('.container').on('click', 'div', function() {
    if ($(this).data("id") == numName) {
      alert('yay!');
    } else{
      alert('try again');
    }



  }); // end of click listener

  var numName = randomNumber(1, 5);

  $('#random-name').text(numName);

}); // end of doc ready


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
