const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje") ;

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
      // Mostrar el botón "Copiar"
  const btnCopiar = document.querySelector(".copiar");
  btnCopiar.hidden = false; // O btnCopiar.style.display = "block";
  // Oculta el mensaje "Ningún mensaje fue encontrado"
  document.querySelector(".encontrado").hidden = true;
}

function encriptar(stringEncriptada){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
// console.table(matrizCodigo);  
stringEncriptada = stringEncriptada.toLowerCase()

  for(let i = 0; i< matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada
}
 //copiar al portapapeles
function btnCopiar(){
           
            navigator.clipboard.writeText(mensaje.value).then(()=> {
                alert("¡Texto copiado al portapapeles!");
            })
            .catch(err => {
                console.error("Error al copiar al portapapeles: ", err);
            });
}
// creamos la funcion de desencriptado

function btnDesencriptar(){
            const textoEncriptado = desencriptar(mensaje.value)
            mensaje.value = textoEncriptado 

}

  function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
  
    for(let i = 0; i< matrizCodigo.length; i++){
      if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada= stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
      }
    }
    return stringDesencriptada

}
