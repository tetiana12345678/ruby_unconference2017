/*
 * Teletype
 *
 * By Keith Salisbury <keithsalisbury@gmail.com>, September 2016
 */

 // jQuery.fn.center = function () {
 //    //  this.css("position","absolute");
 //     this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
 //                                                 $(window).scrollTop()) + "px");
 //    //  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
 //                                                //  $(window).scrollLeft()) + "px");
 //     return this;
 // }
 //
var Teletype = (function() {

  function addTeletyped(event) {
  };

  function removeTeletyped(event) {
  };

  function ready(event) {
    // console.log("teletype ready!")
    var indexh = event.indexh;
    var indexv = event.indexv;
    var currentSlide = currentSlide;
  }

  function slideChanged(event) {
    var indexh = event.indexh;
    var indexv = event.indexv;
    var currentSlide = event.currentSlide;
    var previousSlide = event.previousSlide;
    var element = currentSlide.querySelector('.teletype')
    if (element) {
      element = $(element)
      /**
       * teletyping initialization
       */
      if( ! element.data( 'teletype-content' )) {
        element.data( "teletype-content", element.text())
        element.each( function() {
          console.log("teletype found!")
          var thing = $( this ).empty().teletype( {
            text: $(this).data("teletype-content").split( ';' ),
            delay: 3000,
            // preserve: true,
            // humanise: true,
            // prefix: '',
            // loop: 1,
            typeDelay: 50,
            // backward delay
            backDelay: 80,
            // cursor blink speed
            blinkSpeed: 2000,
            cursor: "\u258B",
            automaticstart: false,
            // callbackType: function( letter, current, teletype ) {
            //   if ( current.index == 2 && current.position == 13 ) {
            //     teletype.setCursor( '_' );
            //   }
            //   // console.log($(element).height())
            //   // $(element).center();
            // },
            // callbackNext: function( current, teletype ) {
            //   if ( current.index == 3 ) {
            //     teletype.setCursor( '▋' );
            //   }
            // },
            // callbackFinished: function(teletype) {
            //   console.log("finished");
            //   console.log(teletype);
            // }
          } ).reset().start();
        } );
      }
      }


        // jQuery(".teletype").each(function() {
        //
        //     jQuery(this).teletype({
        //         text: jQuery(this).find("p.command").map(function() {
        //             return jQuery(this).text().trim();
        //         }),
        //         result: jQuery(this).find("p.result").map(function() {
        //             return jQuery(this).html();
        //         }),
        //         prefix: jQuery(this).attr("data-prefix"),
        //         cursor: "\u258B",
        //         automaticstart: false
        //     });
        //
        // });
        //
        // /**
        //  * rest teletyping element
        //  */
        // jQuery(".teletypereset").click(function() {
        //     jQuery("#" + jQuery(this).attr("data-terminal")).teletype().reset().start();
        // });

  }

  Reveal.addEventListener( 'ready', ready )
  Reveal.addEventListener( 'slidechanged', slideChanged );




})();
