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

  //Onscroll animation
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  	//Hide&show mobile menu
	  let currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
	    document.getElementsByClassName("navbar")[0].style.top = "0";
	  } else {
	    document.getElementsByClassName("navbar")[0].style.top = "-90px";
	  }
	  prevScrollpos = currentScrollPos;

	  //Fade header background
	  if($(window).scrollTop() > 100) {
      $(".head_wrapper").addClass("faded");
    } else {
    	$(".head_wrapper").removeClass("faded");
    }	
  }


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
    		$(".head_wrapper").removeClass("faded");
    		$("#my_name, #my_role").css("color", "rgba(255,255,255,0.7)");
    }else{
    		this.classList.add('active');
    		$("#main-nav").slideDown();
    		$(".head_wrapper").addClass("faded");
    		$("#my_name, #my_role").css("color", "rgba(255,255,255,0.2)");
    }
	});

	//Intro text animation 
			//wrap each letter into span
	$('#my_name, #my_role').each(function(){
	  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	});

	anime({
		targets: '#my_name .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
	});
	anime({
		targets: '#my_role',
    opacity: [0,1],
    duration: 3000,
    easing: "easeInOutQuad",
    delay: 1500
	}); 

	//navbar appearance animation
	anime({
		targets: '.navbar',
		opacity: 1,
    duration: 2000,
    easing: "easeInOutQuad",
    delay: 500
	}); 

});