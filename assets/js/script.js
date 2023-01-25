// ----Variables----
const mensaje = document.querySelector('#tAMensaje');
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');
const imagenYTexto = document.querySelector('#imagenYTexto');
const resultadoYBtn = document.querySelector('#resultadoYBtn');

// ----Eventos click de los botones Mensaje----
btnEncriptar.addEventListener('click', () => {
    ocultarImagenYTexto();
});

btnDesencriptar.addEventListener('click', () => {
    
});

// ----Funcion para mostrar u ocultar los elementos del Resultado
function ocultarImagenYTexto() {
    if(imagenYTexto.classList.value != 'ocultarImagenYTexto'){
        imagenYTexto.classList.add('ocultarImagenYTexto');
        resultadoYBtn.classList.remove('ocultarImagenYTexto');
    }else{
        imagenYTexto.classList.remove('ocultarImagenYTexto');
        resultadoYBtn.classList.add('ocultarImagenYTexto');
    }
}