
 
let eleccion_color;
let contenedor = document.getElementById('contenedor');

document.addEventListener('keydown', (event) => {
    

    if(event.key === 'a') {
        eleccion_color = 'red';
        alert(`Elegiste el color ${eleccion_color}, pinta tus cuadrados`);
    }else if (event.key === 's' ) {
        eleccion_color = 'green';
        alert(`Elegiste el color ${eleccion_color}, pinta tus cuadrados`);
    }else if (event.key === 'd' ) {
        eleccion_color = 'aqua';
        alert(`Elegiste el color ${eleccion_color}, pinta tus cuadrados`);
    }else {
        alert("Error, no hay color seleccionado")
    }

  });

contenedor.addEventListener('click', e => {
    if (e.target !== e.currentTarget) {
            e.target.style.backgroundColor = eleccion_color;
        }
});

