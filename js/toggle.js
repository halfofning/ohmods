// change is-checked class on buttons
$('.filters').click(function(event) {
  var $target = $( event.currentTarget );
  $target.toggleClass('is-checked');
});
