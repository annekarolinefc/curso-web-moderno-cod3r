//O OBJETO $()

//SELECIONANDO PELA TAG
let cabecalhos = $("h1")
let paragrafos = $("p")

//SELECIONANDO PELA CLASSE
let itens = $(".itens")

//SELECIONANDO PELO ID
let porId = $("#campoX")

//OBJETNDO ELEMENTO HTML PELA POSIÇÃO
let primeiroParagrafo = paragrados.get(0);
let tambemPrimeiro = paragrafos[0];

//$().ready
//é um método que executa uma função quando o DOM está pronto/carregado
$(document).ready(function() {
    console.log("começando!");
});
//ou...
$().ready(function() {
    console.log("começando!");
});
//ou...
$(function() {
    console.log("começando!");
});


//$().ready!== window.onload