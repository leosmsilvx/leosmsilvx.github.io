//Call on start
mostrarTextos();
let noViewTxt = true;


//"Typing" text
const cursorInputB = document.getElementsByClassName("input-cursor-b");
const cursorInputS = document.getElementsByClassName("input-cursor-s");
const cursorInputSW = document.getElementsByClassName("input-cursor-sw");

async function escreverTexto(sentence, spanId, spanCursor) {
    const letras = sentence.split("");
    let i = 0;
    for (const element of spanCursor) {
        element.style.display = 'inline-block';
    }
    while(i < letras.length) {
      await esperarTempo(100);
      $(spanId).append(letras[i]);      
      i++
    }
    for (const element of spanCursor) {
        element.style.display = 'none';
    }
    return false;
}
   
function esperarTempo(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function mostrarTextos(){
    await esperarTempo(1);
    await escreverTexto("Leonardo Silva", "#myName", cursorInputB);
    await esperarTempo(200);
    escreverTexto("Dev Jr.", "#devJr", cursorInputS);
}

function mediasAnimation(){
    document.getElementById("animationRedes").style.animation="slide 2s ease-out both";
}

//Call animation just when is in user view
window.addEventListener('scroll', async function() {
    var textScl = document.querySelector('#sclmedia');
    var positionTextScl = textScl.getBoundingClientRect();
    
    if((positionTextScl.top >= 0 && positionTextScl.bottom <= window.innerHeight) && noViewTxt == true) {
        noViewTxt = false;
        escreverTexto("Minhas redes sociais e meios de contato:", "#sclMediaText", cursorInputSW);
        mediasAnimation();
    }
});

