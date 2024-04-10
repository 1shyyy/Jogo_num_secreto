let listaDeNumeros = [];
let numLimite = 10;
let numeroSecreto = gerarNumero();
console.log(numeroSecreto);
let tentativas = 0;
mensagensIniciais();

function verificarChute(){
    tentativas++;
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){

        exibirTexto('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}!`;
        
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
        }else{
            exibirTexto('p', 'O número secreto é maior');
        }
        limparCampo();
    }
}

function exibirTexto (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagensIniciais(){
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p','Escolha um número');
}

function gerarNumero(){
    let numeroEscolhido = parseInt (Math.random() * numLimite + 1);
    let quantidadeLista = listaDeNumeros.length;

    if(quantidadeLista == numLimite){
        listaDeNumeros = [];
    }

    if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumero();
    }else{
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 0;
    mensagensIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
}

