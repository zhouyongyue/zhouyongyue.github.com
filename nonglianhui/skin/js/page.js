
winWidth=$(window).width();

$(function(){

	$('.pro-box ul li').on('hover',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var $index=$('.pro-box ul li').index(this)
		$('.pro-box .img-box').eq($index).show().siblings('.pro-box .img-box').hide().css('display','none').stop(true,true);
	})

	if(winWidth>768){
		$('header .nav > ul > li.pro').hover(function(){
			$(this).siblings('li').find('a').addClass('on')
		},function(){
			$(this).siblings('li').find('a').removeClass('on')
		})
		$('header .nav').css('display','block');
	}

	if(winWidth<768){
		$('.pro-box').removeClass('tran300')
		$('.nav .pro > a').on('click',function(){
			$(this).next('.pro-box').slideToggle();
		})
		$('header .nav > ul > li .pro-box ul li a').attr('href','javascript:')
		$('header .menu').on('click',function(){
			$(this).toggleClass('on');
			$('header .nav').slideToggle();
		})
		$('.swiper-slide').each(function(){
            $(this).find('.banner-img').attr('src',$(this).find('img').attr('data-mobile'));
        })
	}else{
		$('.swiper-slide').each(function(){
            $(this).find('.banner-img').attr('src',$(this).find('img').attr('data-pc'));
        })
	}

	$('.index-main .list .box .txt').each(function(){
		$(this).height($(this).prev('.img').height())
	})

    $(window).resize(function(){
        winWidth=$(window).width();
        if(winWidth<768){
        	$('header .nav > ul > li .pro-box ul li a').attr('href','javascript:')
        	$('header .nav').css('display','none');
        }else{
        	$('header .nav').css('display','block');
        }
        $('.index-main .list .box .txt').each(function(){
			$(this).height($(this).prev('.img').height())
		})
    })


})