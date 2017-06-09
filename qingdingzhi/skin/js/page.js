
winWidth=$(window).width();

$(function(){

	//返回顶部
	$('.right-bar .icon04').click(function(){
		$('body').animate({scrollTop:0},400)
	});

	//留言弹窗
	$('.right-bar .icon03').click(function(){
		$('.bg000').fadeIn();
		$('.ly-modal').slideDown();
	});
	$('.ly-modal .close').click(function(){
		$('.bg000').fadeOut();
		$('.ly-modal').slideUp();
	});

	//电脑版导航
	function sca(){
		if($(this).scrollTop()!=0){
			$('.index-header').addClass('on');
			$('.index-header').find('img').attr('src','skin/images/logo.png');
		}else{
			$('.index-header').removeClass('on');
			$('.index-header').find('img').attr('src','skin/images/logo-white.png');
		}
	};
	if(winWidth>1024){
		$(window).on("scroll",sca);
	}else{
		$(window).off("scroll",sca);
	};

	//手机版导航
	if(winWidth<1024){
		$(window).on("scroll",scam);
	};
	function scam(){
		if($(this).scrollTop()!=0){
			$('.index-header .menu').addClass('on')
			$('.index-header .logo').hide();
		}else{
			$('.index-header .menu').removeClass('on')
			$('.index-header .logo').show();
		}
	};
	
	//判断banner图
    if(winWidth<768){
        $('.swiper-slide').each(function(){
            $(this).find('.banner-img').attr('src',$(this).find('img').attr('data-mobile'));
        })
    }else{
        $('.swiper-slide').each(function(){
            $(this).find('.banner-img').attr('src',$(this).find('img').attr('data-pc'));
        })
    };

    //手机版菜单弹出
    $('.menu').toggle(function(){
    	$(this).find('i').addClass('icon-close')
    	$('.bg000').fadeIn();
    	$('.page,.nav').addClass('open');
    },function(){
    	$(this).find('i').removeClass('icon-close')
    	$('.bg000').fadeOut();
    	$('.page,.nav').removeClass('open');
    });

    //index-item02右边的高度
	$(window).load(function(){
		$('.index-item02 .right').height($('.index-item02 .left').outerHeight());
	});

	//index-item04切换选项卡
	$('.index-item04 ul.ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var $index=$('.index-item04 ul.ul li').index(this)
		$('.index-item04-tab').eq($index).show().siblings('.index-item04-tab').hide().css('display','none').stop(true,true);
	}).eq(0).click();


	//动态改动窗口事件
	$(window).resize(function(){

	    winWidth=$(window).width();

	    //判断banner图
	    if(winWidth<768){
	        $('.swiper-slide').each(function(){
	            $(this).find('.banner-img').attr('src',$(this).find('img').attr('data-mobile'));
	        })
	    }else{
	        $('.swiper-slide').each(function(){
	            $(this).find('.banner-img').attr('src',$(this).find('img').attr('data-pc'));
	        })
	    };

	    if(winWidth<768){
			$(window).off("scroll",sca);
			$(window).on("scroll",scam);
		}else{
			$(window).on("scroll",sca);
			$(window).off("scroll",scam);
		};

		if(winWidth>768){
			$('header .logo').show();
		};

		//index-item02右边的高度
		$('.index-item02 .right').height($('.index-item02 .left').outerHeight());

	});

})

window.onload=function(){
	setTimeout(function(){$(".loading").css({"display":"none"});},500);
};