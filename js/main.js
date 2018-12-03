  var $header = $('.header');  
  var $footer = $('.footer'); 
  var $nav = $('.nav-btn'); 

$(document).ready(function() {


    //메인 클래스 적용(임시) 개발에서 적용 요망
    //현제 화면 오픈시 class 적용 전 화면이 보이는 문제  발생
    $(".header").addClass('main-style');
    $(".footer").addClass('main-style');    



    //메인 스크립트 - 서비스 영역 
    $('.main-service > div').mouseenter(function(){
      $(this).addClass('active');
      if ($(this).attr('class') == 'mychart active') {
        $(this).animate({height:315},300);
      }else{
        $(this).animate({height:200},300);
      } 
    });

    $('.main-service > div').mouseleave(function(){
      if ( $(this).find('input').length >= 1) {
        if ($(this).find('input').val()=='') {    
          $(this).animate({height:105},300);
          $(this).removeClass('active');    
        }
      }else{
        $(this).animate({height:105},300);
        $(this).removeClass('active');
      }
    });


    //메인 상단 슬라이드 
    $('.now-lolling').bxSlider({
      auto: true,
      autoControls: true
    });
    $('.main-bg').bxSlider({
      auto: true,
      autoControls: true
    });


    
  });



/* 스크롤 높이에 따라서 헤더 및 푸터 수정*/
$(window).scroll(function() { 


  if ($(this).scrollTop() >= 10) {
    $header.removeClass('main-style');
    $header.addClass('main-style2');
  }else {
    $header.addClass('main-style'); 
    $header.removeClass('main-style2');
  }

  if ($(this).scrollTop() >= 2010) {
    $footer.removeClass('main-style');
  }else {
    $footer.addClass('main-style'); 
  }


});










