$(document).ready(function(){
  var links = $('#pattern-nav').find('li'),
  block;

  $.each(links, function(){
    $(this).bind('click', function(e){
      e.preventDefault();
      block = $(this).find('a').attr('data-name');
      $('.pattern-right').css('display', 'none');
      $('#pattern-' + block).css('display', 'block');
    })
  })
  $('#pattern-colors').css('display', 'block');
})