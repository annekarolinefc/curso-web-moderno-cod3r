//São listas

//Exemplo de Array de strings
const listaDeCompras = ["arroz", "batata", "maça", "pera"]
console.log("IMPRESSÃO MANUAL")
console.log(listaDeCompras[0])
console.log(listaDeCompras[1])
console.log(listaDeCompras[2])
console.log(listaDeCompras[3])

console.log("UTILIZANDO FOR")
for (var i = 0; i < listaDeCompras.length; i++) {
    console.log(`Indice: ${i} e Conteúdo: ${listaDeCompras[i]}`)
}

var indice = 0;
console.log("UTILIZANDO WHILE")
while (indice < listaDeCompras.length) {
    console.log(`Indice: ${indice} e Conteúdo: ${listaDeCompras[indice]}`)
    indice++
}