
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
    if($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
        $('#SuitMe').fadeIn(2000);
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
          .removeClass("hidden")
          .addClass("ui-state-highlight")
          .removeClass("formToRight", 1500).delay(500);

          $(".bgSectionTwo") 
          .css('background-image', "url(../images/22.jpg)")
          .find('p')
          .html("SUITS GOOD!");
          $('.contacts')
          .addClass("ui-state-highlight")
          .removeClass('formToRight', 1500);
          $('#lotus')
        //  .hide( "slow" );
          .remove(),500;
          
      }
    });
	
  $( function() {
    var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });
  } );
	
	
	$(document).ready(function() {
 
$('body').append('<div class="button-up" style="background:red;opacity: 0.7;width: 200px;height:100px;position: fixed;left: 50%;bottom: 0px;cursor: pointer;text-align: center;line-height: 100px;color: #45688E;">TAKE ME UP</div>');
 
$ (window).scroll (function () {
if ($ (this).scrollTop () > 1500) {
$ ('.button-up').fadeIn();
} else {
$ ('.button-up').fadeOut();
}
});
 
$('.button-up').click(function(){
$('body,html').animate({
scrollTop: 0
}, 250);
return false;
});
 
$('.button-up').hover(function() {
$(this).animate({
'opacity':'1',
}).css({'background-color':'#E1E7ED','color':'#45688E'});
}, function(){
$(this).animate({
'opacity':'0.7'
}).css({'background':'none','color':'#45688E'});;
});
 
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


$(document).ready(function(){
    $('.go').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); 
        }
	    return false; 
    });
});


