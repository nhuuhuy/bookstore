$(document).ready(function(){
	$(".nav li").each(function(){
		$(this).click(function(){
			$(".nav li").removeClass("active");
			$(this).addClass("active")
		})
	})
})