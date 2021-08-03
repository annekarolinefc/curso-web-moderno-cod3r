{
    {
        {
            { var sera = "Será???" }
        }
    }
}
console.log(sera); //var nao é visivel somente dentro do bloco;


function teste() {
    var local = 123
}
teste()
console.log(local); //Não é possivel acessar