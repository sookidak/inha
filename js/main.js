


$(document).ready(function() {
  var $header = $('.header'),  
  $footer = $('.footer'),
  $navBtn = $(".nav-btn a"),
  $service = $('.main-service > div'),
  $html = $('html, body');



    //메인 클래스 적용(임시) 개발에서 적용 요망
    //현제 화면 오픈시 class 적용 전 화면이 보이는 문제  발생
    $header.addClass('main-style');
    $footer.addClass('main-style'); 


    //메인 스크립트 - 서비스 영역 
    $service.mouseenter(function(){
      $(this).addClass('active');
      if ($(this).attr('class') == 'mychart active') {
        $(this).animate({height:315},300);
      }else{
        $(this).animate({height:200},300);
      } 
    });

    $service.mouseleave(function(){
      if ( $(this).find('input').length >= 1) {
        if ($(this).find('input').val()=='') {    
          $(this).animate({height:105},300)
          .removeClass('active');    
        }
      }else{
        $(this).animate({height:105},300)
        .removeClass('active');
      }
    });


    //메인 상단 슬라이드 적용
    $('.now-lolling').bxSlider({
      auto: true,
      autoControls: true
    });
    $('.main-bg').bxSlider({
      auto: true,
      autoControls: true
    });


    //메인 네비 버튼 클릭시 //0 960 1920
    $navBtn.on('click', function() {
     var scrollPosition = $($(this).attr("data-target")).offset().top;
     $navBtn.removeClass('active');
     $(this).addClass('active');
     $html.animate({scrollTop : scrollPosition}, 400);
     console.log(scrollPosition);
   });



    var mainScroll = function(i, height){
      //console.log("ss");
      //$html.animate({scrollTop : height}, 400);
      $navBtn.removeClass('active')
      .eq(i).addClass('active');
    }


    //마우스 휠 업다운 이벤트 작업중
    $('.main-wrap').bind('mousewheel', function(e){
      if(e.originalEvent.wheelDelta /120 > 0) {
        
        console.log('scrolling up !');
      }
      else{
        console.log('scrolling down !');
      }
    });

    
    var height = $(document).scrollTop();

    if ( height > 1 ) {
       $header.removeClass('main-style')
    .addClass('main-style2');
    }else if ( height <= 500 ) {
      mainScroll(0, 0);
    }else if (500 < height <= 1400) {
      mainScroll(1, 960);
    }else if (1400 < height ) {
      mainScroll(2, 1920);
    }





 });

/* 스크롤 높이에 따라서 헤더 및 푸터 수정*/
$(window).scroll(function() { 
  var $header = $('.header');  
  var $footer = $('.footer'); 
  var height = $(document).scrollTop();
  log(height);


  if ($(this).scrollTop() >= 1) {
    $header.removeClass('main-style')
    .addClass('main-style2');
  }else {
    if ($('.opensection-wrap').css('display')=='none') {
      $header.addClass('main-style')
      .removeClass('main-style2'); 
    }

  }

  if ($(this).scrollTop() >= 2010) {
    $footer.removeClass('main-style');
  }else {
    $footer.addClass('main-style'); 
  }


});


function log(str){
  $('#log').text(str);
}
