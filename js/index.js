
/*global $*/

setTimeout(function() {
    $('.textFly').removeClass('hidden');
}, 900);


$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('#lotus').fadeIn(1200);
    }
});

$(function() {
	
	$('#lotus').draggable();
	$('#lotus').resizable();
	
	
});