console.log("Hi and welcome to my Portfolio")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

$('a[href^="#"]').on('click',function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
     'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
     window.location.hash = target;
    });
   });

$(document).ready(function () {
  $('a[href^="#work"]').click(function (event) {
    if ($(window).width() >= 1440) {
      var scrollTop = ($(window).width() >= 1920) ? 792:601;
      event.preventDefault();
      $("html, body").animate({
      scrollTop: scrollTop
    }, 800);
    }
  });
});