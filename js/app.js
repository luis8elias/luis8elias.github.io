



document.addEventListener("DOMContentLoaded", function(_) {

    /* declaramos funcion que sirve para extraer el valor que nos interesa */
    const extractValue = function(str){
        str = str.trim();
        let startIndex = str.indexOf(':') + 1;
        let endIndex = str.indexOf(';');
        str = str.substring(startIndex, endIndex);
        return str;
    }


    /* declaramos una funcion que sirve para aplicar el estilo,
    como es una sola linea la convertimos en funcion de flecha */
    const applyStyle = (element, property, value) =>  element.style[property] = value;
    




    //obtenemos todos los botones por nombre
    let triggers = document.getElementsByName('trigger');


    //iteramos los botones y lo ponemos a escuchar un click
    triggers.forEach( trigger => trigger.addEventListener('click', function(){

    
        //obtenemos el id del text area de donde sacaremos el valor
        const text_area_id = this.getAttribute('text_area_id');

        //obtenemos el id del elemento al que le aplicaremos el estilo
        const element_id = this.getAttribute('element_id');

        //guardamos el valor del text area
        const fullStr = document.getElementById(text_area_id).value;
    

        //guardamos el elemento al que le aplicaremos el estilo
        const element = document.getElementById(element_id);

        //obtenemos la propiedad css que aplicaremos
        const property = this.getAttribute('property');

        //extaremos el valor a aplicar
        const value = extractValue(fullStr);

    //le pasamos los datos a la funcion que aplica los estilos 
        applyStyle(element,property,value);

        
    }));



   



});


