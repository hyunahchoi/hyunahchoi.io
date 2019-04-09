$(document).ready(function(){
    var wd=$(".slide").width();
//    var ht=$(".slider1").height();
    var len=$(".imgBox li").length;
    var cnt=0;
    var intv = setInterval(function(){
        nextAni();
    }, 3950);
    function nextAni(){
        $(".imgBox li").removeClass("on");
        cnt++;
        if(cnt>=len) {
            cnt = 0;
        } 
        $(".imgBox li").eq(cnt).addClass("on"); 
        $(".btnBox li").eq(0).appendTo($(".btnBox"));
        $(".btnBox li .btn").removeClass("on");
        $(".btnBox li .btn").eq(0).addClass("on");
    }
    function prevAni(){
        $(".imgBox li").removeClass("on");
        cnt--;
        if(cnt<0) {
            cnt=len-1;
        }
        $(".imgBox li").eq(cnt).addClass("on");
        $(".btnBox li").eq(len-1).appendTo($(".btnBox"));
        $(".btnBox li .btn").removeClass("on");
        $(".btnBox li .btn").eq(0).addClass("on");
    }
    function numAni(num){
        for(var x=0;x<num-1;x++){
            $(".imgBox li").eq(0).appendTo($(".imgBox"));
            $(".btnBox li").eq(0).appendTo($(".btnBox"));
        }
        nextAni();
    }
    $(".btnBox li .btn").click(function(){
        var btnNum = $(this).parents("li").index();
        clearInterval(intv);
        numAni(btnNum);
        intv = setInterval(function(){  nextAni(); }, 3950);
    });
});