$(window).scroll(function() {
	if ($(this).scrollTop() >100){  
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
  	}
});
$(".hamburger").click(function(){
  $(this).toggleClass("is-active");
  $('nav').toggleClass("open");
}); 