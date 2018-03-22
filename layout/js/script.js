$(document).ready(function(){
	$('.slick_slide').slick({
        autoplay: false,
        dots: true,
        arrows: true,
        draggable: false ,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/angel-left.png" alt="arrow-left" /></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/angel-right.png" alt="arrow-right" /></button>',
        responsive: [
            {
                breakpoint: 979,
                settings: {
                	arrows: false,
                    dots: false,
                    swipe: true
                }
            }
        ]
	});
    
    $(".ui-menu ").customScrollbar({
        skin: "default-skin", 
        hScroll: false,
        updateOnWindowResize: true
    });
});

$( function() {
	$( "#number" )
		.selectmenu()
		.selectmenu( "menuWidget" )
		.addClass( "overflow" );
} );