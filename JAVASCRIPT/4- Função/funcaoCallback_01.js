const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir) //para cada elemento do array, será chamado a funcao imprimir