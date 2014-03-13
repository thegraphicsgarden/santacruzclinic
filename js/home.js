// JavaScript Document
$homeSliderPadding = 10;

$sliderAutoLoop = true;
$ct = 1;

(function(e){
	e(function(){
	 	$( document ).ready(function() {
			resizeHomeSlider();
		});
		$( window ).resize(function() {
			resizeHomeSlider();
		});
	})
})(jQuery);

function resizeHomeSlider () {
	$height = $(window).height() - $homeSliderPadding;
	$titleHeight = $(".homeSlider .bkg .container .row .col-md-12").height();
	
	$(".homeSlider .bkg .container").css({
		"height": $height,
		"padding-top": ($height - $titleHeight)/2
	});
	$(".bkg").css({
		"height": $height
	});
}

//fade slider background
(function(e){
	e(function(){
		$(".sliderNav a").click( function() {			
			moveSlides( $(this) );
		});
	})
})(jQuery);

function moveSlides ($link) {
	$newNum = $link.attr("data-slideNum");
	$oldBullet = $(".sliderNav a.active");
			
	//if new Slide
	if ( $(".container.slide.active").attr("data-backgroundImage") != $newNum) {
		$newActiveDiv = $("[ data-backgroundImage='" + $newNum + "']");
		$oldActiveDiv = $(".container.slide.active");
				
		$newActiveDiv.addClass("active");
		$newActiveDiv.addClass("fadeInElement");
		$oldActiveDiv.addClass("fadeOutElement");
				
		$link.addClass("active");
		$link.html("<img src='./img/slide-bullet-active.png' />");
		$oldBullet.removeClass("active");
		$oldBullet.html("<img src='./img/slide-bullet-null.png' />");
				
		setTimeout( function() {
			$oldActiveDiv.removeClass("active");
			$oldActiveDiv.removeClass("fadeInElement");					
			$oldActiveDiv.removeClass("fadeOutElement");
		},500);
		
	}
}

(function(e){
	e(function(){
		$('.fourThumbs .container #reveals .col-md-3.rotate').mouseenter(function(){
			alert("in");
			$(this).find('.card').addClass('flipped');
			$(this).mouseleave( function() {
				$(this).find('.card').removeClass('flipped');
			});
			/*$(this).find('.card').addClass('flipped').mouseleave(function(){
				$(this).removeClass('flipped');
			});*/
			return false;
		});
	})
})(jQuery);
