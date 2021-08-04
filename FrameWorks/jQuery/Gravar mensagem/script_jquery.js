//EFEITO FADE
// Esconde a div de uma maneira bem suave
$(function() {
    $('#azul').click(function() {
        $('p').css("background-color", "blue")
        $('p').fadeOut() //FAZ DESAPARECER
            //$('p').hide() -> faz esconder de uma vez
        $('p').delay(3000); //PAUSA
        $('p').fadeIn(); //REAPARECER
    });

    $('#vermelho').click(function() {
        $('p').css("color", "red")
        $('#mensagem').text("Cor alterada com sucesso")
        $('#mensagem').css("color", "red")
        $('#mensagem').css("border", "1px solid red")
        $('#mensagem').delay(3000);
        $('#mensagem').fadeOut("fast")


    });


})