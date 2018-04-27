$(document).ready(function() {

    $('.menu').mouseenter(function() {
      $('.nav').addClass('active');
    });

      $('.nav').mouseleave(function() {
      $('.nav').removeClass('active');
    });
  //*the button actions are below... *//

$('.b-full').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.full').addClass('show');
  $('.item.full').removeClass('hide');
});


$('.b-vogue').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.vogue').addClass('show');
  $('.item.vogue').removeClass('hide');
});

$('.b-text').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.text').addClass('show');
  $('.item.text').removeClass('hide');
});

$('.b-models').click(function(){
  $('.item').addClass('hide');
  $('.item').removeClass('show');

  $('.item.models').addClass('show');
  $('.item.models').removeClass('hide');
});




// sample

$('.sample').click(function(){

  $('.item.red').addClass('show');
  $('.item.red').removeClass('col3of4');
  $('.item.red').removeClass('hide');
});

$('.sample').addClass('classname');
$('.sample').removeClass('classname');



// dont remove line
});
