;(function($){

  let cnt=0;
  //alert(); //자바스크립트 확인용
  //console.log($); //제이쿼리 확인용

  // $('.main-btn').on({
  //   mouseenter: function(){
  //     $('.sub').slideUp(0);
  //     $(this).next().slideDown(300);
  //     $('.main-btn').removeClass('on');
  //     $(this).addClass('on');
  //   }
  // });

  // $('#nav').on({
  //   mouseleave: function(){
  //     $('.main-btn').removeClass('on');
  //     $('.sub').slideUp(300);
  //   }
  // });

  function mainSlide(){
    $('.s-wrap1').animate({left:-1200*cnt},600,function(){
      if(cnt===3){
        cnt=0;
      }
      $('.s-wrap1').animate({left:-1200*cnt},0);
    });
    
  }


  function nextCount(){
    cnt++;
    mainSlide();
  }

  function autoTimer(){
    setInterval(nextCount, 3000);
  }

  autoTimer();

  ///////////////////////////////////////// 공지사항 갤러리
  // $('.gallery-btn').on({
  //   click: function(){
  //     $('.notice-btn, .notice, .gallery-btn, .gallery').addClass('on');
  //   }
  // });

  // $('.notice-btn').on({
  //   click: function(){
  //     $('.notice-btn, .notice, .gallery-btn, .gallery').removeClass('on');
  //   }
  // });

    ///////////////////////////////////////// 모달창 이벤트
    // $('.modal-btn').on({
    //   click: function(){
    //     $('#modal').fadeIn(300);
    //   }
    // });

    // $('.m-close').on({
    //   click: function(){
    //     $('#modal').fadeOut(300);
    //   }
    // });
})(jQuery);