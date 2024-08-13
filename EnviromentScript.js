gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );

  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 3,
      delay: 0.5,
    }
  );

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

$(document).ready(function() {
  $('.menu-btn1').click(function(e) {
    $('.menu-btn1').not(this).find('.submenu').hide();
      $(this).find('.submenu').toggle();
  });
});

$(document).ready(function() {
$('.submenu-btn').click(function(e) {
    e.stopPropagation(); // Ngăn chặn lan truyền sự kiện click đến các phần tử cha
    $(this).find('.sub-submenu').toggle();
});

$(document).click(function() {
    $('.sub-submenu').hide(); // Ẩn tất cả các sub-submenu khi nhấp vào bất kỳ nơi nào trên trang
});
});