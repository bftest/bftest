var winW = document.documentElement.clientWidth;
var desW = 640;
var proportion = desW/100;/*比例*/
document.documentElement.style.fontSize = winW/proportion +"px";
if(winW>desW){
    document.documentElement.style.fontSize = "100px";
}
/////
$(function(){
    //login
    $(".inputIn>li").children("input").on("click",function(){
        $(this).parent().children("span").show();
        $(this).parent().siblings().children("span").hide();
    });
    ///
    $(".checkChange").on("click",function(){
        $(this).hasClass("checked") ? $(this).removeClass("checked").siblings("input").removeAttr("checked","false") :  $(this).addClass("checked").siblings("input").attr("checked","checked");
    });
    //
    var $carTSpan=$(".carT span");
    $carTSpan.each(function(index){
        new FastClick($carTSpan[index]);
        $(this).on("click",function(){
            $(this).hasClass("selected") ? $(this).removeClass("selected").parent().siblings().hide():($(this).is("[id]") ? $(this).addClass("selected").siblings().removeClass("selected").parent().siblings().show(): $(this).addClass("selected").siblings().removeClass("selected").parent().siblings().hide());
        })
    });
    $("#testIn,#textC").focus(function(){
        $(".pay").css({"position":"static"});
    });
    $("#testIn,#textC").blur(function(){
        $(".pay").css({"position":"fixed"});
    });
    //
    function buyNum(){
        var $increment= $(".increment");
        var $decrement= $(".decrement");
        var $buyNum=$("#buy-num");
        $increment.each(function(){
            new FastClick($increment[0]);
           $(this).on("click",function(){
                var $num=parseInt($("#buy-num").val());
                $num++;
                $("#buy-num").val($num);
            });
        })
        $decrement.each(function(){
            new FastClick($decrement[0]);
            $(this).on("click",function(){
                var $num=parseInt($("#buy-num").val());
                $num<=0 ? $num=0 : $num--;
                $("#buy-num").val($num);
            });
        })
        $buyNum.each(function(){
            new FastClick($buyNum[0]);
            $(this).on("click",function(){
                $(this).focus();
            });
        })
    }
    buyNum();
    //
    var $tagBli = $(".tagBoxC dl li");
    $tagBli.each(function(index){
        new FastClick($tagBli[index]);
        $(this).on("click",function(){
            $(this).hasClass("disable") ? $(this).removeClass("selected") : $(this).addClass("selected").siblings().removeClass("selected");
        })
    });
    $(".selectedTag").on("click",function(){
        $(".tagLayerBox").show();
        $("html,body").addClass("ovfHiden");
    });
    $("#btnSure").click(function(){
        $(".tagLayerBox").hide();
        $("html,body").removeClass("ovfHiden");
    });
    $(".closed .close").on("click",function(){
        $(".tagLayerBox").hide();
        $("html,body").removeClass("ovfHiden");
    });
    //
    var $befTar=$(".manageAd li .befTar");
    $befTar.each(function(index){
        new FastClick($befTar[index]);
        $(this).on("click",function(){
            $(this).hasClass("selected") ?  $(this).parent().siblings().children(".befTar").removeClass("selected") : $(this).addClass("selected").parent().siblings().children(".befTar").removeClass("selected");
        });
    });

//回到页面顶部
    $("#returnTop").click(function(){
        $('body,html').animate({scrollTop:0},1000); //点击按钮让其回到页面顶部
    });
    $(window).scroll(function() {
        var $scrollTop=$(document).scrollTop(); //滚动条距顶端的距离
        var $viewHeight= $(window).height();//浏览器可视化窗口的大小
        var top=parseInt($scrollTop)+parseInt($viewHeight)-217;
        if($scrollTop>$viewHeight-300){
            $("#returnTop").show();
        }else{
            $("#returnTop").hide();
        }
    })








});






