//OPERADOR DE DESESTRUTURAÇÃO

//NOVO RECURSO DO ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
//tire de dentro o objeto Pessoa o atributo nome e idade
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logadouro, numero, cep } } = pessoa;
console.log(logadouro, numero, cep)