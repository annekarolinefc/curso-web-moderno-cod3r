//
(function calculator(a, b, operator) {
    return eval(`${a} ${operator} ${b}`);
})(50, 2, "/")

const soma = function(x, y) {
    return x + y
}
const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)

imprimirResultado(3, 4, function(x, y) { return x - y })