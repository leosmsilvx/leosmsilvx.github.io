//Vars
const cursorInputB = document.getElementsByClassName("input-cursor-b");
const cursorInputS = document.getElementsByClassName("input-cursor-s");
const cursorInputSW = document.getElementsByClassName("input-cursor-sw");
const cursorInputBR = document.getElementsByClassName("input-cursor-br");
const cursorInputSR = document.getElementsByClassName("input-cursor-sr");
let noViewTxt = true;

//Call on start
mostrarTextos();
mostrarOutrosTextos();

//"Typing" texts
async function escreverTexto(sentence, spanId, spanCursor, delay) {
    const letras = sentence.split("");
    let i = 0;
    for (const element of spanCursor) {
        element.style.display = 'inline-block';
    }
    while(i < letras.length) {
      await esperarTempo(delay);
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
    await escreverTexto("Leonardo Silva", "#myName", cursorInputB, 120);
    await esperarTempo(200);
    await escreverTexto("Dev Jr.", "#devJr", cursorInputS, 120);
    continueBlinking(cursorInputS);
}

async function mostrarOutrosTextos(){   
    await esperarTempo(1); 
    await escreverTexto("Alguns Repositórios em que trabalhei:", "#repositoriesTxt", cursorInputBR, 70);
    await escreverTexto("Todos os projetos são públicos e de uso educacional.", "#subtitleTxt", cursorInputSR, 40);
    continueBlinking(cursorInputSR);
}

function mediasAnimation(){
    document.getElementById("animationRight").style.animation="slideR 1.8s ease-out both";
    document.getElementById("animationLeft").style.animation="slideL 1.8s ease-out both";
}

function continueBlinking(spanCursor){
    for (const element of spanCursor) {
        element.style.display = 'inline-block';
    }
}

//Call animation just when is in user view
window.addEventListener('scroll', async function() {
    var textScl = document.querySelector('#sclmedia');
    var positionTextScl = textScl.getBoundingClientRect();
    
    if((positionTextScl.top >= 0 && positionTextScl.bottom <= window.innerHeight) && noViewTxt == true) {
        noViewTxt = false;
        escreverTexto("Minhas redes sociais e meios de contato:", "#sclMediaText", cursorInputSW, 70);
        mediasAnimation();
    }
});

