//EFEITO FADE
// Esconde a div de uma maneira bem suave
$(function() {
    $('#azul').click(function() {
        $('p').css("background-color", "blue")
        $('p').fadeOut() //FAZ DESAPARECER
            //$('p').hide() -> faz esconder de uma vez
        $('p').delay(3000); //PAUSA
        $('p').fadeIn('slow'); //REAPARECER
    });

    $('#vermelho').click(function() {
        $('p').css("color", "red")
        $('p').fadeOut('slow') //FAZ DESAPARECER
        $('p').delay(3000); //PAUSA
        $('p').fadeIn('slow'); //REAPARECER
    });
})