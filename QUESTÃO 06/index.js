let number = 102
   let quant = 4
   switch (number) {
       case 100:
           let cQuente=quant*1.70
           document.write("<br>O preço do seu pedido é: " + cQuente + " R$")
           break;
       case 101:
           let bSimples=quant*2.30
           document.write(" <br>O preço do seu pedido é: " + bSimples + " R$")
           break;
       case 102:
           let bComOvo=quant*2.60
           document.write("<br>O preço do seu pedido é: " + bComOvo + " R$")
           break;
       case 103:
           let hamb=quant*2.40
           document.write("<br>O preço do seu pedido é: " + hamb + " R$")
           break;
       case 104:
           let cheeseb=quant*2.50
           document.write("<br>O preço do seu pedido é: " + cheeseb + " R$")
           break;
       case 105:
           let refri=quant*1.00
           document.write("<br><br>O preço do seu pedido é: " + refri + " R$")
           break;
   }