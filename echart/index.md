###Welcome to use MarkDown

1.roseType:显示样式
	例如饼状图切换南丁格尔图。:roseType: 'angle'
2.ECharts 中有一些通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等，这些样式一般都会在系列的 itemStyle 里设置。例如阴影的样式可以通过下面几个配置项设置：
	itemStyle: {
	    normal: {
	        // 阴影的大小
	        shadowBlur: 200,
	        // 阴影水平方向上的偏移
	        shadowOffsetX: 0,
	        // 阴影垂直方向上的偏移
	        shadowOffsetY: 0,
	        // 阴影颜色
	        shadowColor: 'rgba(0, 0, 0, 0.5)'
	         // 设置扇形的颜色
	        color: '#c23531',
	        shadowBlur: 200,
	        shadowColor: 'rgba(0, 0, 0, 0.5)'
	    }
	}
	itemStyle中一般有两个参数:normal是正常状态下的样式
	itemStyle: {
	    emphasis: {
	        shadowBlur: 200,
	        shadowColor: 'rgba(0, 0, 0, 0.5)'
	    }
	}
	emphasis是鼠标悬浮的样式
3.背景颜色
	背景色是全局的，所以直接在 option 下设置 backgroundColor
	setOption({
	    backgroundColor: '#2c343c'
	})
4.文本样式
	文本的样式可以设置全局的 textStyle。
	setOption({
	    textStyle: {
	        color: 'rgba(255, 255, 255, 0.3)'
	    }
	})