//NULL
//estrapola as linguagem
let valor; //não inicializada
console.log(valor); //undefined -> nao atribuiu nada para a variavel. ela nunca foi inicializada.

valor = null; //ausencia de valor
console.log(valor);

//UNDEFINED
const a = { name: "Teste" } //undefined -> aponta para um lugar na memoria = endereço
const b = a; //undefined -> aponta pra um lugar na memoria = endereço
b.name = 'Opa' //"Opa"
    //Neste caso houve uma atribuição por referencia
    //endereço de b será o mesmo endereço de a
let c = 3;
let d = c; //houve cópia por valor
d++;
console.log(d) //4
console.log(c) //3


const produto = {}
console.log(produto.preco); //undefined. nao está definido o preço do produto.
produto.preco = 3.50
console.log(produto);

produto.preco = null //sem preço