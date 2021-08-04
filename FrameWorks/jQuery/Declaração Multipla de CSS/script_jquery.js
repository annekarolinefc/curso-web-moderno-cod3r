//EFEITO FADE
// Esconde a div de uma maneira bem suave
$(function() {
    $('#azul').click(function() {
        $('p').css("background-color", "blue")
            .fadeOut() //FAZ DESAPARECER
            //$('p').hide() -> faz esconder de uma vez
            .delay(3000) //PAUSA
            .fadeIn(); //REAPARECER
    });

    $('#vermelho').click(function() {
        $('p').css("color", "red")
        $('#mensagem').text("Cor alterada com sucesso")
            .css({ color: 'red', border: "1px solid red", backgroundColor: "#F08080" })
            .delay(3000)
            .fadeOut("fast")
    });


})