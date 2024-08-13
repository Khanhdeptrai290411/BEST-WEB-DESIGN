
    // toggle menu/navbar script
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
$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
          
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }

             // scroll-up button show/hide script

             if(this.scrollY > 500){
              $('.menu-animal').addClass("show");
          }else{
              $('.menu-animal').removeClass("show");
          }

  });
});

$('.menu-animal').click(function () {
  $('.sidebar .menu ').addClass("active");
});
$('.close').click(function () {
  $('.sidebar .menu ').removeClass("active");

});
$('.filter-item').click(function () {
  $('.sidebar .menu ').removeClass("active");

});
$('.SC').click(function(){
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});
/* White box */
window.addEventListener('scroll', function() {

  var scrollPosition = window.scrollY;

    var otherBoxRight = document.querySelector('.other_box_right');
  var otherBoxRightPosition = otherBoxRight.getBoundingClientRect().top;

   var blackBoxLeft = document.querySelector('.black_box_left');
  var blackBoxLeftPosition = blackBoxLeft.getBoundingClientRect().top;

    var titleWhiteBox = document.querySelector('.title_white_box');
  var titleWhiteBoxPosition = titleWhiteBox.getBoundingClientRect().top;


  //khi cuộn tới white box thì đi lên 
  if (scrollPosition >= otherBoxRightPosition - window.innerHeight / 2) {
    otherBoxRight.classList.add('active');
    blackBoxLeft.classList.add('active');
    titleWhiteBox.classList.add('active');
  } else {
    otherBoxRight.classList.remove('active');
    blackBoxLeft.classList.remove('active');
    titleWhiteBox.classList.remove('active');
  }

  //khi cuộn xuống quá white box thì đi lên

  if (scrollPosition >= otherBoxRightPosition + window.innerHeight + 30) {
    otherBoxRight.classList.add('active_down');
    blackBoxLeft.classList.add('active_down');
    titleWhiteBox.classList.add('active_down');
  } else {
    otherBoxRight.classList.remove('active_down');
    blackBoxLeft.classList.remove('active_down');
    titleWhiteBox.classList.remove('active_down');
  }

/* blb */
  var scrollPosition = window.scrollY;
  
    var blackContent = document.querySelector('.blb-content');
    var blackContentPosition = blackContent.getBoundingClientRect().bottom;

  var titleBlackSect = document.querySelector('.title_black_sect');
  var titleBlackSectPosition = titleBlackSect.getBoundingClientRect().bottom;

  var blackBg = document.querySelector('.blb-bg');
  var blackBgPosition = blackBg.getBoundingClientRect().bottom;


  //khi cuộn tới black box thì đi lên
  if (scrollPosition >= blackContentPosition + window.innerHeight/8) {
    titleBlackSect.classList.add('active');
    blackContent.classList.add('active');
    blackBg.classList.add('active');
  } else {
    titleBlackSect.classList.remove('active');
    blackContent.classList.remove('active');
    blackBg.classList.remove('active');
  }

  //khi cuộn xuống quá black box thì đi lên

  if (scrollPosition >= blackContentPosition + window.innerHeight + 700) {
    titleBlackSect.classList.add('active_down');
    blackContent.classList.add('active_down');
    blackBg.classList.add('active_down');
  } else {
    titleBlackSect.classList.remove('active_down');XMLDocument
    blackContent.classList.remove('active_down');
    blackBg.classList.remove('active_down');
  }
/*  */
  if (scrollPosition >= blackContentPosition + window.innerHeight + 1300) {
    titleBlackSect.classList.add('active_down_plus');
    blackContent.classList.add('active_down_plus');
    blackBg.classList.add('active_down_plus');
  } else {
    titleBlackSect.classList.remove('active_down_plus');
    blackContent.classList.remove('active_down_plus');
    blackBg.classList.remove('active_down_plus');
    
  }

  
});

function redirectToVolunterr() {
  window.location.href = 'Social-media-website-master/SocialMedia.html#volunteer';
};
function redirectThaiLand1() {
  window.location.href = 'Social-media-website-master/SocialMedia.html#Thailand1';
};
function redirectThaiLand2() {
  window.location.href = 'Social-media-website-master/SocialMedia.html#Thailand2';
};
function redirectHarnas() {
  window.location.href = 'Social-media-website-master/SocialMedia.html#Harnas';
};
function redirectSouth() {
  window.location.href = 'Social-media-website-master/SocialMedia.html#South-Africa';
};
function redirectNhaTrang() {
  window.location.href = 'Social-media-website-master/SocialMedia.html#Nha-Trang';
};
function redirectMeKong() {
  window.location.href = 'Social-media-website-master/SocialMedia.html#MeKong';
};
