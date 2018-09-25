// change is-checked class on buttons
$('.filters').click(function(event) {
  var $target = $( event.currentTarget );
  $target.toggleClass('is-checked');
});

$( ".module-bg" ).click(function() {
  var $target = $( event.currentTarget );
  $target.toggleClass('flip');
});
