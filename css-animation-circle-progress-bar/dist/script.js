
window.randomize = function() {
	$('.ko-progress-circle').attr('data-progress', Math.floor(360));
}
setTimeout(window.randomize, 200);
$('.ko-progress-circle').click(window.randomize);