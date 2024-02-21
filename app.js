jQuery(document).on('scroll', function(){
    jQuery('h1').css("left", Math.max(100 - 0.2*window.scrollY, 1) + "vw");
    })