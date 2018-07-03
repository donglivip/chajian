 var scroll = document.querySelector('.scroll');
    var outerScroller = document.querySelector('.outerScroller');
    var touchStart = 0;
    var touchDis = 0;
    outerScroller.addEventListener('touchstart', function(event) {
        var touch = event.targetTouches[0];
        // 把元素放在手指所在的位置
        touchStart = touch.pageY;
        console.log(touchStart);
    }, false);
    outerScroller.addEventListener('touchmove', function(event) {
        var touch = event.targetTouches[0];
        console.log(touch.pageY + 'px');
        scroll.style.top = scroll.offsetTop + touch.pageY-touchStart + 'px';
        console.log(scroll.style.top);
        touchStart = touch.pageY;
        touchDis = touch.pageY-touchStart;
    }, false);
    outerScroller.addEventListener('touchend', function(event) {
        touchStart = 0;
        var top = scroll.offsetTop;
        console.log(top);
        if(top>70)refresh();
        if(top>0){
            var time = setInterval(function(){
                scroll.style.top = scroll.offsetTop -2+'px';
                if(scroll.offsetTop<=0)clearInterval(time);
            },1)
        }
    }, false);
    function refresh(){
    //这里是后台数据
        for(var i = 3;i>0;i--)
        {
            var node = document.createElement("li");
            node.innerHTML = "I'm new" + i;
            scroll.insertBefore(node,scroll.firstChild);
        }
    }