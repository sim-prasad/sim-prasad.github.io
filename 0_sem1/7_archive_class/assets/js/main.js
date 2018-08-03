$(document).ready(function() {

    $('.menu').mouseenter(function() {
      $('.nav').addClass('active');
    });

      $('.nav').mouseleave(function() {
      $('.nav').removeClass('active');
    });
  //*the button actions are below... *//

$('.b-covers').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.covers').addClass('show');
  $('.item.covers').removeClass('hide');
});


$('.b-headlines').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.headlines').addClass('show');
  $('.item.headlines').removeClass('hide');
});

$('.b-models').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.models').addClass('show');
  $('.item.models').removeClass('hide');
});



// sample

$('.sample').click(function(){

});

$('.sample').addClass('classname');
$('.sample').removeClass('classname');


// dont remove line
});
