$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 0,
        URLhashListener: true,
        autoplayHoverPause: false,
        startPosition: 'URLHash',
        smartSpeed : 1500,
    });

    $(".disable-owl-swipe").on("mousedown", function(e) {
        // Prevent carousel swipe
        e.stopPropagation();
    });

});