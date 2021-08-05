const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice +1}. ${nome}`)
}

/**FUNÇÃO CALLBACK
 * Passar uma função para outra função
 * quando determinado evento acontecer
 * essa função será disparada/passada/chamada de volta
 * pode ser chamada várias vezes ou uma vez só
 * 
 */
fabricantes.forEach(imprimir);
//para cada elemento do array, será chamado a funcao imprimir

fabricantes.forEach(function(fabricante) {
    console.log(fabricante);
})

//arrow function
fabricantes.forEach(fabricante => console.log(fabricante))