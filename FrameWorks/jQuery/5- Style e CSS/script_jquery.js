/**MANIPULAR CLASSES COM O JQUERY
 * -  $(elemento).addClass(classes) //Adiciona
 * -  $(elemento).removeClass(classes) //Remove
 * -  $(elemento).toggleClass(classes) //Inverte a Classe - INTERRUPTOR
 */

//APLICADO PARA STYLE
let cabecalhos = $("h1");
let paragrafos = $("p");
paragrafos.addClass("vermelho");
cabecalhos.removeClass("azul vermelho")
cabecalhos.toggleClass("verde sublinhar negrito")

/**CSS
 * Através do método css() é possível ler e editar atributos dos elementos HTML
 */

//INFORMAR COR, isto é, retorna o valor armazenado para aquela tag
$("div").css("background-color")
$("div").css(["background-color", "border", "width"])
    //ATRIBUIR COR
    //CSS(nomePropriedade, valor)
$("div").css("background-color", "red")
$("div").css("height", "200")