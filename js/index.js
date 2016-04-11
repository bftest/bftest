var winW = document.documentElement.clientWidth;
var desW = 640;
var proportion = desW/100;/*±ÈÀý*/
document.documentElement.style.fontSize = winW/proportion +"px";
if(winW>desW){
    document.documentElement.style.fontSize = "100px";
}

/////
$(function(){

    //login
    $(function(){
        $(".inputIn>li").children("input").click(function(){
            $(this).parent().children("span").show();
            $(this).parent().siblings().children("span").hide();
        });
    });
    ///
    $(".checkChange").click(function(){
        if($(this).hasClass("checked")){
            $(this).removeClass("checked").siblings("input").removeAttr("checked","false");
        }else{
            $(this).addClass("checked").siblings("input").attr("checked","checked");
        }
    });
////

    $(".carT span").click(function(){
        if($(this).hasClass("selected")){
            $(this).removeClass("selected").parent().siblings().hide();
        }else{
            if($(this).is("[id]")){
                $(this).addClass("selected").siblings().removeClass("selected").parent().siblings().show();
            }else{
                $(this).addClass("selected").siblings().removeClass("selected").parent().siblings().hide();
            }
        }
    });
//
    function buyNum(){
        $(".increment").click(function(){
            var $num=parseInt($("#buy-num").val());
            $num++;
            $("#buy-num").val($num);
        });
        $(".decrement").click(function(){
            var $num=parseInt($("#buy-num").val());
            $num<=0 ? $num=0 : $num--;
            $("#buy-num").val($num);
        });
    }
    buyNum();
    //
    $(".tagBox dl li").click(function(){
        $(this).hasClass("disable") ? $(this).removeClass("selected") : $(this).addClass("selected").siblings().removeClass("selected");
     });

    /*var $tagBoxLi=$(".tagBox dl li");
    FastClick.attach($tagBoxLi);
    $tagBoxLi.click(function(){
        $(this).hasClass("disable") ? $(this).removeClass("selected") : $(this).addClass("selected").siblings().removeClass("selected");
    });*/
    $(".selectedTag").click(function(){
        $(".tagLayer").show();
    });
    $("#btnSure").click(function(){
        $(".tagLayer").hide();
    });
    $(".closed .close").click(function(){
        $(".tagLayer").hide();
    });
});
////////////////////////
$(function() {
    $(".manageAd li .befTar").click(function(){
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
        }else{
            $(this).addClass("selected");
           $(this).parent().siblings().children(".befTar").removeClass("selected");
        }
   });
});
/////////




