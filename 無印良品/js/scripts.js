$(function(){
    $('.news').mouseenter(function(){
        $(this).find('p').animate({width:300,bottom:-40,left:-40},{duration:500});
    });

    $('.news').mouseleave(function(){
        $(this).find('p').animate({width:300,bottom:0,left:0},{duration:500});
    });

    $('.news').mouseenter(function(){
        $(this).find('img').animate({width:300,top:-40,left:-40},{duration:500});
    });

    $('.news').mouseleave(function(){
        $(this).find('img').animate({width:220,top:0,left:0},{duration:500});
    });
});