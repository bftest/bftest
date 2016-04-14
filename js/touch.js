var $img=$("#inner li img");
$img.each(function(index,ele){
    var $height= $(this).height();
    var $marT=-$height/2+"px";
    $(this).css({"position":"relative","top":"50%","margin-top":$marT});
});

var slider = {
    init: function(ele){
        this.inner = ele.inner || {};
        this.oLis = ele.oLis || {};
        this.items = ele.items ||{};
        var that = this;
        [].forEach.call(this.oLis,function(){
            var oLi = arguments[0];
            oLi.index = arguments[1];
            oLi.addEventListener("touchstart",that.start,false);
            oLi.addEventListener("touchmove",that.move,false);
            oLi.addEventListener("touchend",that.end,false);
        })
    },
    start: function(e){
        //把开始的触摸点坐标记录下来
        this.startX = e.changedTouches[0].pageX;
        this.time = +new Date();
    },
    move :function(e){
        e.preventDefault();
        var that = slider;
        var touchMove = e.changedTouches[0].pageX;
        var movePos = touchMove - this.startX;//把移动的距离记录下来
        this.change = movePos;
        var pos = movePos-this.offsetWidth*this.index;
        that.inner.style.webkitTransform = "translate("+pos+"px,0)";


    },
    end :function(){
        //首先处理索引,往左滑是想让下一张显示,所以索引要++,往右滑是想让前一张显示,所以索引要--;
        var date = +new Date();
        var time = date-this.time;
        var index  = this.index;
        var that = slider;
        var len = that.oLis.length;
        if(time>100){//间隔时间是否大于100毫秒
            if(this.change>0){
                index = (index==0?0:index-1);//需要判断是否是第一张
            }else{
                index = (index==len-1?len-1:index+1);//需要判断是否是最后一张
            }
           that.inner.style.webkitTransform = "translate("+(-this.offsetWidth*index)+"px,0)";
            that.inner.style.webkitTransition = "0.5s ease-out";
            that.inner.addEventListener("webkitTransitionEnd",function(){
                this.style.webkitTransition = "";
                [].forEach.call(that.items,function(){
                    arguments[0].className = "";
                });
                that.items[index].className = "cur";
            },false)
        }


    }
};


var $innerLi=$("#inner li");
console.log($innerLi.length);
var $item=$("#item");
var $str="";
for(var i=0;i<$innerLi.length;i++){
    $str=$str+"<li></li>";
}
$item.append($str);
$("#item").children().eq(0).addClass("cur");

var obj = {
    inner :document.querySelector("#inner"),
    oLis : document.querySelectorAll("#inner>li"),
    items : document.querySelectorAll("#item>li")
};
slider.init(obj);





