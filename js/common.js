$(function(){
	
  $('body').removeClass('fade-out');

	/* Высота header по высоте экрана и авторазмер рисунка под размер устройства */
	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	/* Подключение плагина Parallax для header и раздела О НАС*/
		$(".main_head").parallax({imageSrc: "img/snapseed.jpg"});
		$(".about_image").parallax({imageSrc: "img/test.jpg", speed: 0.3});

	
	/* Удаляет анимацию при hover на меню в моб. версии */
  $(window).resize(function(){
	 if($(window).width()<768){
	    $(".nav-link").removeClass("hvr-underline-from-center");
	 }
	});

    /* Анимация hamburger в моб. версии */
   $(".navbar-toggler").click(function(){
    $(".main_nav").toggleClass("main_nav_mob");
	  if($(this).hasClass("collapsed")){
	    $(this).removeClass("collapsed");
	  }else{
	    $(this).addClass("collapsed");
	  }
	 })
   
   /* Анимация кнопок соц. сетей */
	$(".slidebttn_fb").hover(
		function(){
			var $this 		= $(this);
			var $slidelem 	= $this.prev();
			$slidelem.stop().animate({"width":"100%"},300);
			$slidelem.find("span").stop(true,true).fadeIn();
			$this.addClass("button_c_fb");
		},
		function(){
			var $this 		= $(this);
			var $slidelem 	= $this.prev();
			$slidelem.stop().animate({"width":"40px"},200);
			$slidelem.find("span").stop(true,true).fadeOut();
			$this.removeClass("button_c_fb");
		}
	);

	$(".slidebttn_ig").hover(
		function(){
			var $this 		= $(this);
			var $slidelem 	= $this.prev();
			$slidelem.stop().animate({"width":"100%"},300);
			$slidelem.find("span").stop(true,true).fadeIn();
			$this.addClass("button_c_ig");
		},
		function(){
			var $this 		= $(this);
			var $slidelem 	= $this.prev();
			$slidelem.stop().animate({"width":"40px"},200);
			$slidelem.find("span").stop(true,true).fadeOut();
			$this.removeClass("button_c_ig");
		}
	);

					
	/* Активация Tooltip Bootstrap (для кнопки callback)*/
    $('[data-toggle="tooltip"]').tooltip();    

    /* Анимация main_nav*/
    $(window).on("scroll", function(){
    	if($(this).scrollTop()>100){
    		$(".navbar").removeClass("main.nav").addClass("main_nav_small");
    		$(".logo_nav path").css("fill", "#FEFCFF");
    		$(".navbar-toggler span").css("background-color", "#FEFCFF");
    	}else{
    		$(".navbar").addClass("main.nav").removeClass("main_nav_small");
    		$(".logo_nav path").css("fill", "#0C090A");
    		$(".navbar-toggler span").css("background-color", "#0C090A");
    	}
    });

    /* Закрытие меню при клике на ссылку в мобильной версии 
       dropdown на каталоге открываться не будет. n+2 - чтобы исключить из списка
       языковой dropdown. На языковом - меню закрывается при клике на язык*/
    $(".nav-item:nth-last-child(n+2)").click(function(){
    	if($(window).width()<768){
    		function nav_change(){
		        $(".navbar-toggler").addClass("collapsed");
		        $(".navbar-collapse").removeClass("show");
		    }
		    nav_change();
		    $("#language_list a").click(function(){
		    	nav_change();
		    });
    	}
    });


    /*АНИМАЦИЯ DROPDOWN. Не работает свертывание. проработать*/
    $(".dropdown").mouseenter(function(){
    	$(".dropdown-menu").addClass("zoomIn");
    	if($(".dropdown-menu").hasClass("zoomOut")){
    		$(".dropdown-menu").removeClass("zoomOut");
    	}
    });

	$(".dropdown").mouseleave(function(){
			$(".dropdown-menu").addClass("zoomOut");
    	if($(".dropdown-menu").hasClass("zoomIn")){
    		$(".dropdown-menu").removeClass("zoomIn");
    	}
  });
  
	/* --------- Scroll TO Id Plugin-------------*/
	$(".main_nav a, .top_link, .footer_nav a").mPageScroll2id();


	/* Анимация товаров, галерея Magnific Popup*/

	$('.magnific_gallery').each(function(index , value){
  var gallery = $(this);
  var galleryImages = $(this).data('links').split(',');
    var items = [];
    for(var i=0;i<galleryImages.length; i++){
      items.push({
        src:galleryImages[i],
        title:''
      });
    }
    gallery.magnificPopup({
      mainClass: 'mfp-fade',
      items:items,
      gallery:{
        enabled:true,
        tPrev: $(this).data('prev-text'),
        tNext: $(this).data('next-text')
      },
      type: 'image'
    });
	});

	/* -------- FORMS VALIDATION --------- */
	jQuery.validator.addMethod("phonenumber", function(phone_number, element) {
	    phone_number = phone_number.replace(/\s+/g, "");
	    return this.optional(element) || phone_number.length > 9 && 
	    phone_number.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
	}, "<br />Будь-ласка, вкажіть вірний номер телефону");

	$(".callback_form").validate({
		rules: {
			callback_name: {
				required: true,
				maxlength: 20
			}, 
			callback_phone: {
				required: true,
				phonenumber: true
			}
		}, 
		messages: {
			callback_name: {
				required: "Будь-ласка, введіть своє ім'я",
				maxlength: "Максимальна кількість символів: 30"
			}, 
			callback_phone: {
				required: "Введіть свій телефон, щоб ми могли зателефонувати Вам"
			}
		}
	});

	$(".order_form").validate({
		rules: {
			order_name: {
				required: true,
				maxlength: 30
			}, 
			order_phone: {
				required: true,
				phonenumber: true
			}, 
			order_email: {
				required: true,
				email: true
			},
			order_comment: {
				maxlength: 200
			}

		}, 
		messages: {
			order_name: {
				required: "Будь-ласка, введіть своє ім'я",
				maxlength: "Максимальна кількість символів: 30"
			}, 
			order_phone: {
				required: "Введіть свій телефон, щоб ми могли зателефонувати Вам"
			}, 
			order_email: {
				required: "Будь-ласка, введіть свій email",
				email: "Введіть вірний формат email адреси"
			},
			order_comment: {
				maxlength: "Максимальна кількість символів: 200"
			}
		}
	});

	$(".buy_button").click(function(){
		var x = $(this).parent().parent(); // родительский элемент 2-го уровня
		var prod_name = x.find("div.prod_name").html(); 
		var prod_descr = x.find("div.prod_descr").html();
		var input_value = $("#order_product").val(prod_name); // назв. товара в input
		var input_value = $("#order_product_descr").val(prod_descr);

		var good_price = x.find(".prod_currentprice>span, .prod_newprice>span").html(); //	ищем цену товара
		$("#order_price").val(good_price);
	});

	$(".customorder_form").validate({
		rules: {
			custom_name: {
				required: true,
				maxlength: 20
			}, 
			custom_phone: {
				required: true,
				phonenumber: true
			},
			custom_email: {
				required: true,
				email: true
			},
			custom_comment: {
				required: true,
				maxlength: 300
			}
		}, 
		messages: {
			custom_name: {
				required: "Будь-ласка, введіть своє ім'я",
				maxlength: "Максимальна кількість символів: 30"
			}, 
			custom_phone: {
				required: "Введіть свій телефон, щоб ми могли зателефонувати Вам"
			},
			custom_email: {
				required: "Будь-ласка, введіть свій email",
				email: "Введіть вірний формат email адреси"
			},
			custom_comment: {
				required: "Нам потрібен короткий опис Вашої ідеї",
				maxlength: "Максимальна кількість символів: 300"
			}
		}
	});

	/* --------END OF FORMS VALIDATION ---------- */


	/* STORIES SLIDER OWL carousel*/
	$(".stories_slider").owlCarousel({
 
      nav: true, // показывать кнопки next и prev 
 			loop: true,
 			center: true,
 			smartSpeed: 500,
      items : 1,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
 
  });

	/* Date at footer */
	var y = new Date();
	document.getElementById("full_year").innerHTML = " " + y.getFullYear() + " ";

	/* Prevent scroll when modal is opened*/
  



});



