const botaoPlayPlause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const audioAvancar = document.getElementById('proximo');
const audioVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('caitulo');



const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPlause.classList.remove('bi-play-circle-fill');
    botaoPlayPlause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPlause.classList.add('bi-play-circle-fill');
    botaoPlayPlause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar(){
    if( taTocando === 0 ) {
        tocarFaixa();
        taTocando =1;

    } else{
        pausarFaixa();
        taTocando =0;
    }

}
function proximaFaixa(){
    if(capituloAtual === numeroCapitulos ){
        capituloAtual = 1
    }else {
    capituloAtual = capituloAtual + 1

}

audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
tocarFaixa();
taTocando = 1;
trocarNomeFaixa();

}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capitulo " + capituloAtual;
}

function voltarFaixa(){
    if(capituloAtual === 1 ){
        capituloAtual = numeroCapitulos
    }else {
    capituloAtual = capituloAtual - 1
}

audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
tocarFaixa();
taTocando = 1;
trocarNomeFaixa();

}

botaoPlayPlause.addEventListener('click',tocarOuPausar)
audioAvancar.addEventListener('click',proximaFaixa)
audioVoltar.addEventListener('click',voltarFaixa)

 