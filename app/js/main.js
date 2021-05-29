$(function () {

    $('li').on('click', function () {
        $('li').removeClass('active');
        $(this).toggleClass('active');
    });

    var mixer = mixitup('.portfolio__content-box');

});