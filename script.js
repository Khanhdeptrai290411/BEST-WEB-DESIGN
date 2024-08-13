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
    });

    var typed = new Typed(".typing-2", {
      strings:["Tofus Team", "Developers", "Environmentalists", "Designers", "ONE"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });



  

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // To check the scroll position on page load
  reveal();




  
    // slide-up script
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

    $('.SC').click(function(){
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

  

 
  

    // typing text animation script
    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
   
  });
  const slides = document.querySelectorAll('.slider img');
  const sliderNav = document.querySelectorAll('.slider-nav a');
  const prevButton = document.querySelector('.arrow-prev');
  const nextButton = document.querySelector('.arrow-next');
  let slideIndex = 0;
  let isTransitioning = false;
  let autoSlideTimer;
  
  function showSlide(index) {
    if (isTransitioning) return;
  
    isTransitioning = true;
    slides.forEach((slide, i) => {
      slide.style.transition = 'transform 0.5s ease';
      slide.style.transform = `translateX(-${index * 100}%)`;
  
      slide.addEventListener('transitionend', function () {
        if (i === index) {
          slide.style.transition = '';
          isTransitioning = false;
        }
      });
    });
  
    sliderNav.forEach((nav) => {
      nav.classList.remove('active');
    });
  
    sliderNav[index].classList.add('active');
  }
  
  function autoSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }
  
  function startAutoSlide() {
    autoSlideTimer = setInterval(autoSlide, 15000);
  }
  
  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
  }
  
  function preloadImages() {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.src;
    });
  }
  
  window.addEventListener('load', function () {
    preloadImages();
    startAutoSlide();
  });

  prevButton.addEventListener('click', function () {
    if (isTransitioning) return;
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
    stopAutoSlide();
    setTimeout(startAutoSlide, 7000);
  });
  
  nextButton.addEventListener('click', function () {
    if (isTransitioning) return;
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
    stopAutoSlide();
    setTimeout(startAutoSlide, 7000);
  });



  