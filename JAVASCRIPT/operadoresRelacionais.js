console.log('01)', '1' == 1) //compara igualdade = TRUE
console.log('02)', '1' === 1) //compara igualdade e tipo = FALSE
console.log('03)', '3' != 3) //FALSE
console.log('04)', '3' !== 3) //TRUE

console.log('05)', 3 < 2) //FALSE
console.log('06)', 3 > 2) //TRUE
console.log('07)', 3 <= 2) //FALSE
console.log('08)', 3 >= 2) //TRUE

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) //FALSE
console.log('10)', d1 == d2) //FALSE
console.log('11)', d1.getTime() === d2.getTime()) //TRUE

console.log('12)', undefined == null) //TRUE
console.log('13)', undefined === null) //FALSE