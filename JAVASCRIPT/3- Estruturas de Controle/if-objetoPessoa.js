const pessoa = {
    nome: "Anne",
    idade: 28,
    endereco: {
        rua: "Henrique Gorceix",
        numero: 1670,
        complemento: "apart 502",
        bairro: "Monsenhor Messias",
        cidade: "Belo Horizonte",
        estado: "Minas Gerais",
        pais: "Brasil"
    },
    ehMaiorDeIdade: true,
    altura: 1.56

}

console.log(pessoa);

console.log(pessoa.altura);

if (pessoa.idade >= 18) {
    console.log("é maior de idade")
    pessoa.ehMaiorDeIdade = true
    console.log(`É maior de idade: ${pessoa.ehMaiorDeIdade}`)
} else {
    console.log("é menor de idade")
    pessoa.ehMaiorDeIdade = false
    console.log(`É maior de idade: ${pessoa.ehMaiorDeIdade}`)
}