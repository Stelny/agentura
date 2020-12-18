$(document).ready(function(){

  AOS.init();

  $(".masonry-item img").mousemove(function(e){
    $(this).siblings(".box").css("display", "flex");
    $(".box").css('top',e.pageY+15);
    $(".box").css('left',e.pageX+15);
  });
  $(".masonry-item img").mouseleave(function(e){
    $(this).siblings(".box").css("display", "none");
  });
  var owl = $('.work__slider');
  owl.owlCarousel({

    margin:10,
    nav:true,
    nav:false,
    dots:false,
    responsive:{
        991:{
            items:3
        }
    }
})
$('.work-nav .next').click(function(e) {
    e.preventDefault();
    owl.trigger('next.owl.carousel');
})
$('.work-nav .prev').click(function(e) {
    e.preventDefault();
    owl.trigger('prev.owl.carousel');
})

  $(window).scroll(function(){
    var sticky = $('header');
    var margin = $('.start');
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


  const o = 8;
  $(".button-more").attr("data-id", 13);
  $('.project__item.image').each(function(index){
    if (index >= 14) {
      $(this).css("display", "none");
    }

  })
  $(".button-more").click(function(event){
    event.preventDefault();
    const l = $('.project__item.image').length;

    let data =   $(".button-more").attr("data-id");
    $('.project__item.image').each(function(index){
      if (index <= parseInt(data)+o) {
        $(this).css("display", "flex");
        $(".button-more").attr("data-id", parseInt(data)+o);
      }
    })
  })
  setTimeout(function(){
      $("#preloader").css("opacity", "0").css("z-index","-1");
      $("body").css("overflow", "scroll");
  }, 2000)


});
