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

  $(window).load(function() {
  	setTimeout(function(){
  			$("#preloader").css("opacity", "0");
  	}, 2000)
  });
});
