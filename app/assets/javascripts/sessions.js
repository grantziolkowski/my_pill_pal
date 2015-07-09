$(document).ready(function() {
  $('body').on('click', '.modal', function(e){
    $('a.item').remove()
    //eliminate bug in Foundation tabs
  })
  $('body').on('click', '#get_started', function(){
    $('a[href="#signup"]').click()
  })
});