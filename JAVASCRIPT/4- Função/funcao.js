/*
Funções são blocos de construção fundamentais em JavaScript. 
Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la. */

//CRIANDO UMA FUNÇÃO
function calculator(a, b, operator) {
    return eval(`${a} ${operator} ${b}`);
    // return `${a} ${operator} ${b}` é somente uma string
}

//CHAMANDO UMA FUNÇAO
let result = calculator(2, 5, '*');
console.log(result);

let result1 = calculator(2, 2, '-');
console.log(result1);

let result2 = calculator(12, 3, '+');
console.log(result2);

//____________________________________________

let celular = function() {
    //atributo
    this.cor = "preto";
    //metodo
    this.ligar = function() {
        console.log("ligando...")
    }
}

let objeto = new celular();

console.log(objeto)
console.log(objeto.ligar())