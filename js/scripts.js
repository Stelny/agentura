$(document).ready(function(){
  $(".masonry-item img").mousemove(function(e){
    $(this).siblings(".box").css("display", "flex");
    $(".box").css('top',e.pageY+15);
    $(".box").css('left',e.pageX+15);
  });
  $(".masonry-item img").mouseleave(function(e){
    $(this).siblings(".box").css("display", "none");
  });

  $(window).scroll(function(){
    var sticky = $('header');
    var margin = $('.start-content');
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      sticky.addClass('fixed');
      margin.addClass("margin");
    }
    else {
      sticky.removeClass('fixed');
      margin.removeClass("margin");
    }
  });
  $(".scrollTop").click(function(e){
    e.preventDefault();
      $('html, body').animate({
          scrollTop: $("body").offset().top
      }, 1000);
    })
  orderOfitems = () => {
    let counter = 0;
    let prevSame = false;
    $(".project__item").each(function(){
      $(this).css("order", counter);
      if (!$(this).hasClass("image")) {
        if (prevSame) {
          $(this).css("order", counter+5);
        }
        prevSame = true;
      } else {
        prevSame = false;
      }
      counter++;
    })
  }
  let width = $(window).width();
  if (width <= 1200) {
    orderOfitems();
  } else {
    let counter = 0;
    $(".project__item").each(function(){
      $(this).css("order", counter);
      counter++;
    })
  }

  $(window).resize(function(){
    let width = $(window).width();
    if (width <= 1200) {
      orderOfitems();
    } else {
      let counter = 0;
      $(".project__item").each(function(){
        $(this).css("order", counter);
        counter++;
      })
    }
  });



});
/*$(window).load(function() {
  setTimeout(function(){
      $("#preloader").css("opacity", "0").css("z-index","-1");
      $("body").css("overflow", "scroll");
  }, 2000)
});*/
