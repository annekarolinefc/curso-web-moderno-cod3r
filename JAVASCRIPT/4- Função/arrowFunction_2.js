let dobro = function(a) {
    return 2 * a
}

//função arrow é sempre anonima. Deve ser armazenada em uma variavel
dobro = (a) => {
    return 2 * a
}

//Resumindo a função
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => "Olá"
console.log(ola())