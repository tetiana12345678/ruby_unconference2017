/*
 * KenBurnsEffect css.
 *
 * By Keith Salisbury <keithsalisbury@gmail.com>, September 2016
 */

var KenBurnsEffect = (function() {

  var previous;

  function addEffect(background, speed) {
    console.log("kenburns addEffect!")
    if (previous) {
      removeEffect(previous)
    }
    background.style.animationName = "kenburns";
  	background.style.animationDuration = speed ? speed : "192s";
    background.style.animationIterationCount = "infinite";
    background.style.animationDirection = "alternate";
    background.style.animationFillMode = "both";
    previous = background;
  }

  function removeEffect(background) {
    console.log("kenburns removeEffect!")
    previous.style.animationName = "none";
    previous.style.animationDuration = "0s";
  }

  function ready(event) {
    var indexh = event.indexh;
    var indexv = event.indexv;
    var currentSlide = event.currentSlide;
    checkSlide(currentSlide, indexh, indexv);
  }

  function slideChanged(event) {
    var indexh = event.indexh;
    var indexv = event.indexv;
    var currentSlide = event.currentSlide;
    var previousSlide = event.previousSlide;
    checkSlide(currentSlide, indexh, indexv);
    // removeEffect(previousSlide);
  }

  function checkSlide(slide, h, v) {
    var hasKen = slide.hasAttribute('data-kenburns-animation');
    var speed = slide.getAttribute('data-kenburns-animation-speed');
    if (hasKen) {
      background = Reveal.getSlideBackground(h, v);
      addEffect(background, speed);
    }
  }

  Reveal.addEventListener( 'ready', ready )
  Reveal.addEventListener( 'slidechanged', slideChanged );

})();


// Example with Jquery
// var supportedFlag = jquery.keyframe.isSupported();
// $.keyframe.define([{
//     name: 'kenburn123',
//     "0%":    { transform: translate3d(0px, 0px, 0px) },
//     "100%":  { transform: translate3d(-40px, -40px, 500px) }
// }]);
// $(background).playKeyframe({
//   name: 'kenburn123', // name of the keyframe you want to bind to the selected element
//   duration: 90, // [optional, default: 0, in ms] how long you want it to last in     milliseconds
//   timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
//   delay: 0, //[optional, default: 0, in ms]  how long you want to wait before the animation starts in milliseconds, default value is 0
//   repeat: 'infinite', //[optional, default:1]  how many times you want the animation to repeat, default value is 1
//   direction: 'alternate', //[optional, default: 'normal']  which direction you want the frames to flow, default value is normal
//   fillMode: 'running', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
//   complete: function(){} //[optional]  Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
// });
