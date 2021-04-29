//querySelector
/**
 * retorna ya sea ninguno o hasta
 * un elemento con el mismo id que se escribe
 */
// const heading = document.querySelector('.header__texto h2');
// heading.textContent = 'Hola mundo'
// console.log(heading)
//querySelectorAll
/**
 * Retorna ya sea ninguno o hasta
 * todos los elementos con el mismo id que se escriba
 */
// const enlace = document.querySelectorAll('.navegacion a')
// console.log(enlace[1])//mostrara una lista de elementos para hacerder a uno en especifico se hace como un arreglo
// enlace[1].textContent = 'hola'
// enlace[1].classList.add('nueva-clase');//Añade nueva clase
// enlace[1].classList.remove('navegacion__enlace');//Remueve la clase
//getElemenById
/**
 * Esta era la forma de como se seleccionaban los elementos del HTML
 */
// const heading2 = document.getElementById('heading')
// console.log('heading2')

/**
 * Generar Codigo HTML (nuevo enlace)
 */
// const nuevoEnlace = document.createElement('A')//se recomiendo en mayusculas las etiquetas

// //Agregar el HREF
// nuevoEnlace.href = 'nuevo-enlace.html'
// //Agregar el TEXTO
// nuevoEnlace.textContent = 'Un nuevo Enlace'
// //Agregar la CLASE
// nuevoEnlace.classList.add('navegacion_enlace')
// //Agregar al DOCUMENTO
// const navegacion = document.querySelector('.navegacion')
// navegacion.appendChild(nuevoEnlace)

// console.log(nuevoEnlace)

/**
 * Eventos en Java
 * load: Espera a que se descargue todo el HTML,CSS y IMAGENES y espera que se cargue
 * DOMContentLoaded: Solo espera a que se descargue el HTML
 */
// console.log('1');

// window.addEventListener('load',function () {//load espera que el JS y los archivos que depende del HTML esten listos
//     console.log('2')
// })

// window.onload = function(){
//     console.log('3')
// }

// document.addEventListener('DOMContentLoaded',function(){
//     console.log(4)
// })

/**
 * Seleccionar elemento y asociarlo un evento
 */
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     console.log('enviando formulario')
// })
/**
 * Evento de Submit
 */
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    //Validar Formulario
    const {nombre,email,mensaje} = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        alertaM('Todos los campos son obligatorios', true)
        return;//Corta la ejecucion del codigo
    }else{
        alertaM('Mensaje fue enviado')
    }
});
/**
 * Funciones para mensajes
 */
function alertaM(mensaje,error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('enviado')
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
//mostrar mensaje Error
// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error')
//     formulario.appendChild(error)//agrega al HTML

//     //desaparecer despues de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }
// //mostrar mensaje enviado
// function mostrarEnviado(mensaje) {
//     const enviado = document.createElement('P');
//     enviado.textContent = mensaje;
//     enviado.classList.add('enviado')
//     formulario.appendChild(enviado)//agrega al HTML

//     //desaparecer despues de 5 segundos
//     setTimeout(() => {
//         enviado.remove();
//     }, 5000);
// }


/**
 * Eventos de los Input y Textarea
 */
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector ('#nombre')
const email = document.querySelector ('#email')
const mensaje = document.querySelector ('#mensaje')

// nombre.addEventListener('input', function (evento) {
//     console.log(evento.target.value)
// })
nombre.addEventListener('input', leer) 
email.addEventListener('input', leer) 
mensaje.addEventListener('input', leer)

function leer(evento) {
    // console.log(evento.target.value) //ver lo que escribe el usuario
    datos[evento.target.id] = evento.target.value;//agregar a datos
    // console.log(datos);
}