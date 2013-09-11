$(document).ready(function(){
  var links = $('#menu').find('li'),
  block;

  $.each(links, function(){
    $(this).bind('click', function(e){
      $(links).removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
      block = $(this).find('a').attr('data-name');
      $('.pattern-right').css('display', 'none');
      $('#pattern-' + block).css('display', 'block');
    })
  })
  $('#pattern-home').css('display', 'block');

  $('#controls #toggle-nav').bind('click', function(){
    if ( !$(this).hasClass('active') ) {
      location.reload();
    }
    $('body').removeClass('nav');
    $('.pattern-right').css('display', 'block');
    $(this).removeClass('active');
  })
})