$(document).ready(function() {
    $('#foot').text(new Date().getFullYear());

    const $menuToggle = $('.menu-toggle');
    const $navItems = $('.nav-items');

    $menuToggle.on('click', () => {
    if (!$navItems.is(':visible')) {
        $navItems.show();
    } else {
        $navItems.hide();
    }
    });

    function handleResize() {
    if ($(window).width() < 480) {
        $menuToggle.css('display', 'block');
        $navItems.css('display', 'none');
    } else {
        $menuToggle.css('display', 'none');
        $navItems.css('display', 'flex');
    }
    }

    $(window).on('resize', handleResize);
    handleResize();
});