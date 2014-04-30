
 $(document).ready(function(){
var target;
		$("nav ul li").each(function(e) {

			$(this).click(function() {
				$("nav ul li").removeClass('activo');
				$(this).addClass('activo');
				target = $(".llamar").eq(e);
				$('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		       
			});

		});

})