//TABUADA

let n = 7;
let i = 0;

for (i; i <= n; i++) {
    console.log(`${n} x ${i} = ${n*i}`) //template string
}

//utilizando WHILE
let contador = 1
console.log("UTILIZANDO WHILE")
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

//Transformando em laço FOR
console.log("UTILIZANDO FOR")
for (let cont = 1; cont <= 10; cont++) {
    console.log(`contador = ${cont}`)
}

//Utilizando for em um array
console.log("NOTAS")
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (cont = 0; cont < notas.length; cont++) {
    console.log(`nota = ${notas[cont]}`)
}