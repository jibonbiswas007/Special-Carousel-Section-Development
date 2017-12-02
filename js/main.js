(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        
    });
    
    jQuery(window).load(function(){
        $('.product-area-wrap').owlCarousel({
        loop:true,
        nav:false,
        smartSpeed:2000,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
        
    });
    
    
}(jQuery));