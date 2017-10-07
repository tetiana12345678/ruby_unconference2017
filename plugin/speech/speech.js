/*
 * Speech
 *
 * By Keith Salisbury <keithsalisbury@gmail.com>, September 2016
 */

var Speech = (function() {

  function ready(event) {
    // console.log("speech ready!")
    var indexh = event.indexh;
    var indexv = event.indexv;
    var currentSlide = currentSlide;
  }

  function slideChanged(event) {
    var indexh = event.indexh;
    var indexv = event.indexv;
    var currentSlide = event.currentSlide;
    var previousSlide = event.previousSlide;
    var element = currentSlide.querySelector('.speech')
    if (element) {

      console.log("got here")

      var $el = $(element), text = $.trim($el.text()),
          words = text.split(" "), html = "";

      for (var i = 0; i < words.length; i++) {
          html += "<span>" + words[i] + ((i+1) === words.length ? "" : " ") + "</span>";
      };
      $el.html(html).children().fadeTo(0,0).each(function(i){
        var speed = 200
        var delay = Math.round(parseInt(speed) + Math.random() * speed / 100)
        $(this).delay(i * delay).fadeTo(500,1);
      });
      $el.find("span").promise().done(function(){
          $el.text(function(i, text){
             return $.trim(text);
          });
      });

    }
  }

  Reveal.addEventListener( 'ready', ready )
  Reveal.addEventListener( 'slidechanged', slideChanged );

})();
