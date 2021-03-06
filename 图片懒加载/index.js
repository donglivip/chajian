(function(){//立即执行函数
    let imgList = [],delay,time = 250;
    function _delay(){//函数节流
    	
        clearTimeout(delay);
        delay = setTimeout(() => {
            _loadImg();
        },time)
    };
    function _loadImg(){//执行图片加载
    	console.log(imgList)
        for(let i = 0,len = imgList.length; i < len; i++){
            if(_isShow(imgList[i])){
                imgList[i].src = imgList[i].getAttribute('data-src');
            }
        }
    };
    function _isShow(el){//判断img是否出现在可视窗口
        let coords = el.getBoundingClientRect();
        return (coords.left >= 0 && coords.top) <= (document.documentElement.clientHeight || window.innerHeight);
    };
    function imgLoad(selector){//获取所有需要实现懒加载图片对象引用并设置window监听事件scroll
        _selector = selector || 'imgLazyLoad';
        let nodes = document.getElementsByClassName(selector);
        imgList = nodes;
        window.addEventListener('scroll',_delay,false)
        _delay()
    };
    imgLoad('imgLazyLoad')
})()