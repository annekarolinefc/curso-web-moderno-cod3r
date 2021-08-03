//Armazenando uma função em uma variavel
const imprimirSoma = function(a, b) {
        console.log(a + b)
    } //função anonima - mesmo que function imprimirSoma(a, b){}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
        return a + b;
    } //FUNCAO ARROW

console.log(soma(2, 3))

//Retorno implícito
const subtracao = (a, b) => a - b;
// constante + nomeDaFuncao = parametros => retorno
console.log(subtracao(2, 3))