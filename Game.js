function clicky() {
$('.cell').click(function(e) {
	
	$(this).addClass('blue');
	console.log(e);
	console.log(this)
	console.log($(this));
   });
}






