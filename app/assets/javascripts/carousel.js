$(document).ready(function() {
  setTimeout(loadFoundation, 50)
})
 //Foundation needs to load after content is rendered to DOM

function loadFoundation() {
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
}


