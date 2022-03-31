var quant = 6;
var preUnidade = 12;
var total = quant * preUnidade;
var desconto = 72 * 0.03;
var totalpag = total - desconto;

document.write("Produto: Fone de Ouvido<br>");
document.write("Quantidade Adquirida: " + preUnidade );
document.write("<br>Preço Unitário: " + preUnidade);
document.write("<br>Total: " + total);
document.write("<br>Total a pagar: " + totalpag);
document.write("<br>Desconto: " + desconto);

if (quant <=5) {
	document.write("<br>Seu desconto será de 2%")
}else if (quant >5 && quant <=10) {
	document.write("<br>Seu desconto será de 3%")
}else if (quant >10){
	document.write("<br>Seu desconto será de 5%")
}
