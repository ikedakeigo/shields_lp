jQuery(function ($) { 
    $('.js-faq-question').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('is-open');
    });

});
