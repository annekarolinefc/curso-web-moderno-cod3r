/**MÉTODO HTML()
 * Você pode usar o método HTML() sem passar qualquer valor para que ele retorn o html do elemnto
 */

//RETORNANDO O ELEMENTO
//seleciona o elemento + html()
$("div").html(); //retorna todo o conteudo dentro da vid


/**HTML(StringElemento)
 * Insere uma String dentro do Elemento. Esta String substituirá tudo que existia antes
 */
$("div").html("<p>NOVO PARAFRAFO</p>");

/**TEXT()
 * Obtem apenas o conteudo de texto dos elementos selecionados, ignorando o HTML
 */
$("div").text();

/**TEXT(valor)
 * Altera todo o valor dentro do elementos pela String informada.
 */
$("div").text("12345");