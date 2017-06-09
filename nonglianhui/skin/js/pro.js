
$(function(){

	//产品详情
	var $height_1=$('.pro-ar-left-cont img').outerHeight(true);

	// $('.pro-ar-left-list img').mouseover(function(){
	// 	var $index = $(this).attr('value') - 1;
	// 	$(this).css('border','1px solid #000')
	// 	$(this).siblings().css('border','1px solid #eeeeee')
	// 	$('.pro-ar-left-cont').stop(true,false).animate({top:-$index*$height_1},400)
	// }).eq(0).mouseover()

	$('.pro-ar-left-list img').mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on')
		src = $(this).attr('src');
		$('.con-fangDaIMg img').attr('src',src);
	})

	//点箭头     		  
	var $height_2=$('.pro-ar-left-list img').outerHeight(true)
	var $box_2=$('.pro-ar-left-list')

	if($('.pro-ar-left-list img').length>5){
	//点上
		$('.pro-ar-left-up').click(function(){
			if(!$box_2.is(':animated')){
				$box_2.find('img').last().prependTo($box_2);
				$($box_2).css('top','-='+$height_2)
				$box_2.animate({top:'0'},400)
			}
		})
		//点下		 
		$('.pro-ar-left-down').click(function(){
			if(!$box_2.is(':animated')){
				$box_2.animate({top:'-='+$height_2},400,function(){
					$box_2.find('img').first().appendTo($box_2);
					$box_2.css('top',0);
				})
			}
		})
	}
	
})


$(function(){
    $.fn.magnifying = function(){
        var that = $(this),
         $imgCon = that.find('.con-fangDaIMg'),//正常图片容器
            $Img = $imgCon.find('img'),//正常图片，还有放大图片集合
           $Drag = that.find('.magnifyingBegin'),//拖动滑动容器
           $show = that.find('.magnifyingShow'),//放大镜显示区域
        $showIMg = $show.find('img'),//放大镜图片
        $ImgList = that.find('.con-FangDa-ImgList > li >img'),
        multiple = $show.width()/$Drag.width();
        $imgCon.mousemove(function(e){
            $Drag.css('display','block');
            $show.css('display','block');
            //获取坐标的两种方法
            // var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
            //     iY = e.clientY - this.offsetTop - $Drag.height()/2, 
            var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
                iY = e.pageY - $(this).offset().top - $Drag.height()/2,   
                MaxX = $imgCon.width()-$Drag.width(),
                MaxY = $imgCon.height()-$Drag.height();
                
            /*这一部分可代替下面部分，判断最大最小值
            var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX,
                DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
            $Drag.css({left:DX+'px',top:DY+'px'});          
            $showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});*/

            iX = iX > 0 ? iX : 0;
            iX = iX < MaxX ? iX : MaxX;
            iY = iY > 0 ? iY : 0;
            iY = iY < MaxY ? iY : MaxY; 
            $Drag.css({left:iX+'px',top:iY+'px'});          
            $showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});
            //return false;
        });
        $imgCon.mouseout(function(){
            $Drag.css('display','none');
            $show.css('display','none');
        });

        $ImgList.mouseenter(function(){
            var NowSrc = $(this).data('bigimg');
            $Img.attr('src',NowSrc);
            $(this).parent().addClass('active').siblings().removeClass('active');
        }); 
    }

    $("#fangdajing").magnifying();


});

$(function(){

	$('.pro-detail-left .item02 .bottom').click(function(){
		$(this).prev().prev('ul').css({'height':'auto'});
	})

	$('.pro-detail-right .item02 > .tit ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var $index=$('.pro-detail-right .item02 > .tit ul li').index(this)
		$('.pro-detail-right .item02 .item02-tab').eq($index).show().siblings('.pro-detail-right .item02 .item02-tab').hide().css('display','none').stop(true,true);
	}).eq(0).click()

	$('.pj-contxt .pj-box > .title ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var $index=$('.pj-contxt .pj-box > .title ul li').index(this)
		$('..pj-contxt .pj-box .pj-box-tab').eq($index).show().siblings('..pj-contxt .pj-box .pj-box-tab').hide().css('display','none').stop(true,true);
	}).eq(0).click()

})