/**
 * aumentoDeSalario.js
 * Aplica reajuste conforme faixas:
 * <= 1500: 4%
 * <= 3200: 3.2%
 * <= 5000: 2.5%
 * <= 7400: 1.4%
 * >  7400: 0.9%
 */

const salarios = [1200, 1500, 2000, 3200, 4800, 5000, 7400, 8000];

function percentualPorSalario(salario) {
    if (salario <= 1500) return 0.04;
    if (salario <= 3200) return 0.032;
    if (salario <= 5000) return 0.025;
    if (salario <= 7400) return 0.014;
    return 0.009;
}

function aplicarAumento(salariosArray) {
    return salariosArray.map(salario => {
        const perc = percentualPorSalario(salario);
        const aumento = +(salario * perc).toFixed(2);
        const novo = +(salario + aumento).toFixed(2);
        return { salario, percentual: perc, aumento, novo };
    });
}

function formatBRL(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Exemplo de uso
const resultados = aplicarAumento(salarios);
resultados.forEach(r =>
    console.log(
        `${formatBRL(r.salario)} -> ${Math.round(r.percentual * 1000) / 10}% : aumento ${formatBRL(r.aumento)} => ${formatBRL(r.novo)}`
    )
);

// Exportar para uso em outros módulos (opcional)
module.exports = { salarios, aplicarAumento, percentualPorSalario };