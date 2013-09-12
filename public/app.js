$(document).ready(function(){
  var links = $('#menu').find('li'),
  block, state = true;

  showFull = function(){
    state = true;
    $('body').removeClass('nav');
    $('.pattern').removeAttr('style');
  }
  showMenu = function(){
    state = false;
    $('html, body').animate({scrollTop: '0px'}, 300);
    $('body').addClass('nav');
  }

  $.each(links, function(){
    $(this).bind('click', function(e){
      $(links).removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
      block = $(this).find('a').attr('data-name');
      $('.pattern').css('display', 'none');
      $('#pattern-' + block).css('display', 'block');
    })
  })

  $('#toggle-nav').bind('click', function(){
    (state) ? showMenu() : showFull();
  })
})
