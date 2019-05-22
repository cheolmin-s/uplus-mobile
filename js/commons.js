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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwaG9uZS1idXktZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29tbW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdOQiDrqZTribRcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgIHZhciAkbWVudUJ0biA9ICQoJy5tZW51LWJ0bicpXHJcbiAgICB2YXIgJGduYldyYXAgPSAkKCcuZ25iLWNvbnRhaW5lcicpXHJcbiAgICB2YXIgJGJnID0gJCgnLmRpbScpXHJcbiAgICB2YXIgJGRlcHRoMUxpbmsgPSAkKCcuZGVwdGgxID4gbGkgPiBhJylcclxuICAgIHZhciAkZGVwdGgyTGluayA9ICQoJy5kZXB0aDIgPiBsaSA+IGEnKVxyXG4gICAgdmFyICRjbG9zZUJ0biA9ICQoJy5jbG9zZS1idG4nKVxyXG4gICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xyXG5cclxuICAgICRtZW51QnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywnaGlkZGVuJyk7XHJcbiAgICAgICAgJGduYldyYXAuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGJnLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRkZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpLm5leHQoJy5kZXB0aDInKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJykubmV4dCgnLmRlcHRoMicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDJMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxyXG5cclxuICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnb24nKS5zaWJsaW5ncygnLmRlcHRoMycpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkY2xvc2VCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICRnbmJXcmFwLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRiZy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywndmlzaWJsZScpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJChcIi5iYW5uZXItc2xpZGVcIikudG91Y2hTbGlkZXIoe1xyXG4gICAgICAgIHBhZ2U6MSxcclxuICAgICAgICB1c2VNb3VzZTp0cnVlLFxyXG4gICAgICAgIHZpZXc6MSxcclxuICAgICAgICBjb250cm9sczpmYWxzZSxcclxuICAgICAgICBjb3VudGVyOiB0cnVlLFxyXG4gICAgICAgIHBhZ2luZzpmYWxzZSxcclxuICAgICAgICBzcGVlZDoxMDAwLFxyXG4gICAgICAgIGF1dG9wbGF5OntcclxuICAgICAgICAgICAgZW5hYmxlOnRydWUsXHJcbiAgICAgICAgICAgIHBhdXNlSG92ZXI6ZmFsc2UsXHJcbiAgICAgICAgICAgIGFkZEhvdmVyVGFyZ2V0OicnLFxyXG4gICAgICAgICAgICBpbnRlcnZhbDo3MDAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdENvbXBsZXRlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBwYWdpbmcgPSAnJztcclxuICAgICAgICAgICAgdmFyIGxlbiA9IE1hdGguY2VpbCh0aGlzLl9sZW4gLyB0aGlzLl92aWV3KTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFnaW5nICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInBhZ2VcIj5wYWdlJyArIGkgKyAnPC9idXR0b24+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5maW5kKCcucGFnaW5nJykuaHRtbChwYWdpbmcpLmZpbmQoJy5wYWdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZ29fcGFnZSgkKHRoaXMpLmluZGV4KCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvdW50ZXI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuZmluZCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb24nKS5lcShlLmN1cnJlbnQtMSkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmZpbmQoJy5jb3VudCcpLmh0bWwoJ2N1cnJlbnQgOiAnICsgZS5jdXJyZW50ICsgJywgdG90YWwgOiAnICsgZS50b3RhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoXCIudG91Y2gtc2xpZGVcIikudG91Y2hGbG93KHtcclxuICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICBzY3JvbGxiYXI6IHRydWUsXHJcbiAgICAgICAgLy8gc2Nyb2xsYmFyQXV0b0hpZGU6IHRydWUsXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJChcIi51c2ltIC5wbGFuLXNsaWRlXCIpLnRvdWNoU2xpZGVyKHtcclxuXHJcbiAgICAgICAgcmVzaXplOiBmYWxzZSxcclxuICAgICAgICBjb3VudGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyICRsaXN0SGVpZ2h0ID0gJCgnLnVzaW0gLnBsYW4tc2xpZGUgPiB1bCA+IGxpJykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZhciAkc2xpZGUgPSAkKCcudXNpbSAucGxhbi1zbGlkZScpO1xyXG4gICAgICAgICAgICB2YXIgJG1vcmVCdG4gPSAkKCcudXNpbSAucGxhbi1idG4tbW9yZScpO1xyXG5cclxuICAgICAgICAgICAgJHNsaWRlLmNzcyh7aGVpZ2h0IDogJGxpc3RIZWlnaHR9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAkbW9yZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciAkaGlkZSA9ICR0aGlzLnNpYmxpbmdzKCcuY29udGVudHMtd3JhcCA+IHVsJykuY2hpbGRyZW4oJy5saXN0LWl0ZW0nKS5oYXNDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRsaXN0SXRlbSA9ICQoJy51c2ltIC5saXN0LWl0ZW0nKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciAkaW5kZXhIZWlnaHQgPSAkdGhpcy5zaWJsaW5ncygnLmNvbnRlbnRzLXdyYXAgPiB1bCAnKS5jaGlsZHJlbignLmhpZGUnKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRoZSA9ICRsaXN0SGVpZ2h0ICsgJGxpc3RJdGVtICogJGluZGV4SGVpZ2h0IC0gMTNcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKCRoaWRlKXsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCcuY29udGVudHMtd3JhcCA+IHVsJykuY2hpbGRyZW4oJy5saXN0LWl0ZW0nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICRzbGlkZS5jc3Moe2hlaWdodDokaGV9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnBob25lIC5wbGFuLXNsaWRlXCIpLnRvdWNoU2xpZGVyKHtcclxuXHJcbiAgICAgICAgcmVzaXplOiBmYWxzZSxcclxuICAgICAgICBjb3VudGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyICRsaXN0SGVpZ2h0ID0gJCgnLnBob25lIC5wbGFuLXNsaWRlID4gdWwgPiBsaScpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICB2YXIgJHNsaWRlID0gJCgnLnBob25lIC5wbGFuLXNsaWRlJyk7XHJcbiAgICAgICAgICAgIHZhciAkbW9yZUJ0biA9ICQoJy5waG9uZSAucGxhbi1idG4tbW9yZScpO1xyXG5cclxuICAgICAgICAgICAgJHNsaWRlLmNzcyh7aGVpZ2h0IDogJGxpc3RIZWlnaHR9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAkbW9yZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRoaWRlID0gJHRoaXMuc2libGluZ3MoJy5jb250ZW50cy13cmFwID4gdWwnKS5jaGlsZHJlbignLmxpc3QtaXRlbScpLmhhc0NsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGxpc3RJdGVtID0gJCgnLnBob25lIC5saXN0LWl0ZW0nKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciAkaGUgPSAkbGlzdEhlaWdodCArICRsaXN0SXRlbSAtIDM3XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkbGlzdEhlaWdodCArICRsaXN0SXRlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZigkaGlkZSl7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygnLmNvbnRlbnRzLXdyYXAgPiB1bCcpLmNoaWxkcmVuKCcubGlzdC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2xpZGUuY3NzKHtoZWlnaHQ6JGhlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgICR3aW5kb3cuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGFiTWVudSA9ICQoJy50YWItbWVudScpO1xyXG5cclxuICAgICAgICB2YXIgYSA9ICR3aW5kb3cuc2Nyb2xsVG9wKCkgKyAkd2luZG93LmhlaWdodCgpO1xyXG5cclxuICAgICAgICAkdGFiTWVudS5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGIgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgICAgIGlmKGEgPj0gYil7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoXCIucGhvbmUgLmJhbm5lci1zbGlkZVwiKS50b3VjaFNsaWRlcih7XHJcbiAgICAgICAgcGFnZToxLFxyXG4gICAgICAgIHVzZU1vdXNlOnRydWUsXHJcbiAgICAgICAgdmlldzoxLFxyXG4gICAgICAgIGNvbnRyb2xzOmZhbHNlLFxyXG4gICAgICAgIGNvdW50ZXI6IHRydWUsXHJcbiAgICAgICAgcGFnaW5nOmZhbHNlLFxyXG4gICAgICAgIHNwZWVkOjEwMDAsXHJcbiAgICAgICAgYXV0b3BsYXk6e1xyXG4gICAgICAgICAgICBlbmFibGU6dHJ1ZSxcclxuICAgICAgICAgICAgcGF1c2VIb3ZlcjpmYWxzZSxcclxuICAgICAgICAgICAgYWRkSG92ZXJUYXJnZXQ6JycsXHJcbiAgICAgICAgICAgIGludGVydmFsOjcwMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbml0Q29tcGxldGU6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIHBhZ2luZyA9ICcnO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gTWF0aC5jZWlsKHRoaXMuX2xlbiAvIHRoaXMuX3ZpZXcpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDw9IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdpbmcgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicGFnZVwiPnBhZ2UnICsgaSArICc8L2J1dHRvbj4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmZpbmQoJy5wYWdpbmcnKS5odG1sKHBhZ2luZykuZmluZCgnLnBhZ2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5nb19wYWdlKCQodGhpcykuaW5kZXgoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY291bnRlcjogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5maW5kKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvbicpLmVxKGUuY3VycmVudC0xKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuZmluZCgnLmNvdW50JykuaHRtbCgnY3VycmVudCA6ICcgKyBlLmN1cnJlbnQgKyAnLCB0b3RhbCA6ICcgKyBlLnRvdGFsKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJChcIi5yZXZpZXctc2xpZGVcIikudG91Y2hTbGlkZXIoe1xyXG4gICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKFwiLnNlcnZpY2Utc2xpZGVcIikudG91Y2hTbGlkZXIoe1xyXG4gICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgICAgIGJ0bl9wcmV2OiAkKCcuc2xpZGUtcHJldicpLFxyXG4gICAgICAgIGJ0bl9uZXh0OiAkKCcuc2xpZGUtbmV4dCcpLFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIiwiJChmdW5jdGlvbigpe1xyXG4gICAgJChcIi5waG9uZS1zbGlkZVwiKS50b3VjaFNsaWRlcih7XHJcbiAgICAgICAgY29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgIHBhZ2luZzogdHJ1ZSxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgICQoXCIuZXZlbnQtc2xpZGVcIikudG91Y2hTbGlkZXIoe1xyXG4gICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICBwYWdpbmc6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6e1xyXG4gICAgICAgICAgICBlbmFibGU6dHJ1ZSxcclxuICAgICAgICAgICAgcGF1c2VIb3ZlcjpmYWxzZSxcclxuICAgICAgICAgICAgYWRkSG92ZXJUYXJnZXQ6JycsXHJcbiAgICAgICAgICAgIGludGVydmFsOjcwMDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcubW9yZScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICRpbmZvID0gJCgnLmluZm8nKS5jc3Moe2JvdHRvbTowfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYoJCgnLndyYXAnKS5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAgICAgICAgICQoJy53cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLndyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJCgnLmluZm8nKS5jc3Moe2JvdHRvbTo0MjB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iXX0=
