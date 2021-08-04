//ANTES DA ES2015
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1()) //3
console.log(soma1(3)) //5
console.log(soma1(1, 2, 3)) //6
console.log(soma1(0, 0, 0)) //3 - GERA UM BUG - deveria dar 0 


function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c //A MAIS SEGURA
    return a + b + c
}
console.log("Estrategia 2, 3 e 3 para gerar valor padrão")
console.log(soma2()) //3
console.log(soma2(3)) //5
console.log(soma2(1, 2, 3)) //6
console.log(soma2(0, 0, 0))

//DEPOIS DA ES2015 - FORMA MAIS ADEQUADA
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))