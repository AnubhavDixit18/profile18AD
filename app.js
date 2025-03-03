const ham = document.querySelector('.header .nav-bar .nav-list .ham');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const mobile_menu2 = document.querySelector('.header .nav-bar li .ham');
const header = document.querySelector('.header.container');
const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    mobile_menu2.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 200) {
        header.style.backgroundColor = "gray";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

menu_items.forEach((item) => {
    item.addEventListener('click', () => {
        ham.classList.remove('active');
        mobile_menu.classList.remove('active');
        mobile_menu2.classList.remove('active');
    });
});



  
  

