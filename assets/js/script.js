// ----Variables----
let mensaje = document.querySelector('#tAMensaje');
let btnEncriptar = document.querySelector('#btnEncriptar');
let btnDesencriptar = document.querySelector('#btnDesencriptar');
let imagenYTexto = document.querySelector('#imagenYTexto');
let resultadoYBtn = document.querySelector('#resultadoYBtn');
let tAResultado = document.querySelector('#tAResultado');
let btnCopiar = document.querySelector('#btnCopiar');

// ----Eventos click de los botones Mensaje----
btnEncriptar.addEventListener('click', () => {
    ocultarImagenYTexto();
    encriptarMensaje();
});

btnDesencriptar.addEventListener('click', () => {
    ocultarImagenYTexto();
    desencriptarMensaje();
});

// ----Evento click del boton Resultado----
btnCopiar.addEventListener(`click`, () => {

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

// ----Funcion para desencriptar el mensaje----
function desencriptarMensaje() {
    let mensajeNormal = `${mensaje.value.toLowerCase()}`;

    let mensajeDesencriptado = mensajeNormal.replace(/enter/img, `e`);
    mensajeDesencriptado = mensajeDesencriptado.replace(/imes/img, `i`);
    mensajeDesencriptado = mensajeDesencriptado.replace(/ai/img, `a`);
    mensajeDesencriptado = mensajeDesencriptado.replace(/ober/img, `o`);
    mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/img, `u`);
    
    tAResultado.value = `${mensajeDesencriptado}`;
}