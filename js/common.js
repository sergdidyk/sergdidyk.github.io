$(function(){
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); }); //Prevent dragging images

	//Hamburger menu animation
		$("#nav-icon3").click(function(){
			$(this).toggleClass("open");
		});

	//Mobile menu toggle	
	let navbarToggle = document.getElementById('ham');
	navbarToggle.addEventListener('click',function(){
    if(this.classList.contains('active')){
    		this.classList.remove('active');
    		$("#main-nav").slideUp();
    	
    }else{
    		this.classList.add('active');
    		$("#main-nav").slideDown();
    }
	});

});