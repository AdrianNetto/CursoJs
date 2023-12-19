//Elementos
const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".igual");
const botaoPonto = document.querySelector(".ponto");
const botoesNumeros = document.querySelectorAll(".num");
const botoesOperadores = document.querySelectorAll(".operador");
const limparDisplay = document.querySelector("#clearDisplay");

//Variáveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

//funções
function atualizarDisplay() {
    display.value = operacaoAtual
}

function insereNumero(evento) {

    if(calculando) {
        operacaoAtual = evento.target.textContent;
        calculando = false;
    } else {
        operacaoAtual += evento.target.textContent;
    }

    atualizarDisplay()
}

function inserePonto() {
    if(operacaoAtual.indexOf(".") === -1) {
        operacaoAtual += ".";

        atualizarDisplay()
    }
}

function insereOperador(evento) {
    if(operacaoAtual != "") {
        if(!calculando) {
            if(operador != null) {
                calcula();
            }
            valorAnterior = operacaoAtual;
            operacaoAtual = "";
        }
        operador = evento.target.textContent;
    }
}

function calcula() {
    let resutado = null;
    const operandoAnterior = parseFloat(valorAnterior);
    const operandoAtual = parseFloat(operacaoAtual);

    switch(operador) {
        case "+":
            resutado = operandoAnterior + operandoAtual;
            break;
        case "-":
            resutado = operandoAnterior - operandoAtual;
            break;
        case "/":
            resutado = operandoAnterior / operandoAtual;
            break;
        case "x":
            resutado = operandoAnterior * operandoAtual;
            break;
    }

    operacaoAtual = String(resutado);
    valorAnterior = operacaoAtual;
    calculando = true;
    atualizarDisplay();
}

function displayClear() {
    operacaoAtual = "";
    operador = null;
    valorAnterior = "";
    calculando = false;
    atualizarDisplay();
}

//eventos
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
botaoPonto.addEventListener("click", inserePonto);
botoesOperadores.forEach((botao) => botao.addEventListener("click", insereOperador));
botaoIgual.addEventListener("click", calcula);
limparDisplay.addEventListener("click", displayClear)