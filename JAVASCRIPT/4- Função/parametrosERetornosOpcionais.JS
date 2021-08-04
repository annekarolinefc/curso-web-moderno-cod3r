//PARAMETROS E RETORNOS SAO OPCIONAIS

function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(2, 2)) //Retorna 4
console.log(area(10, 10)) //Retorna String - UNDEFINED
console.log(area(2)) //passou 1 de 2 parametros NAN
console.log(area()) //passou nenhum parametro - NAN
console.log(area(1, 2, 3, 4)) //passou mais parametros - RETORNA 2