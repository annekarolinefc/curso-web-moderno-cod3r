// IÇAR -> efeito quando se tem um hoisting

console.log("a = ", a); //undefined
var a = 2;
console.log("a = ", a);

//por baixo dos panos a linguagem fez
//var a;
//console.log("a = ", a);
//a = 2;
//console.log("a = ", a);


//UTILIZANDO LET da erro.
console.log("b = ", b)
let b = 2;
console.log("b = ", b)