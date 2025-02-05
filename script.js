// Função para calcular o Lote Econômico (EOQ)
function calcularEOQ() {
    const demanda = parseFloat(document.getElementById("demanda").value);
    const custoPedido = parseFloat(document.getElementById("custoPedido").value);
    const custoManutencao = parseFloat(document.getElementById("custoManutencao").value);

    if (isNaN(demanda) || isNaN(custoPedido) || isNaN(custoManutencao)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const eoq = Math.sqrt((2 * demanda * custoPedido) / custoManutencao);
    document.getElementById("resultadoEOQ").innerText = `O Lote Econômico de Compra (EOQ) é: ${eoq.toFixed(2)}`;
}

// Função para calcular o Estoque de Segurança (SS)
function calcularEstoqueSeguranca() {
    const desvioPadrao = parseFloat(document.getElementById("desvioPadrao").value);
    const tempoLead = parseFloat(document.getElementById("tempoLead").value);
    const zScore = parseFloat(document.getElementById("zScore").value);

    if (isNaN(desvioPadrao) || isNaN(tempoLead) || isNaN(zScore)) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const estoqueSeguranca = zScore * desvioPadrao * Math.sqrt(tempoLead);
    document.getElementById("resultadoSS").innerText = `O Estoque de Segurança é: ${estoqueSeguranca.toFixed(2)}`;
}
