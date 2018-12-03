

$(document).ready(function() {
	var $allBtn=$(".btn-allmenu");
	var $closeBtn=$(".btn-close");
	var $header = $('.header');  
	var $footer = $('.footer'); 
	var $nav = $('.nav-btn'); 
	var $mainWrap=$(".main-wrap");
	var $opensectionWrap=$(".opensection-wrap");
	var $container=$(".container");
	var $gnb2depth=$(".gnb-2depth a");
	var $gnb3Wrap=$(".gnb3-wrap");


	var allBtnNum = 0;	//전체메뉴 기본 설정값
	var mainY = 'N';	//메인여부 기본 설정값



	//메인 메뉴 
	function openMenu(){	
		$opensectionWrap.slideDown("fast");
		$allBtn.hide();
		$closeBtn.show();
		 if($header.attr('class')=='header main-style'){
		 	$header.removeClass('main-style');
		 	mainY = 'Y';
		 }

	}

	function closeMenu(){		
		if (allBtnNum==0) {
			$opensectionWrap.stop().slideUp("fast");
			$allBtn.show();
			$closeBtn.hide();
			 if (mainY=='Y' && $(this).scrollTop() == 0) {				
			 	$header.addClass('main-style');			
			 }
		}
	}


	//전체버튼 클릭 이벤트
	$allBtn.click(function(event) {
		allBtnNum = 1;	
		openMenu();
	});
	$closeBtn.click(function(event) {
		allBtnNum = 0;	
		closeMenu();
	});
	$mainWrap.click(function(event) {
		allBtnNum = 0;	
		closeMenu();
	});
	$container.click(function(event) {
		allBtnNum = 0;	
		closeMenu();
	});


	//메뉴 롤오버 이벤트 
	$(".gnb").mouseenter(function(){
		openMenu();
	});
	$(".nav-wrap").mouseleave(function(){
		closeMenu();	
	});


	//메뉴 - 2depth
	$gnb2depth.mouseenter(function(){
		$(this).addClass('active');
		$(this).siblings('gnb3Wrap').show();
	});
	$gnb2depth.mouseleave(function(){		
		$(this).removeClass('active');
	});

	//메뉴 - 3depth
	$gnb3Wrap.mouseenter(function(){
		$(this).siblings('a').addClass('active');
		$(this).show();
	});
	$gnb3Wrap.mouseleave(function(){		
		$(this).siblings('a').removeClass('active');
		$(this).hide();
	});





	// 탭 갯수가 6개 이하일때 넓이 조절 이하일때 조절바 노출
	var tapN = $(".tablist-type1 a").length;
	if (tapN < 6) {
		var tapW = 1180/tapN;
		$(".tablist-type1 a").css( 'width', tapW+'px' );
	}else if(tapN > 6){
		$(".scroll-btn").addClass('active')
	}



	//진료과 목록  아이콘 노출 
	$('.text-ko > a').focus(function(){
		$('.over-icon').css( 'display', 'none' );
		$(this).siblings('.over-icon').css( 'display', 'block' );
	});




});







