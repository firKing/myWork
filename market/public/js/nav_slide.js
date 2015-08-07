/**
 * Created by observer on 14/11/24.
 * 简单的滑动导航
 * 用了jquery(原生写的低版本浏览器跪了，还是太年轻)
 */
$.fn.NavSlider = function(options){

    //默认设定
    var settings = $.extend({
        navpos : 0
    },options);

    //初始化设定
    var Timer = null;
    var iSpeed = 0;

    var slider = function(){
        var oLi = $(".slider");
        var nav_underline = $(".nav_underline");
        var now = oLi.eq(settings.navpos);//设置当前页面所在位置,0-3分别代表首页-求购专区
        var nav = $(".nav");

        nav_underline.css({
            left : now.position().left + 50 + "px",//初始化页面位置，50为margin值
            width : now.css("width")
        });

        for (var i = 0; i < oLi.length; i++) {
            var Li = oLi.eq(i);
            Li.Index = i;
            Li.on("mouseover",function () {
                nav_underline.css("width",$(this).css("width"));
                startMove(this.offsetLeft)
            });
            nav.on("mouseleave",function () {
                nav_underline.css("width",now.css("width"));
                startMove(now.position().left + 50)
            });
        }
    };

    function startMove(iTarget) {
        if (Timer) {
            clearInterval(Timer);
        }
        Timer = setInterval(function () {
            doMove(iTarget);
        }, 30);
    }
    function doMove(iTarget) {
        var oLi = $(".nav_underline");
        var oLiMove = oLi[0];

        iSpeed += (iTarget - oLiMove.offsetLeft) / 5;
        iSpeed *= 0.6;
        oLiMove.style["left"] = oLiMove.offsetLeft + iSpeed + "px";
    }

    slider();

};