// GNB 메뉴

$(function(){
    var $menuBtn = $('.menu-btn')
    var $gnbWrap = $('.gnb-container')
    var $bg = $('.dim')
    var $depth1Link = $('.depth1 > li > a')
    var $depth2Link = $('.depth2 > li > a')
    var $closeBtn = $('.close-btn')
    var $body = $('body');

    $menuBtn.on('click',function(){
        $body.css('overflow','hidden');
        $gnbWrap.addClass('on');
        $bg.addClass('on');
    });

    $depth1Link.on('click',function(e){

        e.preventDefault();

        var $this = $(this)
        
        if($this.hasClass('on')){
           
        } else {
            $depth1Link.removeClass('on').next('.depth2').removeClass('on');
            $this.addClass('on').next('.depth2').addClass('on');
        }
    });

    $depth2Link.on('click',function(e){

        e.preventDefault();

        var $this = $(this)

        $this.toggleClass('on').siblings('.depth3').slideToggle();
    });

    $closeBtn.on('click',function(){
        $gnbWrap.removeClass('on');
        $bg.removeClass('on');
        $body.css('overflow','visible');
    });
});



$(function(){

    $(".banner-slide").touchSlider({
        page:1,
        useMouse:true,
        view:1,
        controls:false,
        counter: true,
        paging:false,
        speed:1000,
        autoplay:{
            enable:true,
            pauseHover:false,
            addHoverTarget:'',
            interval:7000,
        },
        initComplete: function(e) {
            var _this = this;
            var paging = '';
            var len = Math.ceil(this._len / this._view);
            for(var i = 1; i <= len; i++) {
                paging += '<button type="button" class="page">page' + i + '</button>';
            }
            $(this).next().find('.paging').html(paging).find('.page').on('click', function(e) {
                _this.go_page($(this).index());
            });
        },
        counter: function(e) {
            $(this).next().find('.page').removeClass('on').eq(e.current-1).addClass('on');
            $(this).next().find('.count').html('current : ' + e.current + ', total : ' + e.total);
        }
    });
});

$(function(){

    $(".touch-slide").touchFlow({
        paging: false,
        controls: false,
        scrollbar: true,
        // scrollbarAutoHide: true,
    });
});

$(function(){

    $(".usim .plan-slide").touchSlider({

        resize: false,
        counter: function(){
            
            var $listHeight = $('.usim .plan-slide > ul > li').height();
            var $slide = $('.usim .plan-slide');
            var $moreBtn = $('.usim .plan-btn-more');

            $slide.css({height : $listHeight});
    
            $moreBtn.on('click',function(e){

                e.preventDefault();
             
                var $this = $(this);
                var $hide = $this.siblings('.contents-wrap > ul').children('.list-item').hasClass('hide');
                var $listItem = $('.usim .list-item').height();
                var $indexHeight = $this.siblings('.contents-wrap > ul ').children('.hide').index();
                var $he = $listHeight + $listItem * $indexHeight - 13
        
                if($hide){                    
                    $this.siblings('.contents-wrap > ul').children('.list-item').removeClass('hide');
                    
                    $slide.css({height:$he});
                    
                } else {
                    $this.addClass('hide');
                }
            });
            
            
        }
    });

    $(".phone .plan-slide").touchSlider({

        resize: false,
        counter: function(){
            
            var $listHeight = $('.phone .plan-slide > ul > li').height();
            var $slide = $('.phone .plan-slide');
            var $moreBtn = $('.phone .plan-btn-more');

            $slide.css({height : $listHeight});
    
            $moreBtn.on('click',function(e){

                e.preventDefault();

                var $this = $(this);
                var $hide = $this.siblings('.contents-wrap > ul').children('.list-item').hasClass('hide');
                var $listItem = $('.phone .list-item').height();
                var $he = $listHeight + $listItem - 37
                

                console.log($listHeight + $listItem);
        
                if($hide){                    
                    $this.siblings('.contents-wrap > ul').children('.list-item').removeClass('hide');
                    $slide.css({height:$he});
                    $this.addClass('hide');
                } else {
                    
                }
            });
            
            
        }
    });
});

$(function(){

    var $window = $(window);

    $window.scroll(function(){

        var $tabMenu = $('.tab-menu');

        var a = $window.scrollTop() + $window.height();

        $tabMenu.each(function(){

            var $this = $(this);

            var b = $(this).offset().top;

            if(a >= b){
                $this.children('ul').children('li').eq(0).addClass('on');
            }else{
                $this.children('ul').children('li').removeClass('on');
            }
        });
    })

});

$(function(){

    $(".phone .banner-slide").touchSlider({
        page:1,
        useMouse:true,
        view:1,
        controls:false,
        counter: true,
        paging:false,
        speed:1000,
        autoplay:{
            enable:true,
            pauseHover:false,
            addHoverTarget:'',
            interval:7000,
        },
        initComplete: function(e) {
            var _this = this;
            var paging = '';
            var len = Math.ceil(this._len / this._view);
            for(var i = 1; i <= len; i++) {
                paging += '<button type="button" class="page">page' + i + '</button>';
            }
            $(this).next().find('.paging').html(paging).find('.page').on('click', function(e) {
                _this.go_page($(this).index());
            });
        },
        counter: function(e) {
            $(this).next().find('.page').removeClass('on').eq(e.current-1).addClass('on');
            $(this).next().find('.count').html('current : ' + e.current + ', total : ' + e.total);
        }
    });
});

$(function(){

    $(".review-slide").touchSlider({
        controls: false,
    });
});

$(function(){

    $(".service-slide").touchSlider({
        controls: false,
        paging: false,
        btn_prev: $('.slide-prev'),
        btn_next: $('.slide-next'),
    });
});

