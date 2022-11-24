$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0 && $(window).scrollTop() < 730) {
      $(".bg-light").slideUp();
      $(".bg-light").removeClass("black");
    } else {
      $(".bg-light").slideDown();
      $(".bg-light").addClass("black");
    }
    if ($(window).scrollTop() == 0) {
      $(".bg-light").removeClass("black");
    }
  });
  $(".five > .container .row > div > div").hover(
    function () {
      $(this).find("span").addClass("wow animate__animated animate__hinge");
    },
    function () {
      $(this).find("span").removeClass("wow animate__animated animate__hinge");
    }
  );
});
