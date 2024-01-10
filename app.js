var listaNumerosSorteados =[]
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1


//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Descubra o Numero";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "escolha um numero de 1 a 10";

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}
exibirTextonaTela("h1","Descubra o numero");
exibirTextonaTela("p", "escolha um numero de 1 a 10");

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto){
        exibirTextonaTela("h1","acertou!");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;    
        exibirTextonaTela("p", mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute>numeroSecreto) {
            exibirTextonaTela("p", "o numero é menor do que o chute");
        } else{
            exibirTextonaTela("p","o numero é maior que o chute");
        }
        tentativas++;
        limparCampo();
    }
    console.log(chute==numeroSecreto);
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let elementosLista = listaNumerosSorteados.lenght;

    if(elementosLista == numeroLimite){
    listaNumerosSorteados =[];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector("input")
    chute.value=""
}
//Código omitido

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
}
function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}


