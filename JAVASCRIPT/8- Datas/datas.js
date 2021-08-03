let now = Date.now(); //horário de agora em milisegundos.

console.log(`%c ${now}`, 'color:white; background-color: blue')

let time = new Date();
//OBTENDO O DIA
console.log(`%c ${time.getDate()}`, 'color:white; background-color: blue')

//OBTENDO O MÊS
console.log(`%c ${time.getMonth()}`, 'color:white; background-color: blue')
    //é um array

//OBTENDO O ANO
console.log(`%c ${time.getFullYear()}`, 'color:white; background-color: blue')

//OBTENDO A DATA EM PORTUGUES
console.log(`%c ${time.toLocaleString()}`, 'color:white; background-color: blue')