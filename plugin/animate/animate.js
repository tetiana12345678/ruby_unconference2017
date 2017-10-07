/*
 * Animate css.
 *
 * By Keith Salisbury <keithsalisbury@gmail.com>, September 2016
 */

var Animate = (function() {

  function addAnimated(event) {
    var fragment = event.fragment;
    if ( fragment.hasAttribute( 'data-fragment-animation' ) ) {
      fragment.classList.add( 'animated' );
      fragment.getAttribute( 'data-fragment-animation' )
        .split(' ')
        .forEach(
          function (klass) {
            fragment.classList.add( klass );
          }
        );
    }
  };

  function removeAnimated(event) {
    var fragment = event.fragment;
    if (fragment.hasAttribute('data-fragment-animation') ) {
      fragment.classList.remove('animated');
      fragment.getAttribute('data-fragment-animation')
        .split(' ')
        .forEach(
          function (klass) {
            fragment.classList.remove( klass );
          }
        );
    }
  };

  Reveal.addEventListener( 'fragmentshown', addAnimated);
  Reveal.addEventListener('fragmenthidden', removeAnimated);
})();
