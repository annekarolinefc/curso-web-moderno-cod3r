const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

delete produto.preco
console.log(produto)

delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Luiz',
        idade: 64,
        endereco: {
            logadouro: 'Rua ABC',
            numero: 123,
        },
    },
    condutores: [{
        nome: 'Luiz',
        idade: 54
    }, {
        nome: 'Anne',
        idade: 28
    }, ],
    calcularValorSeguro: function() {
        //...
    }
}

//
console.log(carro.proprietario.endereco.numero)
carro.proprietario.endereco.numero = 1000; //ACESSANDO
console.log(carro.proprietario.endereco.numero)
carro['proprietario']['endereco']['logadouro'] = 'Av Gigante' //ACESSANDO
console.log(carro['proprietario']['endereco']['logadouro'])

console.log(carro)

//DELETANDO
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)