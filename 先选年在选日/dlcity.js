$(function() {
	$('body').append(`
		<div style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: rgba(0,0,0,.5);display: flex;align-items: center;justify-content: center;cursor: pointer;" id="year-box">
			<div style="width: 500px;background: #FFFFFF;position: relative;">
				<div style="background: #333333;line-height: 60px;text-align: center;font-size: 20px;color: #FFF9EC;">选择年份</div>
				<div style="width: 100%;height: 300px;overflow-y: scroll;" class="changeyear">
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()-3}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()-2}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()-1}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()+1}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()+2}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()+3}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()+4}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()+5}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()+6}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()+7}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()+8}</div>
					<div style="text-align: center;line-height: 60px;">${new Date().getFullYear()+9}</div>
				</div>
			</div>
		</div>
		<div style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: rgba(0,0,0,.5);display: flex;align-items: center;justify-content: center;cursor: pointer;" id="month-box">
			<div style="width: 500px;background: #FFFFFF;position: relative;">
				<div style="background: #333333;line-height: 60px;text-align: center;font-size: 20px;color: #FFF9EC;">选择月份</div>
				<div style="width: 100%;height: 300px;overflow-y: scroll;" class="changemonth">
					<div style="text-align: center;line-height: 60px;">1月</div>
					<div style="text-align: center;line-height: 60px;">2月</div>
					<div style="text-align: center;line-height: 60px;">3月</div>
					<div style="text-align: center;line-height: 60px;">4月</div>
					<div style="text-align: center;line-height: 60px;">5月</div>
					<div style="text-align: center;line-height: 60px;">6月</div>
					<div style="text-align: center;line-height: 60px;">7月</div>
					<div style="text-align: center;line-height: 60px;">8月</div>
					<div style="text-align: center;line-height: 60px;">9月</div>
					<div style="text-align: center;line-height: 60px;">10月</div>
					<div style="text-align: center;line-height: 60px;">11月</div>
					<div style="text-align: center;line-height: 60px;">12月</div>
				</div>
			</div>
		</div>	
	`)
	//	初始化年份和月份
	var year = 0,
		month = 0,
		choice = false;
	//				初始化隐藏月份选择框/年份选择蒙层/月份选择蒙层/以及初始化大小
	$('#month').hide()
	$('#year-box').hide()
	$('#month-box').hide()
	$('html').css({
		'width': '100%',
		'height': '100%'
	})
	$('body').css({
		'width': '100%',
		'height': '100%'
	})
	//				点击年份弹出年份选择蒙层
	$('#year').click(function() {
		$('#year-box').show()
	})
	//				点击年份操作
	$('.changeyear div').click(function() {
		year = $(this).html()
		$('#year').val(year)
		choice = confirm('是否继续选择月份')
		console.log(choice)
		if(choice) {
			//						继续选择月份则隐藏年份选择蒙层显示月份选择蒙层和月份输入框
			$('#year-box').hide()
			$('#month-box').show()
			$('#month').show()
		} else {
			//						不继续选择则隐藏年份
			$('#year-box').hide()
		}
	})
	//				点击月份操作
	$('.changemonth div').click(function() {
		month = $(this).html()
		$('#month').val(month)
		$('#year-box').hide()
		$('#month-box').hide()
	})
})