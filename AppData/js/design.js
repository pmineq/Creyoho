$(document).ready(function(){

	//nav 
	$('.depth .nav-title').on('click', function(){
		$(this).parents('li').toggleClass('active');
	});

	//즐겨찾기
	$('.btn-favorite').on('click', function(){
		$(this).toggleClass('active');
	});

	// 상단 버튼
	$(window).scroll(function(){
		var scrT = $(window).scrollTop(); 
    var winH = $(window).height(); 
    var docH = $(document).height();

    if (winH < docH) {
    	if(scrT >= 300) {
    		$('.sticky-top').fadeIn();
    	} else {
    		$('.sticky-top').fadeOut();
    	}
    } else {
    	$('.sticky-top').hide();
    }
	});

	$('.sticky-top').on('click', function(){
		$('html, body').animate({scrollTop: 0}, 400);
		return false;
	});


	//table
	$('tbody').on('click', 'input[type="checkbox"]', function(){
		if($(this).is(':checked')){
			$(this).parents('tr').addClass('checked');
		} else {
			$(this).parents('tr').removeClass('checked');
		}
	});


	//popup OPEN    
	$('[data-popup-open]').on('click', function(e) {
		var targeted_popup_class = $(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
		e.preventDefault();
	});

	//popup CLOSE    
	$('[data-popup-close]').on('click', function(e) {
		var targeted_popup_class = $(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
		e.preventDefault();
	});


	//file
	$('.filebox').each(function(){
		$(this).find('.input-file').on('change',function(){
			var fileName = $(this).val();
			$(this).siblings('.upload-name').val(fileName);
		});
	});


	$('.input-datepicker').datepicker({
		changeMonth: true, 
		changeYear: true,
		nextText: '다음 달',
		prevText: '이전 달', 
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], 
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		showMonthAfterYear: true,
		dateFormat: "yy-mm-dd",
		showButtonPanel: true,
	});


	$('.header-alarm').on('click', function(){
		$('#popup_alarm').fadeToggle();
	});

	$('.header-user').on('click', function(){
		$('.user-popup').fadeToggle();
	});



	$('.guide, .guide-wrap').on('mouseover', function(){
		$('.guide-wrap').stop().fadeIn();
	});

	$('.guide, .guide-wrap').on('mouseleave', function(){
		$('.guide-wrap').stop().fadeOut();
	});


	$('.nav-close').on('click', function(){
		if($('.nav-wrap').hasClass('close')){
			$('.nav-wrap, .nav-close').removeClass('close');
			$('.btn-nav').addClass('active');
		} else {
			$('.nav-wrap, .nav-close').addClass('close');
			$('.btn-nav').removeClass('active');
		}
	});

	$('.btn-nav').on('click', function(){
		if($('.nav-wrap').hasClass('close')){
			$('.nav-wrap, .nav-close').removeClass('close');
			$('.btn-nav').addClass('active');
		} else {
			$('.nav-wrap, .nav-close').addClass('close');
			$('.btn-nav').removeClass('active');
		}
	});

	responsive();

	if($('body').hasClass('dark')){
		$('#ck_dark').prop("checked", true);
	} else {
		$('#ck_dark').prop("checked", false);
	}

});

$(window).on('resize', function(){
	responsive();
})

function responsive(){
	var windowW = $(window).width();
	if(windowW < 768){
		$('.nav-wrap, .nav-close').addClass('close');
		$('.btn-nav').removeClass('active');
	} else {
		$('.nav-wrap, .nav-close').removeClass('close');
		$('.btn-nav').addClass('active');
	}
}



