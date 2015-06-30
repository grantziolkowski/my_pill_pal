//eliminate bug in Foundation tabs
$(document).ready(function() {
  $('#modal').on('click', function(){
    $('a.item').remove()
  })
  $('#get_started').on('click', function(){
    $('a[href="#signup"]').click()
  })

});