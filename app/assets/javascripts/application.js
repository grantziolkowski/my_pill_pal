// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require foundation
//= require lib/underscore
//= require lib/backbone
//= require_tree
//= require_tree ./backbone
//= require_tree ./backbone/templates/medications

$(function(){ $(document).foundation(); });

$(document).foundation({
  orbit: {
    animation: 'slide',
    timer_speed: 2000,
    pause_on_hover: true,
    animation_speed: 1000,
    bullets: false
  }
});
$(document).ready(function(){
  $(".orbit-timer").click()
  $(".orbit-progress").remove()
  $(".orbit-slide-number").remove()
})
