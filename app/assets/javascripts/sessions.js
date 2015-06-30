$(document).ready(function() {
  $('#modal').on('click', function(){
    $('a.item').remove()
    //eliminate bug in Foundation tabs
  })
  $('#get_started').on('click', function(){
    $('a[href="#signup"]').click()
  })
});