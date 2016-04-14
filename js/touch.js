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
        //�ѿ�ʼ�Ĵ����������¼����
        this.startX = e.changedTouches[0].pageX;
        this.time = +new Date();
    },
    move :function(e){
        e.preventDefault();
        var that = slider;
        var touchMove = e.changedTouches[0].pageX;
        var movePos = touchMove - this.startX;//���ƶ��ľ����¼����
        this.change = movePos;
        var pos = movePos-this.offsetWidth*this.index;
        that.inner.style.webkitTransform = "translate("+pos+"px,0)";


    },
    end :function(){
        //���ȴ�������,������������һ����ʾ,��������Ҫ++,���һ�������ǰһ����ʾ,��������Ҫ--;
        var date = +new Date();
        var time = date-this.time;
        var index  = this.index;
        var that = slider;
        var len = that.oLis.length;
        if(time>100){//���ʱ���Ƿ����100����
            if(this.change>0){
                index = (index==0?0:index-1);//��Ҫ�ж��Ƿ��ǵ�һ��
            }else{
                index = (index==len-1?len-1:index+1);//��Ҫ�ж��Ƿ������һ��
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





