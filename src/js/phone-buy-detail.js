$(function(){

    var $quickMenu = $('.quick-menu .sub-link');

    $quickMenu.on('click',function(e){

        e.preventDefault();
        
        var $body = $('html,body');
        var $dim = $('.section-dim');
        var $subDepth2 = $('.sub-depth2');

        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $body.css('overflow','visible');
            $dim.removeClass('on');
            $subDepth2.removeClass('on');
        } else {
            $(this).addClass('on');
            $body.css('overflow','hidden');
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

    $wrap.css({ height : $he });

    $more.on('click',function(e){   

        e.preventDefault();

        var $info = $('.payment-menu .info');
        var $bottom = parseInt($info.css("bottom"));
        var $dim = $('.dim');
        var $payment = $('.payment-menu');
        var $body = $('html,body');

        if( $bottom < 1 ){
            $info.css({ bottom : $he });
            $dim.addClass('on');
            $payment.css('z-index','202');
            $body.css('overflow','hidden');
        } else {
            $info.css({ bottom : 0 });
            $dim.removeClass('on');
            $payment.css('z-index','10');
            $body.css('overflow','visible');
        }

        

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


