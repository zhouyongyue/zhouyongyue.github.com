$(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop()==0){
            $(".header").css({"background":"none"});
        }else{
            $(".header").css({"background":"#2fe0d8"});
        };
    });
    $(".sidebar .elastic").each(function(i){
        $(this).hover(function(){
            $(".sidebar .cnt").children().eq(i).css({"display":"block"});
        },function(){
            $(".sidebar .cnt").children().css({"display":"none"});
        });
    });
    $(".kefu").on("click",function(){
        $(".mask").fadeIn(300);
        $(".reserve").fadeIn(300);
    });
    $(".mask,.close").on("click",function(){
        $(".mask").fadeOut(300);
        $(".reserve").fadeOut(300);
    });
    function sizeNone(){
        var winWidth = $(window).width();
        if(winWidth<1400){
            $(".sidebar").css("display","none");
        }
        else{
            $(".sidebar").css("display","block");
        };
    };
    sizeNone();
    $(window).on("resize",function(){
        sizeNone();
    });

});