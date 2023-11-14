const formulario = document.querySelector('.formulario');

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')

// Guardar los datos del formulario
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

// evento input
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Leer texto de los inputs
function leerTexto(e) {

    datos[e.target.id] = e.target.value;
    console.log(datos);
}

// Evento submit
formulario.addEventListener('submit', validarFormulario);



function validarFormulario(e) {

    e.preventDefault();

    const { nombre, email, mensaje } = datos;


    // Validar formulario
    if (Object.values(datos).includes('')) {
        imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

}

function imprimirAlerta(mensaje, tipo) {
    // crear div
    const divMensae = document.createElement('div');
    divMensae.classList.add('alerta');



    divMensae.textContent = mensaje;

    // insertar en el DOM
    formulario.appendChild(divMensae);

    // Quitar el alert despues de 3 segundos
    setTimeout(() => {
        divMensae.remove();
    }, 3000);




}



