// change is-checked class on buttons
$('.filters').on( 'click', 'button', function( event ) {
  var $target = $( event.currentTarget );
  $target.toggleClass('is-checked');
});
