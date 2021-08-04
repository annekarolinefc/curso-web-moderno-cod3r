//$(seletor).ação();

//VERIFICAR SE O DOCUMENTO FOI CARREGADO
$(document).ready(function()
    /*Verifica se todo o documento foi carregado*/
    {
        $("button").click(function() {
            //Executa ação quando o button for clicado
            console.log("CLICOU"); //escreve no console
            $('h2').hide(); //H1 será escondida
            $('h1').css("color", "red");
            $('#resposta').css("color", "green");
        })
    })

/* OUTRA FORMA DE VERIFICAR SE O DOCUMETO FOI CARREGADO
$(function(){
    ...
})
conhecida como forma reduzida
*/