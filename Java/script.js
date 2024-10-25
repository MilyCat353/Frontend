function calcularMedia(){
    let nota1 = parseFloat(document.getElementByld("nota1").value);
    let nota2 = parseFloat(document.getElementByld("nota2").value);
    let nota3 = parseFloat(document.getElementByld("nota3").value);
let media = (nota1 + nota2 + nota3) / 3;
alert('A média das notas é: ${media.toFixed(2)}');


}