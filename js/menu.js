

 document.addEventListener("DOMContentLoaded", function(_) {


    //funcion que abre el menu
    const openMenu = function(){

        document.getElementById('aside').classList.add('opened');
        document.getElementById('menuButton').classList.add('hidden');
        document.getElementById('menuButtonClose').classList.remove('hidden');

    }

    //funcion que cierra el menu
    const closeMenu = function(){

        document.getElementById('aside').classList.remove('opened');
        document.getElementById('menuButtonClose').classList.add('hidden');
        document.getElementById('menuButton').classList.remove('hidden');

    }


    //al icono de menu lo ponesmos a escuchar el click para luego pasarle la funcion que abre el menu
    document.getElementById('menuButton').addEventListener('click' , openMenu);
    //al icono de cerrar lo ponesmos a escuchar el click para luego pasarle la funcion que cierra el menu
    document.getElementById('menuButtonClose').addEventListener('click' , closeMenu);

    //obtenemos todos los enlaces del menu por nombre
    let menuItems = document.getElementsByName('menu-item');

    //iteramos los enlaces y los ponemos a escuchar un click para cerrar el menu
    menuItems.forEach( menuItem => menuItem.addEventListener('click', closeMenu));






 });


