$(document).ready(function(){
	$(".nav li").each(function(){
		$(this).click(function(){
			$(".nav li").removeClass("active");
			$(this).addClass("active")
		})
	})
	$(".search").click(function(){
		$("#search").fadeToggle('slow')
	})
	$('.multi-item-carousel .item').each(function(){
			  var next = $(this).next();
			  if (!next.length) {
			    next = $(this).siblings(':first');
			  }
			  next.children(':first-child').clone().appendTo($(this));

			  
			  if (next.next().next().next().length>0 ) {
			    next.next().children(':first-child').clone().appendTo($(this));
			    
			  } else {
			  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
			  }
			});

})