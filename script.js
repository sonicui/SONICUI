$(document).ready(function() {
    $('.menu-icon').click(()=>{
        $('.main-menu').toggleClass('open-main-menu');
    })

    // ------ Manage cursor background ------
    var cx = 0;
    var cy = 0;
    var cz = 0;
    var st = 0;

    // Update cursor
    function update_cursor() {
        $('.cursor-bg').css({
            top: cy,
            left: cx
        });
    }

    // update cursor on Mouse move
    $(this).mousemove(function (e) {
        cx = e.pageX;
        cy = e.pageY;
        update_cursor()
    });

    // Update cursor on scroll
    $(this).scroll(function () { 
        st != $(document).scrollTop() && (cy -= st, st = $(document).scrollTop(), cy += st),
        update_cursor()
    });

    // ------ Theme changer ------
    $('.theme-btn').click(function(){
        $('html').toggleClass('dark'),
        $('.theme-btn i').toggleClass('fa-sun fa-moon')
    });

    // ------- Tilt Effect -------
    $('.js-tilt').tilt({
        scale: 1.03
    })
    AOS.init();
})