//Seleccionar el botón del menú
const menuBtn = document.querySelector('.js-menu-toggler');

//Seleccionar el menu mobile
const menuMobile = document.querySelector('.js-menu-mobile');

//Escuchamos el click en menuBtn
menuBtn.addEventListener('click', function() {
    //Agrego la clase open utilizando .classList
    menuMobile.classList.toggle('open');
});