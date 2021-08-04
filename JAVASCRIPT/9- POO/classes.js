class celular {
    constructor() {
        this.cor = "pret0"
    }

    ligar() {
        console.log("Ligando...")
        return "OK"
    }
}

let objeto = new celular();
console.log(objeto.ligar());