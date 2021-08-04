//METODOS QUE PERMITEM INSERIR CONTEUDO DENTRO DE UM ELEMENTO EXISTENTE
//APPEND
//APPENDTO
//PREPEND
//PREPENDTO

/**APPEND E APPEND TO
 * Anexa um elemnto entro e no final do outro.
 * Ambos fazem a mesma função, mas em ordem inversa
 */

//INSERE O ELEMENTO "OLA MUNDO" NO ELEMENTO H1
$('h1').append("<p>111111</p>")
$("<p>222222</p>").appendTo("h1")

/**Você tabem pode utilizar elementos JS ao inves de passar strings HTML */
let elemento = document.createElement("p");
elemento.textContent = "Olá";

$("h1").append(elemento);
$("<p>222222</p>").appendTo(elemento);


/**PREPEND E PREPEND TO
 * faz o mesmo que o append, mas insere no começo
 *  */
$('h1').prepend("<p>111111</p>")
$("<p>222222</p>").prependTo("h1")

/**Você tabem pode utilizar elementos JS ao inves de passar strings HTML */
let elemento = document.createElement("p");
elemento.textContent = "Olá";

$("h1").prepend(elemento);
$("<p>222222</p>").prependTo(elemento);