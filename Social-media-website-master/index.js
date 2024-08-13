//sidebar
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
 
var notificationsVisible = false;
var themeVisible = false;

$('.menu-item').click(function() {
    changeActiveItem();
    $(this).addClass('active');

    if (this.id === 'notifications') {
        notificationsVisible = !notificationsVisible; // Toggle trạng thái
        $('.notifications-popup').toggle(notificationsVisible);
        $('#notifications .notification-count').toggle(notificationsVisible);
        $('.theme-popup').hide();
        themeVisible = false; // Ẩn popup theme
    } else if (this.id === 'theme') {
        themeVisible = !themeVisible; // Toggle trạng thái
        $('.theme-popup').toggle(themeVisible);
        $('.notifications-popup').hide();
        $('#notifications .notification-count').hide();
        notificationsVisible = false; // Ẩn popup notifications
    } else {
        $('.notifications-popup').hide();
        $('#notifications .notification-count').hide();
        $('.theme-popup').hide();
        notificationsVisible = false;
        themeVisible = false;
    }
});






const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

$(window).scroll(function(){
        
        
            
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});
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