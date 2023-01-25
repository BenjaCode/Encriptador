// ----Variables----
const mensaje = document.querySelector('#tAMensaje');
const btnEncriptar = document.querySelector('#btnEncriptar');
const btnDesencriptar = document.querySelector('#btnDesencriptar');
const imagenYTexto = document.querySelector('#imagenYTexto');
const resultadoYBtn = document.querySelector('#resultadoYBtn');
let tAResultado = document.querySelector('#tAResultado');

// ----Eventos click de los botones Mensaje----
btnEncriptar.addEventListener('click', () => {
    ocultarImagenYTexto();
    encriptarMensaje();
});

btnDesencriptar.addEventListener('click', () => {
    ocultarImagenYTexto();
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

// ----Funcion para encriptar el mensaje----
function encriptarMensaje() {
    let mensajeNormal = `${mensaje.value.toLowerCase()}`;

    // /letra/ ES para indicar la letra a remplazar
    // i = Tome en cuenta las letras mayusculas y minusculas
    // m = Tome en cuenta multiples lineas
    // g = Tome en cuenta todo el renglon o frase
    let mensajeEncriptado = mensajeNormal.replace(/e/img, `enter`);
    mensajeEncriptado = mensajeEncriptado.replace(/i/img, `imes`);
    mensajeEncriptado = mensajeEncriptado.replace(/a/img, `ai`);
    mensajeEncriptado = mensajeEncriptado.replace(/o/img, `ober`);
    mensajeEncriptado = mensajeEncriptado.replace(/u/img, `ufat`);
    
    tAResultado.value = `${mensajeEncriptado}`;
}