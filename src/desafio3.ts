let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal: number = 0;
atribuir();

function atribuir(): void {
    if (campoSaldo) {
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

function somarAoSaldo(soma: number) {
        saldoTotal += soma;
        atribuir();
}

function limparSaldo() {
    saldoTotal = 0;
    atribuir();
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
