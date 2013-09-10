$(document).ready(function(){
  var links = $('#nav').find('li'),
  block;

  $.each(links, function(){
    $(this).bind('click', function(e){
      e.preventDefault();
      block = $(this).find('a').attr('data-name');
      $('.pattern-right').css('display', 'none');
      $('#pattern-' + block).css('display', 'block');
    })
  })
  $('#pattern-guide').css('display', 'block');
})