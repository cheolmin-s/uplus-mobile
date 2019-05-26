$(function(){

    var $quickMenu = $('.quick-menu .sub-link');

    $quickMenu.on('click',function(e){

        e.preventDefault();
        
        var $body = $('html,body');
        var $dim = $('.section-dim');
        var $subDepth2 = $('.sub-depth2');

        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $body.addClass('scroll-off').on('scroll touchmove',function(e){
                e.preventDefault();
            });
            $dim.removeClass('on');
            $subDepth2.removeClass('on');
        } else {
            $(this).addClass('on');
            $body.removeClass('scroll-off').off('scroll touchmove');
            $dim.addClass('on');
            $subDepth2.addClass('on');
        }
        
    });

});

$(function(){
    $(".phone-slide").touchSlider({
        controls: false,
        paging: true,
    });
});

$(function(){
    $(".event-slide").touchSlider({
        controls: false,
        paging: true,
        autoplay:{
            enable:true,
            pauseHover:false,
            addHoverTarget:'',
            interval:7000,
        },
    });
});

$(function(){

    var $more = $('.payment-menu .more');    
    var $wrap = $('.payment-menu .wrap');
    var $he = $(window).height() / 2.2
    var $dim = $('.dim');
    var $info = $('.payment-menu .info');
    var $payment = $('.payment-menu');

    $wrap.css({ height : $he });

    $more.on('click',function(e){   

        e.preventDefault();
        
        var $bottom = parseInt($info.css("bottom"));
        var $body = $('html,body');
        var $this = $(this);

        if( $bottom < 1 ){
            $info.css({ bottom : $he });
            $dim.addClass('on');
            $payment.css('z-index','202');
            $body.addClass('scroll-off').on('scroll touchmove',function(e){
                e.preventDefault();
            });
            $this.addClass('on');
        } else {
            $info.css({ bottom : 0 });
            $dim.removeClass('on');
            $payment.css('z-index','10');
            $body.removeClass('scroll-off').off('scroll touchmove');
            $this.removeClass('on');
        }
    });

    $dim.on('click',function(){
        $payment.css('z-index','10');
        $info.css({ bottom : 0 });
        $more.removeClass('on');
    });

    
    




});

$(function(){

    var $selectLink = $('.select-link')

    $selectLink.on('click',function(e){

        e.preventDefault();

        var $selectInfo = $('.select-info');

        $(this).toggleClass('on') && $selectInfo.toggleClass('on');
    });

});


