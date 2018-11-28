 $(document).ready(function() {

	// 탭 갯수가 6개 이하일때 넓이 조절 이하일때 조절바 노출
	var tapN = $(".tablist-type1 a").length;
	if (tapN<6) {
		var tapW = 1180/tapN;
		$(".tablist-type1 a").css( 'width', tapW+'px' );
	}else if(tapN>6){
		$(".scroll-btn").addClass('active')

	}

	//진료과 목록  아이콘 노출 
	$('.text-ko > a').focus(function(){
		$('.over-icon').css( 'display', 'none' );
		$(this).siblings('.over-icon').css( 'display', 'block' );
	}); 




});

