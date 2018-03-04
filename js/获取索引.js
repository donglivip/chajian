$(".", "xuan")[i].onclick = function() {
		for(var j = 0, length = $(".", "xuan").length; j < length; j++) {
			if($(".", "xuan")[j] == this) {
				alert(j)
			}
		}
}