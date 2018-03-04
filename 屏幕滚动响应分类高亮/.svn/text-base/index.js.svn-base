window.onload=function(){
	function arrHeight(){
		arrheight=[];
		var items=document.getElementsByClassName('right-list');
		for(let i=0;i<items.length;i++){
			var scrolltop=items[i].offsetTop;
			arrheight.push(scrolltop);
		}
	}
	function noactive(){
		let item=document.getElementsByClassName('list')
		for(let i=0;i<item.length;i++){
			item[i].setAttribute('class','list')
		}
	}
	function scrollactive(){
		var scrolltop=document.getElementById('right-hook').scrollTop;
		for(let i=0;i<arrheight.length;i++){
			if(scrolltop>arrheight[i]&&scrolltop<arrheight[i+1]){
				noactive()
				document.getElementsByClassName('list')[i].setAttribute('class','list list-active')
			}
		}
	}
	function clickactve(){
		let list=document.getElementsByClassName('list')
		for(let i=0;i<list.length;i++){
			list[i].onclick=function(){
				noactive()
				list[i].setAttribute('class','list list-active')
			}
		}
	}
	document.getElementById('right-hook').onscroll=function(){
		scrollactive()
	}
	arrHeight()
	scrollactive()
	clickactve()
}
