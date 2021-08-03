console.log(typeof Object); //FUNÇÃO
console.log(typeof new Object); //OBJETO

const Cliente = function() {
    console.log(typeof Cliente);
    console.log(typeof new Cliente)
}

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto())