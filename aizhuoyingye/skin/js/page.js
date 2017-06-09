$(".header .more").hover(function(){
    $(this).children(".more-list").slideDown(300);
},function(){
    $(this).children(".more-list").slideUp(300);
});