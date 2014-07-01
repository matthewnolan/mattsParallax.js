/* 
* Matts Parallax for jQuery
* Copyright 2014 Matt Nolan
* matt at redbutton.io
* https://github.com/matthewnolan
*/
 

/*
Call it like this
$(".parallax").mattsParallax(40);

Structure your HTML like this
<section class="parallax">
    <div class="parallaxBk">
        <div class="imgBackground"></div>
    </div>
    <div class="parallaxFront">
        <div class="container">Text in front</div>
    </div>
</section>
*/



// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

(function($) {
    $.fn.extend({
        mattsParallax: function() {
            var currentPos;
            var arg = arguments[0] || 40;

            return this.each(function() {

                var SELF = $(this);
                var localWindow = $(window);
                var localDocument = $(document);
                var ticking = false;

                chillScroll();
                $(document).scroll(function(event) {
                  chillScroll(event);
                });
                $(document).resize(function(event) {
                  chillScroll(event);
                });
                function chillScroll (evt) {
                  if(!ticking) {
                    ticking = true;
                    requestAnimFrame(updateElements);
                  }
                }

                function updateElements() {

                    var windowHeight = localWindow.height();
                    var documentScrollTop = localDocument.scrollTop();
                    var thisOffsetTop = SELF.offset().top;
                    var thisHeight = SELF.height();
                    currentPos = documentScrollTop + windowHeight;
                    distanceFromTop = thisOffsetTop - documentScrollTop+thisHeight;
                    percentFromTop = distanceFromTop/(windowHeight+thisHeight) * 100;
                    percentFromTopScaled = (percentFromTop * (arg / 100)).toFixed(3);
                    bloatedHeight = Math.round(100 / (1-(arg/100)));

                    if ( (currentPos > thisOffsetTop) && ( distanceFromTop > 0 )  ) {
                        SELF.find(".imgBackground").attr("style", "height: " + bloatedHeight + "%; transform:translateY(" + percentFromTopScaled +  "%); -webkit-transform:translateY(" + percentFromTopScaled +  "%); -moz-transform:translateY(" + percentFromTopScaled +  "%);");
                    }
                    ticking = false;
                };
            });
        }

    });
})(jQuery);
