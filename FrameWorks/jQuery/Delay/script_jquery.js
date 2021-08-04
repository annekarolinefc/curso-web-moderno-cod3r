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
        $('p').fadeOut(3000) //FAZ DESAPARECER
            //$('p').delay(3000); //PAUSA
        $('p').fadeIn(5000); //REAPARECER
    });
})