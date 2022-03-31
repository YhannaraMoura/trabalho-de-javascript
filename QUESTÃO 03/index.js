let empregado = [1, 2, 3, 4, 5]
let anoDeNascim = 1963;
let anoAtual = 2022;
let idade = anoAtual - anoDeNascim;
let tempDeTrabalho = idade - 35;

if (idade >= 60 && tempDeTrabalho >= 25) {
	document.write("Empregado: " + empregado[5] + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa à: " + tempDeTrabalho + "anos <br>Requerer aposentadoria")


} else if (idade >= 65 || tempDeTrabalho >= 30) {
	document.write("Empregado: " + empregado[5] + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa à: " + tempDeTrabalho + "anos <br>Requerer aposentadoria")
}

else {
	document.write("Empregado: " + empregado[5] + "<br>Idade:" + idade + " anos. <br> Ingressou na empresa à: " + tempDeTrabalho + "anos <br>Não requerer aposentadoria")
}