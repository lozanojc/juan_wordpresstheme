(function($) {

$(document).ready(function(){
    resizeContent();
    loadHome();

    $(window).resize(function() {
        resizeContent();
    });

    $(window).scroll(function(){
	scrollContent();
    stickyHeader();
	});

});
 


$('#site-navigation span .menu-menu-1-container .menu li').eq(0).addClass('columns large-4 medium-4 small-6').append("</span><div class='border right'><div class='border-tiny'></div></div>");
$('#site-navigation span .menu-menu-1-container .menu li').eq(1).addClass('columns large-3 medium-3 small-6').append("</span><div class='border right'><div class='border-tiny'></div></div>");
$('#site-navigation span .menu-menu-1-container .menu li').eq(2).addClass('columns large-5 medium-5 small-6').append("</span>");
$('#site-navigation span .menu-menu-1-container .menu li').eq(3).addClass('columns large-6 medium-6 small-6').append("</span><div class='border right'><div class='border-tiny'></div></div><div class='border top'><div class='border-tiny'></div></div>");
$('#site-navigation span .menu-menu-1-container .menu li').eq(4).addClass('columns large-6 medium-6 small-6').append("</span><div class='border top'><div class='border-tiny'></div></div>");

$('#site-navigation span .menu-menu-1-container .menu li a').eq(0).prepend("<span class='attribute'>Latest Work</span><span class='navigation-label'>");
$('#site-navigation span .menu-menu-1-container .menu li a').eq(1).prepend("<span class='attribute'>About</span><span class='navigation-label'>");
$('#site-navigation span .menu-menu-1-container .menu li a').eq(2).prepend("<span class='attribute'>Coordinates</span><span class='navigation-label'>");
$('#site-navigation span .menu-menu-1-container .menu li a').eq(3).prepend("<span class='attribute'>List of</span><span class='navigation-label'>");
$('#site-navigation span .menu-menu-1-container .menu li a').eq(4).prepend("<span class='attribute'>On Paper</span><span class='navigation-label'>");


/*Variables*/

var $btnHeader = $('#menu-btn'), 
	$header = $('#masthead');
	var quickViewTop = ($(window).height() - $('.inner-header-container').height())/2;
	var quickViewLeft = ($(window).width() - 600)/2;


/* Main Functions*/

	function centerMenu(){
		$('.inner-header-container').css({
			"top" : quickViewTop,
			"left" : quickViewLeft,
			"opacity": 1, 
			"display": "block",
		});
	}

	function containerOnOverlay() {
		$('.inner-header-container').css('background-color', '#f2f2f2');
		$('.inner-header-container').css('position', 'fixed');
		
	}

	function containerOnBg() {
		$('.inner-header-container').css('background-color', 'rgba(243, 243, 243, 0.7)');
		$('.inner-header-container').css('position', 'absolute');
		
	}



	function overlay(){
		$('body').addClass('overlay-layer');
	}

	function engageAnim() {
		$header.addClass('opened').velocity("fadeIn", { duration: 500});
		$('.inner-header-container').addClass('loaded').removeClass('no-anim');
	}
	
	function enterNav () {
		$('.main-navigation a').delay(1250).velocity("transition.slideUpIn", { stagger: 100 })
    		
	}
	
	function enterSiteDesc() {
		$('.site-description')
			.velocity(
			{
				opacity:1
			}, {
				duration: 750,
				delay:500
			}
		);
	}


	function enterFrame() {
		$('.frame-container')
			.velocity(
				{
				opacity:1
			}, {
				duration:750,
				delay:250
			}
		);

	}

	function buttonIn() {
		$btnHeader.velocity("transition.slideLeftIn", 500).delay(750); 
	}

	function buttonOut(){
		$btnHeader.velocity("transition.slideLeftOut", 500).delay(750); 
	}

	function animateTinyBorders(){

		$('.border .border-tiny').velocity({
			height:"100%", 
			width:"100%",
			backgroundColor:"#38a7a8"
		},	{ 
			delay:1500, 
			duration: 1000, 
			easing: "easeInOut"
		 });

		$('.border .top .border-tiny').velocity({
			height:"100%", 
			width:"100%",
			backgroundColor:"#38a7a8"
		},	{ 
			delay:1750, 
			duration: 750, 
			easing: "easeInOut"
		 });
	}

	function animateProjectTinyBorders(){

		$('.frame-container .border .border-tiny-project').velocity({
			height:"100%", 
			width:"100%",
			backgroundColor:"#38a7a8"
		},	{ 
			delay:0, 
			duration: 0, 
			easing: "easeInOut"
		 });

		$('.frame-container .border .top .border-tiny-project').velocity({
			height:"100%", 
			width:"100%",
			backgroundColor:"#38a7a8"
		},	{ 
			delay:0, 
			duration: 0, 
			easing: "easeInOut"
		 });
	}

	function reverseTinyBorders(){
			$('.frame-container .border .border-tiny').velocity({
			height:"0", 
			width:"0",
			backgroundColor:"#38a7a8"
		},	{ 
			delay:0, 
			duration: 250, 
			easing: "easeinOut"
		 });

	}


	function reverseProjectTinyBorders(){
			$('.frame-container .border .border-tiny-project').velocity({
			height:"0", 
			width:"0",
			backgroundColor:"#38a7a8"
		},	{ 
			delay:0, 
			duration: 250, 
			easing: "easeinOut"
		 });

	}

	function animateInnerContainer() {

		$('.inner-header-container')
			.velocity({
			width:"600px"
		}, {
			duration:1200
		});
	}



	function mainBorderAnimate(){
		$('.loaded .frame-container .frame > div ').velocity({
			height:"100%", 
			width:"100%",
			backgroundColor:"#38a7a8"
		},	{ 
			delay:1250, 
			duration: 750, 
			easing: "easeInOut"
		 });

	}


	function reverseInnerContainer(){

		$('.inner-header-container')
	      .velocity({
	      	width:"0"
	      }, {
	      	duration:750, 
	      	easing:"easeInOut"
	     });


	}


	function mainBorderReverse(){
		$('.no-anim .frame-container .frame > div ').velocity({
			height:"0", 
			width:"0%",
			background: '#38a7a8'
		},	{ 
			delay:0, 
			duration: 750, 
			easing: "easeInOut"
		 });
	}

	function unloadContainer() {
		$header.removeClass('opened').velocity("fadeOut", { duration: 500 });	
	}

	function removeOverlay() {
		$('body').removeClass('overlay-layer');	
	}


	
	function unloadInnerheader() {
		$('.inner-header-container').addClass('no-anim').removeClass('loaded');
	}

	
	function fadeDesc() {
		$('.site-description').velocity({opacity:0}, 250);
	}

	function fadeNav() {
		$('.main-navigation a').velocity({opacity:0});
	}

	function fadeQuickview () {
		$('.cd-quick-view').addClass('no-anim').removeClass('loaded');
	}

	function lockScroll(){
		var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
	      ];
	      var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
	      html.data('scroll-position', scrollPosition);
	      html.data('previous-overflow', html.css('overflow'));
	      html.css('overflow', 'hidden');
	      window.scrollTo(scrollPosition[0], scrollPosition[1]);
	}

	function unlockScroll () {
		var html = jQuery('html');
     	var scrollPosition = html.data('scroll-position');
      	html.css('overflow', html.data('previous-overflow'));
      	window.scrollTo(scrollPosition[0], scrollPosition[1])
	}


	function openMenu() {
		overlay();
		centerMenu();
		engageAnim();
		enterNav();
		enterSiteDesc();
		enterFrame();
		buttonOut();
		animateInnerContainer();
		mainBorderAnimate();
		animateTinyBorders();
		lockScroll();
		containerOnOverlay();
		return false;
	}


	function closeMenu(){

		unloadContainer();
		removeOverlay();
		unloadInnerheader();
		fadeDesc();
		fadeNav();
		fadeQuickview();
		buttonIn();
		reverseInnerContainer();
		reverseTinyBorders();
		mainBorderReverse();
		unlockScroll();
		containerOnBg();
	}

		$('body').on('click', function(event){
			if( $(event.target).is('body.overlay-layer') || $(event.target).is('.cd-close'))  {
				if ($header.hasClass('opened')){
					closeMenu();
					mainBorderReverse();
					reverseTinyBorders();
				}

				closeQuickView( sliderFinalWidth, maxQuickWidth);						
				$('.cd-quick-view').addClass('no-anim').removeClass('loaded');
				buttonIn();
				mainBorderReverse();
				reverseProjectTinyBorders();
			}
		});









function loadHome() {
 	if ($("body").hasClass("home")){
 		$(".home-intro").delay(3000).queue(function(){
 			$(this).addClass('ready');
 			/*$(".main-title-letter").velocity("transition.slideUpBigIn", { stagger: 250 })
    		.delay(2000); */

		centerMenu();
		engageAnim();
		enterNav();
		enterSiteDesc();
		enterFrame();
		buttonOut();
		animateInnerContainer();
		mainBorderAnimate();
		animateTinyBorders();


	 		});



 		$('.block1').waypoint(function( direction ) {
			if ( direction === 'down' ) {
				$('.inner-header-container').velocity("transition.slideUpBigOut").delay(250); 
				function hideHome() {
					buttonIn();
					unloadContainer();
					unloadInnerheader();
					fadeDesc();
					fadeNav();
					fadeQuickview();
					reverseInnerContainer();
					reverseTinyBorders();
					mainBorderReverse();

				}

				setTimeout(hideHome, 750);
					
			
					} else {
						
						centerMenu();
						engageAnim();
						enterNav();
						enterSiteDesc();
						enterFrame();
						buttonOut();
						animateInnerContainer();
						mainBorderAnimate();
						animateTinyBorders();
					}
		});	


 		

	}
}


$('#menu-btn').on('click', openMenu);







function resizeContent() {
    var $height = $(window).height() - 46;
    $('.slider-full-size').height($height + 46);
    $('.block1').height($height + 100);
    $('.home-intro').height($height + 100);
}



/*SCROLLING BEHAVIOR*/


function scrollContent(){



	var newScroll = $(window).scrollTop();
	var	$toLoad = $('.to-load');
	var $introToLoad = $('.intro-load');
	var tempOpacity = (newScroll * 75) / $(window).height();
	console.log('scrolling');

	if (tempOpacity > 15)
    		tempOpacity = 15;




	$toLoad.each(function(){
		var object = $(this);

		if(newScroll + $(window).height() * 0.85 > $(this).offset().top){
			object.removeClass('no-anim');
			object.addClass('loaded');

		} else if(newScroll + $(window).height() < $(this).offset().top) {
			object.addClass('no-anim');
			object.removeClass('loaded');
		}
	});

	$introToLoad.each(function(){
		var object = $(this);

		if(newScroll + $(window).height() * 0.6 > $(this).offset().top){
			object.removeClass('no-anim');
			object.addClass('loaded');

		} else if(newScroll + $(window).height()< $(this).offset().top) {
			object.addClass('no-anim');
			object.removeClass('loaded');
		}

	});



	function blurBg(){
		var vague = $(' .flex-active-slide').Vague({
			intensity:     tempOpacity,      // Blur Intensity
		    forceSVGUrl:    true   // Force absolute path to the SVG filter,
		});



		if (tempOpacity > 0) {
				vague.toggleblur();
				$('#menu-btn').css('z-index', 901).fadeIn(750);
				$('.flex-direction-nav').css('opacity', 0);
			} else if (tempOpacity < 1){
				vague.destroy();
				$('#menu-btn').css('z-index', 800).fadeOut(750);
				$('.flex-direction-nav').css('opacity', 1);

			}
		}

		if ($("body").hasClass("single")) {
			blurBg();
		}

	}


	function stickyHeader() {
		var distance = $('.entry-header').offset().top,
    		$window = $(window),
    		$height = $(window).height() - 50;
    		entryHeader = $(".entry-header").height() - 50;


    		$(window).bind('scroll', function () {
			    if ($(window).scrollTop() > $height) {
			        $('.block3').height(160);
			        $('.entry-header').addClass('fixed');
			        

			    } else {
			    	$('.block3').height(20);
			        $('.entry-header').removeClass('fixed');
			        
			    }
			});
    	}




//final width --> this is the quick view image slider width
	//maxQuickWidth --> this is the max-width of the quick-view panel
	var sliderFinalWidth = 400,
		maxQuickWidth = 900;

	//open the quick view panel
	$('.cd-trigger').on('click', function(event){
		$(this).parent('.hentry').addClass('cd-item');

		var selectedImage = $(this).parent('.cd-item').children('img'),
			slectedImageUrl = selectedImage.attr('src');
			

		$('body').addClass('overlay-layer');
		animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');

		//update the visible slider image in the quick view panel
		//you don't need to implement/use the updateQuickView if retrieving the quick view data with ajax
		updateQuickView(slectedImageUrl);
		$('.cd-quick-view').addClass('loaded').removeClass('no-anim');

		$btnHeader.velocity("transition.slideLeftOut", 500).delay(750);
		mainBorderAnimate();
		animateProjectTinyBorders();

	});

	//close the quick view panel

	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
			closeQuickView( sliderFinalWidth, maxQuickWidth);
		}

	});

	//quick view slider implementation
	$('.cd-quick-view').on('click', '.cd-slider-navigation a', function(){
		updateSlider($(this));
	});


	//center quick-view on window resize
	$(window).on('resize', function(){
		if($('.cd-quick-view').hasClass('is-visible')){
			window.requestAnimationFrame(resizeQuickView);
		}
	});

	function updateSlider(navigation) {
		var sliderConatiner = navigation.parents('.cd-slider-wrapper').find('.cd-slider'),
			activeSlider = sliderConatiner.children('.selected').removeClass('selected');
		if ( navigation.hasClass('cd-next') ) {
			( !activeSlider.is(':last-child') ) ? activeSlider.next().addClass('selected') : sliderConatiner.children('li').eq(0).addClass('selected'); 
		} else {
			( !activeSlider.is(':first-child') ) ? activeSlider.prev().addClass('selected') : sliderConatiner.children('li').last().addClass('selected');
		} 
	}



	function updateQuickView(url) {
		$('.cd-quick-view .cd-slider li').removeClass('selected').find('img[src="'+ url +'"]').parent('li').addClass('selected');
	}

	function resizeQuickView() {
		var quickViewLeft = ($(window).width() - $('.cd-quick-view').width())/2,
			quickViewTop = ($(window).height() - $('.cd-quick-view').height())/3;
		$('.cd-quick-view').css({
		    "top": quickViewTop,
		    "left": quickViewLeft,
		});
	} 

	function closeQuickView(finalWidth, maxQuickWidth) {
		var close = $('.cd-close'),
			activeSliderUrl = close.siblings('.cd-slider-wrapper').find('.selected img').attr('src'),
			selectedImage = $('.empty-box').find('img');
		//update the image in the gallery
		if( !$('.cd-quick-view').hasClass('velocity-animating') && $('.cd-quick-view').hasClass('add-content')) {
			selectedImage.attr('src', activeSliderUrl);
			animateQuickView(selectedImage, finalWidth, maxQuickWidth, 'close');
		} else {
			closeNoAnimation(selectedImage, finalWidth, maxQuickWidth);
		}
	}

	function animateQuickView(image, finalWidth, maxQuickWidth, animationType) {
		//store some image data (width, top position, ...)
		//store window data to calculate quick view panel position
		var parentListItem = image.parent('.cd-item'),
			topSelected = image.offset().top - $(window).scrollTop(),
			leftSelected = image.offset().left,
			widthSelected = image.width(),
			heightSelected = image.height(),
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			finalLeft = (windowWidth - finalWidth)/2,
			finalHeight = finalWidth * heightSelected/widthSelected,
			finalTop = (windowHeight - finalHeight)/4,
			quickViewWidth = ( windowWidth * 0.8 < maxQuickWidth ) ? windowWidth * 0.8 : maxQuickWidth ,
			quickViewLeft = (windowWidth - quickViewWidth)/2;

		if( animationType == 'open') {
			//hide the image in the gallery
			parentListItem.addClass('empty-box');
			//place the quick view over the image gallery and give it the dimension of the gallery image
			$('.cd-item .cd-quick-view').css({
			    "top": topSelected,
			    "left": leftSelected,
			    "width": widthSelected,
			}).velocity({
				//animate the quick view: animate its width and center it in the viewport
				//during this animation, only the slider image is visible
			    'top': finalTop+ 'px',
			    'left': finalLeft+'px',
			    'width': finalWidth+'px',
			    'opacity' : 1,
			    'height' : 100 + '%', 
			}, 100, function(){
				//animate the quick view: animate its width to the final value
				$('.cd-item .cd-quick-view').addClass('animate-width').velocity({
					'left': quickViewLeft+'px',
			    	'width': quickViewWidth+'px',
			    	'opacity' : 1, 
				}, 500, 'easeInOut' ,function(){
					//show quick view content
					$('.cd-item .cd-quick-view').addClass('add-content');
				});

			$('.frame-container').velocity(
				{
					opacity:1
				}, {
					duration:750,
					delay:250
				}
			);


			}).addClass('is-visible');
		} else {
			//close the quick view reverting the animation
			$('.cd-quick-view').velocity({
				'opacity' : 0,
				'width' :0, 
				'height' : 0
			}, 500, 'easeInOut', function(){
				$(this).removeClass('add-content animate-width is-visible');
					$('body').removeClass('overlay-layer');
					parentListItem.removeClass('empty-box cd-item');
			});


			$('.frame-container').velocity(
				{
					opacity:0
				}, {
					duration:100,
					delay:0
				}
			);

		}
	}

	function closeNoAnimation(image, finalWidth, maxQuickWidth) {
		var parentListItem = $('.cd-trigger').parent('.cd-item'),
			topSelected = image.offset().top - $(window).scrollTop(),
			leftSelected = image.offset().left,
			widthSelected = image.width();

		//close the quick view reverting the animation
		$('body').removeClass('overlay-layer');
		parentListItem.removeClass('empty-box cd-item');
		$('.cd-quick-view').velocity("stop").removeClass('add-content animate-width is-visible').css({
			"top": topSelected,
		    "left": leftSelected,
		    "width": widthSelected,
		});
	}



	




})(jQuery);



