 $(document).ready(function() {
   $('body').on('click', '#home_link', function() {
      setTimeout(function(){
         $(window).trigger('resize');
      })

     $(document).foundation({
        orbit: {
          animation: 'slide',
          timer_speed: 2000,
          pause_on_hover: true,
          animation_speed: 1000,
          navigation_arrows: false,
          bullets: false
        }
      })
    })
   $('#home_link').click()
  })
 //fix Foundation bug to trigger orbit when page is rendered without reload



