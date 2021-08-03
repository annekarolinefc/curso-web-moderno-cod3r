//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); //5
imprimirSoma(2); //NaN
imprimirSoma("Olá", " mundo!"); //Olá mundo!

//Função com retorno
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 3));
console.log(soma(2));