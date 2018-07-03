 function getScrollTop() {
 4             var scrollTop = 0;
 5             if(document.documentElement && document.documentElement.scrollTop) {
 6                 scrollTop = document.documentElement.scrollTop;
 7             } else if(document.body) {
 8                 scrollTop = document.body.scrollTop;
 9             }
10             return scrollTop;
11         }
12 
13         //获取当前可视范围的高度 
14         function getClientHeight() {
15             var clientHeight = 0;
16             if(document.body.clientHeight && document.documentElement.clientHeight) {
17                 clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
18             } else {
19                 clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
20             }
21             return clientHeight;
22         }
23 
24         //获取文档完整的高度 
25         function getScrollHeight() {
26             return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
27         }
28         
29         //滚动事件触发
30         window.onscroll = function() {
31             if(getScrollTop() + getClientHeight() == getScrollHeight()) {
32                34             }
35         }