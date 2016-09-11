
/*global $*/

setTimeout(function() {
    $('.textFly').removeClass('hidden');
}, 900);


$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 150) {
        $('#lotus').fadeIn(2000);
    }
});

$(function() {
	
	$('#lotus').draggable();
	$('#lotus').resizable();
	
  $( function() {
    $( "#tabs" ).tabs();
  } );
	
	
});

$(document).ready(function(){
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // создаем объект
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + 'px';
            // Создаем эффект Parallax Scrolling
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});