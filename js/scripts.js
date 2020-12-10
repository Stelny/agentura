$(document).ready(function(){

  function getHeight () {

                         return document.body.scrollHeight;
  }
  $(".masonry-item img").mousemove(function(e){
    $(this).siblings(".box").css("display", "flex");
    $(".box").css('top',e.pageY+15);
    $(".box").css('left',e.pageX+15);
  });
  $(".masonry-item img").mouseleave(function(e){
    $(this).siblings(".box").css("display", "none");
    console.log("h");
  });
});
