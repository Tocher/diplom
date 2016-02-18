$(document).ready(function() {
	// wallpaper
	/*1152
	window.innerWidth
	$('#page').*/

	var promo = true;
	setTimeout(function() {
		if(promo) {
			$('.promo').hide();
			$('#page').show();
		}
	},33000);
	
	$('.skip').click(function() {
		promo = false;
		$('.promo').fadeOut('slow');
		$('#page').fadeIn('slow');
	}); 

	//buttons	
	var btnab = false;	
	var btnay = false;	
	var btnar = false;	
	$('.blue_button').mouseenter(function(event) {
		if(btnab) return;
		btnab = true;
		$(this).find('i').css('box-shadow','1px 1px 5px #000');
		$(this).find('span').fadeIn();
		$(this).find('span').animate({'width':'370px'},function() { btnab = false; });
	})
	.mouseleave(function(event) {
		$(this).find('span').animate({'width':'0px'});
		$(this).find('span').fadeOut();
		$(this).find('i').css('box-shadow','none');
	});

	$('.yellow_button').mouseenter(function(event) {
		if(btnay) return;
		btnay = true;
		$(this).find('i').css('box-shadow','1px 1px 5px #000');
		$(this).find('span').fadeIn();
		$(this).find('span').animate({'width':'320px'},function() { btnay = false; });
	})
	.mouseleave(function(event) {
		$(this).find('span').animate({'width':'0px'});
		$(this).find('span').fadeOut();
		$(this).find('i').css('box-shadow','none');
	});

	$('.red_button').mouseenter(function(event) {
		if(btnar) return;
		btnar = true;
		$(this).find('i').css('box-shadow','1px 1px 5px #000');
		$(this).find('span').fadeIn();
		$(this).find('span').animate({'width':'320px'},function() { btnar = false; });
	})
	.mouseleave(function(event) {
		$(this).find('span').animate({'width':'0px'});
		$(this).find('span').fadeOut();
		$(this).find('i').css('box-shadow','none');
	});

	function green_button_event(name) {
		var btnag = false;	
		$('.green_button').mouseenter(function(event) {
			if(btnag) return;
			btnag = true;
			$(this).find('i').css('box-shadow','1px 1px 5px #000');
			$(this).find('span').fadeIn();
			$(this).find('span').animate({'width':'320px'},function() { btnag = false; });
		})
		.mouseleave(function(event) {
			$(this).find('span').animate({'width':'0px'});
			$(this).find('span').fadeOut();
			$(this).find('i').css('box-shadow','none');
		});

		$('.green_button').click(function() {	
			var md = '#Modal'+name;	
			console.log(md);	
			$(md).modal('show');
		});
	}


	//buttons click
	$('.blue_button').click(function() {
		$('.content').removeClass('content_page');
		$('.content .tema').remove();
		$('.cat0 img').fadeIn();
		$('.nav .blue_button').animate({'left':'153px'});
		$('.nav .yellow_button').animate({'left':'241px'});
		$('.nav .red_button').animate({'left':'67px'});
		$('.blue_button').animate({'top': '149px'});
		$('.yellow_button').animate({'top': '151px'});
		$('.red_button').animate({'top': '170px'});
		$('.cats div').show();
		$('.cats').css('left','0');	
		$('.cats div').css('left','0');	
		$('.prilag div').hide();
		$('.info div').hide();
		$('.green_button').hide();

		$('.cats').show();
		$('.content').animate({'width':'1350px'});
		var cat_imgs = $('.cats div');
		for (var i = 0 ; i < cat_imgs.length; i++) {
			$(cat_imgs[i]).css('z-index',20-(1*i));
			$(cat_imgs[i]).animate({'left':430 + (85*i) + 'px'});
		};

		var cat1_hovered = false;
	
		$('.cats div').mouseenter(function(event) {
			if(cat1_hovered)
				return;
			cat1_hovered = true;

			$('.content').animate({'width':'1350px'});
			var cur_i = -1;
			
			$(this).animate({'width':437+'px'});				
		}).mouseleave(function(event) {
			$(this).animate({'width':90+'px'}, function() { cat1_hovered = false; });
		});
		

		$('.cats div').click(function() {
			$('.content').dequeue('fx');
			$('.cats div').dequeue('fx');
			$('.cats div').unbind('mouseenter');
			$('.cats div').unbind('mouseleave');
			$('.cats').animate({'left':'35%'});		
			$('.content .tema').remove();
			var page_number = $(this).attr('class').substr($(this).attr('class').length-1,$(this).attr('class').length);
			var page_name = "btn1_page" + page_number;
			page_number = eval("btn1_page" + page_number);
			$('.content').animate({'width':'90%'}).addClass('content_page').append(page_number);	
			$(".fancybox").fancybox(); // add pupups

			$('.nav>div').animate({'left':'85px'});
			$('.blue_button').animate({'top': '141px'}); //149
			$('.yellow_button').animate({'top': '143px'}); //151
			$('.red_button').animate({'top': '159px'}); //170
			$('.cat0 img').fadeOut();
			for (var i = 0 ; i < cat_imgs.length; i++) {
					var cat_img_left = $(cat_imgs[i]).css('left');
					cat_img_left = parseInt(cat_img_left.substr(0,cat_img_left.length-2));
					$(cat_imgs[i]).animate({'left':cat_img_left+1000+'px'}, 'slow').fadeOut();
			}
			$('.content .tema').delay(400).fadeIn();
			$('.green_button').remove();
			$('.nav').append('<div class="green_button"><i></i><span>Материалы</span></div>');			
			green_button_event(page_name);
			$('.content').css('height',window.innerHeight+'px');
		});
	});

	// Yellow Button

	$('.yellow_button').click(function() {
		$('.prilag').show();
		$('.content').animate({'width':'1300px'});
		$('.cats div').hide();
		$('.info div').hide();
		$('.prilag div').show();
		$('.prilag div').css('left','0');
		$('.prilag').animate({'left':'0'});	
		$('.content').removeClass('content_page');
		$('.content .tema').remove();
		$('.cat0 img').fadeIn();
		$('.cats').css('left','0');	
		$('.nav .blue_button').animate({'left':'153px'});
		$('.nav .yellow_button').animate({'left':'241px'});
		$('.nav .red_button').animate({'left':'67px'});
		$('.blue_button').animate({'top': '149px'});
		$('.yellow_button').animate({'top': '151px'});
		$('.red_button').animate({'top': '170px'});
		$('.green_button').hide();



		var cat_imgs = $('.prilag div');
		for (var i = 0 ; i < cat_imgs.length; i++) {
			$(cat_imgs[i]).css('z-index',20-(1*i));
			$(cat_imgs[i]).animate({'left':430 + (140*i) + 'px'});
		};

		var cat2_hovered = false;
	
		$('.prilag div').mouseenter(function(event) {
			if(cat2_hovered)
				return;
			cat2_hovered = true;

			$('.content').animate({'width':'1300px'});
			var cur_i = -1;
			
			$(this).animate({'width':436+'px'});				
		}).mouseleave(function(event) {
			$(this).animate({'width':140+'px'}, function() { cat2_hovered = false; });
		});


		$('.prilag div').click(function() {
			$('.content').dequeue('fx');
			$('.prilag div').dequeue('fx');
			$('.prilag div').unbind('mouseenter');
			$('.prilag div').unbind('mouseleave');
			$('.prilag').animate({'left':'35%'});		
			$('.content .tema').remove();
			var page_number = $(this).attr('class').substr($(this).attr('class').length-1,$(this).attr('class').length);
			page_number = eval("btn2_page" + page_number);
			$('.content').animate({'width':'90%'}).addClass('content_page').append(page_number);	
			$(".fancybox").fancybox(); // add pupups

			//tabs activate
			$("#myTab a").click(function (e) {
			  e.preventDefault();
			  $(this).tab("show");
			})

			$('.nav>div').animate({'left':'85px'});
			$('.blue_button').animate({'top': '141px'}); //149
			$('.yellow_button').animate({'top': '143px'}); //151
			$('.red_button').animate({'top': '159px'}); //170
			$('.cat0 img').fadeOut();
			for (var i = 0 ; i < cat_imgs.length; i++) {
					var cat_img_left = $(cat_imgs[i]).css('left');
					cat_img_left = parseInt(cat_img_left.substr(0,cat_img_left.length-2));
					$(cat_imgs[i]).animate({'left':cat_img_left+1000+'px'}, 'slow').fadeOut();
			}
			$('.content .tema').delay(400).fadeIn();
			$('.green_button').remove();
			//$('.nav').append('<div class="green_button"><i></i><span>Материалы</span></div>');			
			//green_button_event();
			$('.content').css('height',window.innerHeight+'px');
		});
		

	});


	// Red Button
	$('.red_button').click(function() {
		$('.cats div').hide();
		$('.info div').hide();
		$('.prilag div').hide();
		$('.content').dequeue('fx');
		$('.cats div').dequeue('fx');
		$('.cats div').unbind('mouseenter');
		$('.cats div').unbind('mouseleave');
		$('.cats').animate({'left':'35%'});		
		$('.content .tema').remove();
		var page_number;
		page_number = eval("gallery");
		$('.content').animate({'width':'90%'}).addClass('content_page').append(page_number);	
		$(".fancybox").fancybox(); // add pupups

		$('.nav>div').animate({'left':'85px'});
		$('.blue_button').animate({'top': '141px'}); //149
		$('.yellow_button').animate({'top': '143px'}); //151
		$('.red_button').animate({'top': '159px'}); //170
		$('.cat0 img').fadeOut();		
		$('.content .tema').delay(400).fadeIn();
		$('.green_button').remove();
		$('.content').css('height',window.innerHeight+'px');
	});
	
});