$(function(){
    $('h1').hide(); //esconder
    $('h2').hide(5000);
    $('ul').text(); //capturae texto 
    
    $('[acao-clique]').click(function(){
        $('span').addClass('destaque');
        $('span').css("background-color", "blue");
        //let itens = $('ul').text();//capturando texto e armazenando na variável
        //$('#conteudo').text(itens); //transferindo valor
        
    })//atributo
});