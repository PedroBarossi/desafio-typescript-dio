"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
atribuir();
function atribuir() {
    if (campoSaldo) {
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
function somarAoSaldo(soma) {
    saldoTotal += soma;
    atribuir();
}
function limparSaldo() {
    saldoTotal = 0;
    atribuir();
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
