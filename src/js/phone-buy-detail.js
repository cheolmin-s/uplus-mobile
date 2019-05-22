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

    $('.more').on('click',function(e){

        e.preventDefault();

        var $info = $('.info').css({bottom:0});
        console.log();
        

        if($('.wrap').hasClass('on')){
            $('.wrap').removeClass('on');
        } else {
            $('.wrap').addClass('on');
            $('.info').css({bottom:420});
        }
    });
});

