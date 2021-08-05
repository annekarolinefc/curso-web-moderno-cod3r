//EXEMPLO DE CALLBACK NO BROWSER
//f12 -> console -> inserir codigo
document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log("O evento ocorreu!")
}