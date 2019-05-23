// GNB 메뉴

$(function(){
    var $menuBtn = $('.menu-btn')
    var $gnbWrap = $('.gnb-container')
    var $bg = $('.dim')
    var $depth1Link = $('.depth1 > li > a')
    var $depth2Link = $('.depth2 > li > a')
    var $closeBtn = $('.close-btn')
    var $body = $('body');
    var $window = $(window);

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
        controls:false,
        paging:false,
        speed:1000,
        autoplay:{
            enable:true,
            pauseHover:false,
            addHoverTarget:'',
            interval:5000,
        },
      
        counter: function(e) {
            $(this).children('.count').children('.box').children('.current').html(e.current);
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
    var $tabLink1 = $('.tab-link1')
    var $tabLink2 = $('.tab-link2')

    $window.scroll(function(){

        var a = $window.scrollTop() + $window.height() - 500;

        var $tabMenu = $('.tab-menu');

        $tabMenu.each(function(){

            var $this = $(this);

            var b = $this.offset().top;

            var c = $this.next('.tab-contents').offset().top;

            var index = $this.index($tabMenu);

            if( a >= b && c ){
                $this.children('ul').children('li').eq(index).addClass('on');
                $this.next('.tab-contents').addClass('on');
            }else{
                $this.children('ul').children('li').eq(index).removeClass('on');
                $this.next('.tab-contents').removeClass('on');
            }
        });
    })

    $tabLink1.on('click',function(e){

        e.preventDefault();

        var position = $('#usim-container').offset();

        $('html,body').stop().animate({scrollTop:position.top - 85},500);
    });

    $tabLink2.on('click',function(e){

        e.preventDefault();
 
        var position = $('#phone-container').offset();

        $('html,body').stop().animate({scrollTop:position.top - 85},500);
        
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

$(function(){

    var $topBtn = $('.top-link');
    
    $topBtn.on('click',function(e){

        e.preventDefault();

        var position = $('html,body').offset(); 

        $('html,body').stop().animate({scrollTop : position.top},500);
    });

    $(window).scroll(function(){

        var position = $(window).scrollTop();
        var $header = $('.common-header');

        if( position ){
            $('.top-link').addClass('on');
            $header.addClass('on');
        } else {
            $('.top-link').removeClass('on');
            $header.removeClass('on');
        }
    });
});



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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwaG9uZS1idXktZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHTkIg66mU64m0XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgJG1lbnVCdG4gPSAkKCcubWVudS1idG4nKVxyXG4gICAgdmFyICRnbmJXcmFwID0gJCgnLmduYi1jb250YWluZXInKVxyXG4gICAgdmFyICRiZyA9ICQoJy5kaW0nKVxyXG4gICAgdmFyICRkZXB0aDFMaW5rID0gJCgnLmRlcHRoMSA+IGxpID4gYScpXHJcbiAgICB2YXIgJGRlcHRoMkxpbmsgPSAkKCcuZGVwdGgyID4gbGkgPiBhJylcclxuICAgIHZhciAkY2xvc2VCdG4gPSAkKCcuY2xvc2UtYnRuJylcclxuICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgICRtZW51QnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywnaGlkZGVuJyk7XHJcbiAgICAgICAgJGduYldyYXAuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGJnLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRkZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpLm5leHQoJy5kZXB0aDInKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJykubmV4dCgnLmRlcHRoMicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDJMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxyXG5cclxuICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnb24nKS5zaWJsaW5ncygnLmRlcHRoMycpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkY2xvc2VCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICRnbmJXcmFwLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRiZy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywndmlzaWJsZScpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJChcIi5iYW5uZXItc2xpZGVcIikudG91Y2hTbGlkZXIoe1xyXG4gICAgICAgIGNvbnRyb2xzOmZhbHNlLFxyXG4gICAgICAgIHBhZ2luZzpmYWxzZSxcclxuICAgICAgICBzcGVlZDoxMDAwLFxyXG4gICAgICAgIGF1dG9wbGF5OntcclxuICAgICAgICAgICAgZW5hYmxlOnRydWUsXHJcbiAgICAgICAgICAgIHBhdXNlSG92ZXI6ZmFsc2UsXHJcbiAgICAgICAgICAgIGFkZEhvdmVyVGFyZ2V0OicnLFxyXG4gICAgICAgICAgICBpbnRlcnZhbDo1MDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICAgIGNvdW50ZXI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmNvdW50JykuY2hpbGRyZW4oJy5ib3gnKS5jaGlsZHJlbignLmN1cnJlbnQnKS5odG1sKGUuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoXCIudG91Y2gtc2xpZGVcIikudG91Y2hGbG93KHtcclxuICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGxiYXI6IHRydWUsXHJcbiAgICAgICAgLy8gc2Nyb2xsYmFyQXV0b0hpZGU6IHRydWUsXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJChcIi51c2ltIC5wbGFuLXNsaWRlXCIpLnRvdWNoU2xpZGVyKHtcclxuXHJcbiAgICAgICAgcmVzaXplOiBmYWxzZSxcclxuICAgICAgICBjb3VudGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyICRsaXN0SGVpZ2h0ID0gJCgnLnVzaW0gLnBsYW4tc2xpZGUgPiB1bCA+IGxpJykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZhciAkc2xpZGUgPSAkKCcudXNpbSAucGxhbi1zbGlkZScpO1xyXG4gICAgICAgICAgICB2YXIgJG1vcmVCdG4gPSAkKCcudXNpbSAucGxhbi1idG4tbW9yZScpO1xyXG5cclxuICAgICAgICAgICAgJHNsaWRlLmNzcyh7aGVpZ2h0IDogJGxpc3RIZWlnaHR9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAkbW9yZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciAkaGlkZSA9ICR0aGlzLnNpYmxpbmdzKCcuY29udGVudHMtd3JhcCA+IHVsJykuY2hpbGRyZW4oJy5saXN0LWl0ZW0nKS5oYXNDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRsaXN0SXRlbSA9ICQoJy51c2ltIC5saXN0LWl0ZW0nKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciAkaW5kZXhIZWlnaHQgPSAkdGhpcy5zaWJsaW5ncygnLmNvbnRlbnRzLXdyYXAgPiB1bCAnKS5jaGlsZHJlbignLmhpZGUnKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRoZSA9ICRsaXN0SGVpZ2h0ICsgJGxpc3RJdGVtICogJGluZGV4SGVpZ2h0IC0gMTNcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKCRoaWRlKXsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCcuY29udGVudHMtd3JhcCA+IHVsJykuY2hpbGRyZW4oJy5saXN0LWl0ZW0nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICRzbGlkZS5jc3Moe2hlaWdodDokaGV9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnBob25lIC5wbGFuLXNsaWRlXCIpLnRvdWNoU2xpZGVyKHtcclxuXHJcbiAgICAgICAgcmVzaXplOiBmYWxzZSxcclxuICAgICAgICBjb3VudGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyICRsaXN0SGVpZ2h0ID0gJCgnLnBob25lIC5wbGFuLXNsaWRlID4gdWwgPiBsaScpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICB2YXIgJHNsaWRlID0gJCgnLnBob25lIC5wbGFuLXNsaWRlJyk7XHJcbiAgICAgICAgICAgIHZhciAkbW9yZUJ0biA9ICQoJy5waG9uZSAucGxhbi1idG4tbW9yZScpO1xyXG5cclxuICAgICAgICAgICAgJHNsaWRlLmNzcyh7aGVpZ2h0IDogJGxpc3RIZWlnaHR9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAkbW9yZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRoaWRlID0gJHRoaXMuc2libGluZ3MoJy5jb250ZW50cy13cmFwID4gdWwnKS5jaGlsZHJlbignLmxpc3QtaXRlbScpLmhhc0NsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGxpc3RJdGVtID0gJCgnLnBob25lIC5saXN0LWl0ZW0nKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciAkaGUgPSAkbGlzdEhlaWdodCArICRsaXN0SXRlbSAtIDM3XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkbGlzdEhlaWdodCArICRsaXN0SXRlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZigkaGlkZSl7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygnLmNvbnRlbnRzLXdyYXAgPiB1bCcpLmNoaWxkcmVuKCcubGlzdC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2xpZGUuY3NzKHtoZWlnaHQ6JGhlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gICAgdmFyICR0YWJMaW5rMSA9ICQoJy50YWItbGluazEnKVxyXG4gICAgdmFyICR0YWJMaW5rMiA9ICQoJy50YWItbGluazInKVxyXG5cclxuICAgICR3aW5kb3cuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBhID0gJHdpbmRvdy5zY3JvbGxUb3AoKSArICR3aW5kb3cuaGVpZ2h0KCkgLSA1MDA7XHJcblxyXG4gICAgICAgIHZhciAkdGFiTWVudSA9ICQoJy50YWItbWVudScpO1xyXG5cclxuICAgICAgICAkdGFiTWVudS5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGIgPSAkdGhpcy5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgICAgICB2YXIgYyA9ICR0aGlzLm5leHQoJy50YWItY29udGVudHMnKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgkdGFiTWVudSk7XHJcblxyXG4gICAgICAgICAgICBpZiggYSA+PSBiICYmIGMgKXtcclxuICAgICAgICAgICAgICAgICR0aGlzLmNoaWxkcmVuKCd1bCcpLmNoaWxkcmVuKCdsaScpLmVxKGluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgICAgICR0aGlzLm5leHQoJy50YWItY29udGVudHMnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5lcShpbmRleCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5uZXh0KCcudGFiLWNvbnRlbnRzJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgJHRhYkxpbmsxLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gJCgnI3VzaW0tY29udGFpbmVyJykub2Zmc2V0KCk7XHJcblxyXG4gICAgICAgICQoJ2h0bWwsYm9keScpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6cG9zaXRpb24udG9wIC0gODV9LDUwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkdGFiTGluazIub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gXHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gJCgnI3Bob25lLWNvbnRhaW5lcicpLm9mZnNldCgpO1xyXG5cclxuICAgICAgICAkKCdodG1sLGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOnBvc2l0aW9uLnRvcCAtIDg1fSw1MDApO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKFwiLnJldmlldy1zbGlkZVwiKS50b3VjaFNsaWRlcih7XHJcbiAgICAgICAgY29udHJvbHM6IGZhbHNlLFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoXCIuc2VydmljZS1zbGlkZVwiKS50b3VjaFNsaWRlcih7XHJcbiAgICAgICAgY29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgIHBhZ2luZzogZmFsc2UsXHJcbiAgICAgICAgYnRuX3ByZXY6ICQoJy5zbGlkZS1wcmV2JyksXHJcbiAgICAgICAgYnRuX25leHQ6ICQoJy5zbGlkZS1uZXh0JyksXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICR0b3BCdG4gPSAkKCcudG9wLWxpbmsnKTtcclxuICAgIFxyXG4gICAgJHRvcEJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9ICQoJ2h0bWwsYm9keScpLm9mZnNldCgpOyBcclxuXHJcbiAgICAgICAgJCgnaHRtbCxib2R5Jykuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcCA6IHBvc2l0aW9uLnRvcH0sNTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIHZhciAkaGVhZGVyID0gJCgnLmNvbW1vbi1oZWFkZXInKTtcclxuXHJcbiAgICAgICAgaWYoIHBvc2l0aW9uICl7XHJcbiAgICAgICAgICAgICQoJy50b3AtbGluaycpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkaGVhZGVyLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy50b3AtbGluaycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRxdWlja01lbnUgPSAkKCcucXVpY2stbWVudSAuc3ViLWxpbmsnKTtcclxuXHJcbiAgICAkcXVpY2tNZW51Lm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgJGJvZHkgPSAkKCdodG1sLGJvZHknKTtcclxuICAgICAgICB2YXIgJGRpbSA9ICQoJy5zZWN0aW9uLWRpbScpO1xyXG4gICAgICAgIHZhciAkc3ViRGVwdGgyID0gJCgnLnN1Yi1kZXB0aDInKTtcclxuXHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRib2R5LmNzcygnb3ZlcmZsb3cnLCd2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICRkaW0ucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzdWJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkZGltLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc3ViRGVwdGgyLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAkKFwiLnBob25lLXNsaWRlXCIpLnRvdWNoU2xpZGVyKHtcclxuICAgICAgICBjb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgcGFnaW5nOiB0cnVlLFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICAgJChcIi5ldmVudC1zbGlkZVwiKS50b3VjaFNsaWRlcih7XHJcbiAgICAgICAgY29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgIHBhZ2luZzogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTp7XHJcbiAgICAgICAgICAgIGVuYWJsZTp0cnVlLFxyXG4gICAgICAgICAgICBwYXVzZUhvdmVyOmZhbHNlLFxyXG4gICAgICAgICAgICBhZGRIb3ZlclRhcmdldDonJyxcclxuICAgICAgICAgICAgaW50ZXJ2YWw6NzAwMCxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkbW9yZSA9ICQoJy5tb3JlJyk7XHJcblxyXG4gICAgJG1vcmUub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJGluZm8gPSAkKCcuaW5mbycpO1xyXG4gICAgICAgIHZhciAkd3JhcCA9ICQoJy53cmFwJyk7XHJcbiAgICAgICAgdmFyICRib2R5ID0gJCgnaHRtbCxib2R5Jyk7XHJcbiAgICAgICAgdmFyICRkaW0gPSAkKCcuZGltJyk7XHJcbiAgICAgICAgdmFyICRwYXlNZW50ID0gJCgnLnBheW1lbnQtbWVudScpO1xyXG5cclxuICAgICAgICBpZigkd3JhcC5oYXNDbGFzcygnb24nKSl7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgJHdyYXAucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRpbmZvLmNzcyh7Ym90dG9tOjB9KVxyXG4gICAgICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAkZGltLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkcGF5TWVudC5jc3MoJ3otaW5kZXgnLCcxMCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICR3cmFwLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkaW5mby5jc3Moe2JvdHRvbTo0MjB9KTtcclxuICAgICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkZGltLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkcGF5TWVudC5jc3MoJ3otaW5kZXgnLCcyMDAnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRzZWxlY3RMaW5rID0gJCgnLnNlbGVjdC1saW5rJylcclxuXHJcbiAgICAkc2VsZWN0TGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkc2VsZWN0SW5mbyA9ICQoJy5zZWxlY3QtaW5mbycpO1xyXG5cclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvbicpICYmICRzZWxlY3RJbmZvLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiJdfQ==
