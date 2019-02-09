$(function() {
	// nisescroll
	$('body').niceScroll();
  $('.home_b').click(function() {
      $('html , body').animate({
        scrollTop: $('.my_name').offset().top
      }, 1000);
    });
    // for about scroll down
    $('.about_b').click(function() {
    	$('html , body').animate({
    		scrollTop: $('.about').offset().top
    	}, 1000);
    });
    // for certificat scroll down
    $('.certificate_b').click(function() {
    	$('html , body').animate({
    		scrollTop: $('.certificat').offset().top
    	}, 1000);
    });
    // for work scroll down
    $('.work_b').click(function() {
      $('html , body').animate({
        scrollTop: $('.my_work').offset().top
      }, 1000);
    });
    // foe contact scroll down
    $('.contact_b').click(function() {
      $('html , body').animate({
        scrollTop: $('.contact').offset().top
      }, 1000);
    });

});
$(window).scroll(function() {
  if($(document).scrollTop() > 665){
    console.log($(document).scrollTop());
    $('.navbar').css({
      backgroundColor: "black",
      paddingBottom: "2px"
    });
  }
  else{
    $('.navbar').css("backgroundColor" , "initial");
  }
});