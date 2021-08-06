//pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = "Pedro"
console.log(pessoa)

//pessoa <- 456 -> {...}
//pessoa = { nome: 'Anna' }
//GERA UM PROBLEMA
//SO ATRIBUI PARA CONSTANTE UMA VEZ

Object.freeze(pessoa) //congelar um pessoa
pessoa.nome = "Maria"
console.log(pessoa.nome)
    //IMPOSSIVEL EDITAR -  O OBJETO SE TORNOU CONSTANTE