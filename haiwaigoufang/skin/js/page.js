//ѡ�
function tab(name){
    var $oBtn = $(name).children().eq(0).children();
    var $oCnt = $(name).children().eq(1).children();
    $oBtn.each(function(i){
        $(this).on("click",function(){
            $oBtn.removeClass("on");
            $(this).addClass("on");
            $oCnt.removeClass("on");
            $oCnt.eq(i).addClass("on");
        });
    });
};
//�ƶ��˵���
$(".header .cnt .left .close,.header .cnt .mask").on("click",function(){
    $(".header .cnt .mask").fadeOut(300);
    $(".header .cnt .left").animate({"right":"-9.3rem"},200);
});
$(".header .cnt .tit-list").on("click",function(){
    $(".header .cnt .mask").fadeIn(100);
    $(".header .cnt .left").animate({"right":"0"},300);
});
//��������
function ScrollAnima(name,json){
    var _this = this;
    $(window).on("scroll",function(){
        _this.winOffsetTop = $(window).scrollTop() + $(window).height();
        _this.thisT = $(name).offset().top;
        if(_this.winOffsetTop >=_this.thisT){
            for(var i in json){
                $(name).css(i,json[i]);
            }
        }
    });
};