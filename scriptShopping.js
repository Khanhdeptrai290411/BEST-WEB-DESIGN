let isMenuClicked = true;

    $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});



  $('.menu-btn1').click(function(e) {
    $('.menu-btn1').not(this).find('.submenu').hide();
      $(this).find('.submenu').toggle();
  });



$('.submenu-btn').click(function(e) {
    e.stopPropagation(); // Ngăn chặn lan truyền sự kiện click đến các phần tử cha
    $(this).find('.sub-submenu').toggle();
});

$(document).click(function() {
    $('.sub-submenu').hide(); // Ẩn tất cả các sub-submenu khi nhấp vào bất kỳ nơi nào trên trang
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


// let countDate = new Date('september 2, 2023 00:00:00').getTime();

// function countDown(){

//     let now = new Date().getTime();

//     gap = countDate - now;

//     let second = 1000;
//     let minute = second * 60;
//     let hour = minute * 60;
//     let day = hour * 24;

//     let d = Math.floor(gap / (day));
//     let h = Math.floor((gap % (day)) / (hour));
//     let m = Math.floor((gap % (hour)) / (minute));
//     let s = Math.floor((gap % (minute)) / (second));

//     document.getElementById('day').innerText = d;
//     document.getElementById('hour').innerText = h;
//     document.getElementById('minute').innerText = m;
//     document.getElementById('second').innerText = s;

// }

setInterval(function(){
    countDown();
},1000)




    
$('.menu-animal').click(function () {
    $('.menu-animal2').toggleClass("hidden");
    $('.menu-animal i').toggleClass("active");
    $('.cart-container').toggleClass('active');
    isMenuClicked = !isMenuClicked;
  });
  
  $('.menu-animal2').click(function () {
    $('.menu-animal').toggleClass("hidden");
    $('.menu-animal2 i').toggleClass("active");
    $('.cart-container2').toggleClass('active');
    isMenuClicked = !isMenuClicked;
  });
  $('.SC').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
  $(window).scroll(function(){


    
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }

    if(isMenuClicked==true){
    if(this.scrollY > 500){
        $('.menu-animal').addClass("show");
    }else{
        $('.menu-animal').removeClass("show");
    }
}

if(isMenuClicked==true){
    if(this.scrollY > 500){
        $('.menu-animal2').addClass("show");
    }else{
        $('.menu-animal2').removeClass("show");
    }
}
});