

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


function typeEffect(element, speed) {
    var text = $(element).text();
    $(element).html('');
    
    var i = 0;
    var timer = setInterval(function() {
                    if (i < text.length) {
                        $(element).append(text.charAt(i));
                        i++;
                    } else {
                        clearInterval(timer);
                    }
                }, speed);
}

$( document ).ready(function() {
  var speed = 75;
  var delay = $('#header-h1').text().length * speed + speed;
  typeEffect($('#header-h1'), speed);
  /*
  setTimeout(function(){
    $('#header-p').css('display', 'inline-block');
    typeEffect($('#header-p'), speed);
  }, delay);
  */
});

(function($){
        new WOW().init();
    })(jQuery);