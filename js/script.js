const cursorInputB = document.getElementsByClassName("input-cursor-b");
const cursorInputS = document.getElementsByClassName("input-cursor-s");
async function escreverTexto(sentence, spanId, spanCursor) {
    const letras = sentence.split("");
    let i = 0;
    while(i < letras.length) {
      await esperarTempo(100);
      $(spanId).append(letras[i]);      
      i++
    }
    return false;
}
   
function esperarTempo(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function mostrarTextos(){
    await esperarTempo(1);
    for (const element of cursorInputS) {
        element.style.display = 'none';
    }
    await escreverTexto("Leonardo Silva", "#myName");
    for (const element of cursorInputB) {
        element.style.display = 'none';
    }
    for (const element of cursorInputS) {
        element.style.display = 'inline-block';
    }
    await esperarTempo(200);
    escreverTexto("Dev Jr.", "#devJr");
}

mostrarTextos();