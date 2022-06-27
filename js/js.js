/*  visualizar y ocultar menu */
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()< 80){
			$('.navbar').css({
				'margin-top': '-100px',
				'opacity': '0'
			});

			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,0)'
			});
		}else {
			$('.navbar').css({
				'margin-top': '0',
				'opacity': '1'
			});

			$('.navbar-default').css({
				'background-color':'rgba(59,59,59,.7)',
				'border-color':'#444'
			});

			$('navbar-brand img').css({
				'height':'35px',
				'padding-top':'0'
			});

			$('.navbar-nav > li > a').css({
				'padding-top':'15px'
			})
		}
	});
});

/* Añadiendo Smooth Scrolling https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
$(document).ready(function(){
	$('.nav-item').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* Activando un item del menu mediante un click */
$(document).ready(function(){
	$('.navbar-nav li a').on('click', function(){
		$('.navbar-nav li a').parent().removeClass('active');
		$(this).parent().addClass('active')
	});
});

/* Activando un item del menu mediante el scroll */
$(document).ready(function(){
	$(window).scroll(function(){
		$('section').each( function(){
			var bb = $(this).attr('id');
			var hei = $(this).outerHeight();
			var grttop = $(this).offset().top - 70;

			if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei){
				$(".navbar-nav li a[href='#"+ bb +"']").parent().addClass('active');
			}else {
				$(".navbar-nav li a[href='#"+ bb +"']").parent().removeClass('active');
			}
		});
	});
});

/* Añadir auto-padding para el centrado del header */
$(document).ready(function(){
	setInterval( function(){
		var windowHeight = $(window).height();
		var containerHeight =$('.header-container').height();
		var padTop = windowHeight - containerHeight;

		$('.header-container').css({
			'padding-top':Math.round( padTop/2)+'px',
			'padding-bottom':Math.round( padTop/2)+'px'
		});
	},10)
});

/* bxslider */
$(document).ready(function(){
  $('.bxslider').bxSlider({
  	slideWidth: 292.5,
  	auto: true,
  	minSlides: 1,
  	maxSlides: 3,
  	slideMargin: 50	
  });
});

/* bfintal / contador */
$('.counter-run').counterUp({
    delay: 10,
    time: 2000
});




