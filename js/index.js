
/*global $*/

setTimeout(function() {
    $('.textFly').removeClass('hidden');
}, 900);



$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 150) {
        $('#lotus').fadeIn(2000);
    }
});



$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
        $('#SuitMe').fadeIn(3000);
    }
});


(function() {
                
                var documentElem = $(document),
                    nav = $('nav'),
                    lastScrollTop = 0;
                
                documentElem.on('scroll', function() {
                    var currentScrollTop = $(this).scrollTop();
                    
                    //scroll down
                    if ( currentScrollTop > lastScrollTop ) nav.addClass('hidden');
                    //scroll up
                    else nav.removeClass('hidden');
                    
                    lastScrollTop = currentScrollTop;
                });
                
                
                
            })();



$(function() {
	
	$('#lotus').draggable();
	$('#lotus').resizable();
    $( "#SuitMe" ).droppable({
      drop: function( event, ui ) {
        $(this)
          .addClass("ui-state-highlight", 1000)
          .find( "p" )
            .html("THANK YOU!");
      }
    });
	
$( function() {
    $( "#tabs" ).tabs({event: "mouseover"});
  });
	
	
});



$(document).ready(function(){
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // создаем объект
        $(window).scroll(function() {
            var yPos = +($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
            // Присваиваем значение background-position
            var coords = 'center '+ -yPos + 'px';
            // Создаем эффект Parallax Scrolling
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});



