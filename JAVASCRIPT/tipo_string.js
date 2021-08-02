const escola = "Cod3r";

console.log(escola.charAt(4)); //r
console.log(escola.charAt(5)); //retorna nada
console.log(escola.charCodeAt(3)); //51
console.log(escola.indexOf('3')); //3

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); //criar uma substring
console.log("Escola ".concat(escola.concat("!"))); //realizar concatenação
console.log(escola.replace(3, "e")); //trocar caracterer
console.log('Ana, Maria, Pedro'.split(','))