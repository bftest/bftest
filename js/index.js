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
    $(".inputIn>li").children("input").on("click",function(){
        $(this).parent().children("span").show();
        $(this).parent().siblings().children("span").hide();
    });
    ///
    $(".checkChange").on("click",function(){
        $(this).hasClass("checked") ? $(this).removeClass("checked").siblings("input").removeAttr("checked","false") :  $(this).addClass("checked").siblings("input").attr("checked","checked");
    });
    //
    $(".carT span").on("click",function(){
        if($(this).hasClass("selected")){
            $(this).removeClass("selected").parent().siblings().hide();
        }else{
            $(this).is("[id]") ? $(this).addClass("selected").siblings().removeClass("selected").parent().siblings().show(): $(this).addClass("selected").siblings().removeClass("selected").parent().siblings().hide();
        }
    });
    //
    function buyNum(){
        $(".increment").on("click",function(){
            var $num=parseInt($("#buy-num").val());
            $num++;
            $("#buy-num").val($num);
        });
        $(".decrement").on("click",function(){
            var $num=parseInt($("#buy-num").val());
            $num<=0 ? $num=0 : $num--;
            $("#buy-num").val($num);
        });
    }
    buyNum();
    //
  /*  $(".tagBox dl li").on("click", function() {
        $(this).hasClass("disable") ? $(this).removeClass("selected") : $(this).addClass("selected").siblings().removeClass("selected");
    });*/
    var $tagBli = $(".tagBox dl li");
    $tagBli.each(function(index){
        new FastClick($tagBli[index]);
        $(this).on("click",function(){
            $(this).hasClass("disable") ? $(this).removeClass("selected") : $(this).addClass("selected").siblings().removeClass("selected");
        })
    });
    $(".selectedTag").on("click",function(){
        $(".tagLayer").show();
    });
    $("#btnSure").click(function(){
        $(".tagLayer").hide();
    });
    $(".closed .close").on("click",function(){
        $(".tagLayer").hide();
    });
});
////////////////////////
$(function() {
    $(".manageAd li .befTar").on("click",function(){
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
        }else{
            $(this).addClass("selected");
            $(this).parent().siblings().children(".befTar").removeClass("selected");
        }
    });
});
/////////




