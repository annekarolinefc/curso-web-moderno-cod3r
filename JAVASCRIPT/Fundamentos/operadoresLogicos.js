//OPERADOR E
// V E V -> V
// V E F -> F
// V E F -> F

//OPERADOR OU
// V OU V -> V
// V OU F -> V
// F OU F -> F

//OU EXCLUSIVO
// V XOR V -> F
// V XOR F -> V
// F XOR V -> V
// F XOR F -> F

//NEGACAO LOGICA
//!V - > F
//!F - > V

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;
    return {
        comprarSorvete,
        comprartv50,
        comprarTv32,
        manterSaudavel
    }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));