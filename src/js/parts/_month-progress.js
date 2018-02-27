(function($) {

    $('.tabs-timeline').on('click', '.tabs__buttons', function(){


        console.log(10);

        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.tabs-timeline').find($('.tabs__buttons')).on('click', 'tabs__btn:not(.active)', function () {


    });


})(jQuery);











/*
(function($) {

    function createTabs(tabsClass) {

        $(tabsClass).each(function () {
            $(this).find($('ul.tabs__buttons')).on('click', 'tabs__btn:not(.active)', function () {
                $(this).addClass('active').siblings().removeClass('active');
                $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
            });
        });
    }

    createTabs('.tabs-timeline');

})(jQuery);
*/
