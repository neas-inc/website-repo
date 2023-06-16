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


    const dropdown = document.querySelector('.dropdown-card');
    const dropbutton = document.querySelector('.Btn');
    const droptext = document.querySelector('.dropdown-text');
    dropbutton.addEventListener('click', function(){
        dropdown.classList.toggle('is-active');
        droptext.classList.toggle('is-active');
    });


    const dropdown1 = document.querySelector('.dropdown-card1');
    const dropbutton1 = document.querySelector('.Btn1');
    const droptext1 = document.querySelector('.dropdown-text1');
    dropbutton1.addEventListener('click', function(){
        dropdown1.classList.toggle('is-active');
        droptext1.classList.toggle('is-active');
    });

    const dropdown2 = document.querySelector('.dropdown-card2');
    const dropbutton2 = document.querySelector('.Btn2');
    const droptext2 = document.querySelector('.dropdown-text2');
    dropbutton2.addEventListener('click', function(){
        dropdown2.classList.toggle('is-active');
        droptext2.classList.toggle('is-active');
    });

}





