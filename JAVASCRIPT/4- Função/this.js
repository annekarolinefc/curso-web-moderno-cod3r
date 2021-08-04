//THIS PODE VARIAR
//Referenciar o objeto atual da execução

function f1() {
    console.log(this === window)
}

f1(); //true -undefined