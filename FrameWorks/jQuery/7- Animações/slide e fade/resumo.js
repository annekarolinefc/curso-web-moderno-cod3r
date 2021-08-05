/**ANIMATE
 * 
 * O método animate() é utilizado para criar animaçoes customizadas.
 * 
 * Define a altura como sendo 100px
 * $('div').animate({height: "100px"})
 * 
 * muda a altura, comprimento e marge - leva dois segundos para fazer a transição
 * $('div').animate({height:"200px", width:"200px", margin:"10px"}, 2000) 
 * 
 * O primeiro parametro -> UNICO OBRIGATORIO
 * nele você precisa passar um objeto que as propriedades mudarão o CSS.
 * O segundo parametro -> é a DURAÇÃO da naimação
 * seguindo o padrão, esse tempo é definido em milissegundos.
 * 
 * 
 * 
 * O metodo ANIMATE() nao alterara cores se voce nao estiver utilizando o plugin adicional "jquery.color"
 * NADA ACONTECERÁ:
 * $("div").animate({
 * color: "red",
 * backgroundColor: "rgb(120,0, 50)",
 * borderColor: "rgba(50,50,150,05.)"
 * "})
 * 
 * Você pode alinhar diversos métodos para criar nimações mais complexas. Uma so iniciará após a anterior ter terminado.
 * $('div').animate({height: "100px"})
 * $('div').animate({height:"50px", width:"50px"}, 2000)
 * $('div').animate({height:"200px", width:"200px", margin:"10px"}, 2000)
 * 
 * 
 * */