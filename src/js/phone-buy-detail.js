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

    var $more = $('.more');

    $more.on('click',function(e){

        e.preventDefault();

        var $info = $('.info');
        var $wrap = $('.wrap');
        var $body = $('html,body');
        var $dim = $('.dim');
        var $payMent = $('.payment-menu');

        if($wrap.hasClass('on')){                 
            $wrap.removeClass('on');
            $info.css({bottom:0})
            $body.css('overflow','visible');
            $dim.removeClass('on');
            $payMent.css('z-index','10');
        } else {
            $wrap.addClass('on');
            $info.css({bottom:420});
            $body.css('overflow','hidden');
            $dim.addClass('on');
            $payMent.css('z-index','200');
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

