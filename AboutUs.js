window.onload = function ()
{
    
window.addEventListener('scroll', () => {

    var navmenu = document.getElementById('navmenu');
    var initialHeight = 15; // Replace with the initial height of your navmenu

    var newHeight = initialHeight - (window.scrollY / 30);
    

    console.log(window.scrollY);
    
    if (window.scrollY > 10 && window.scrollY < 260) {
        navmenu.style.height = newHeight + 'vh';
    }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active1');
    });
}
