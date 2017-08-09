$(document).ready(function() {

    $('.carousel').carousel({
        interval: 7000,
        pause: false
    });

    $('.carousel').on('mouseenter', function() {
        $('.carousel').carousel("pause");
    });

    $('.carousel').on('mouseleave', function() {
        $('.carousel').carousel("cycle");
    });

});