//UTILIZANDO O THIS

const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao); //Acessando o objeto
    }
}

pessoa.falar();

//APLICANDO BIND
const falar = pessoa.falar
falar();
//apresentou conflito entre paradigmas: funcional e OO
//não é possivel acessar - THIS

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();