//Exercícios Entrada Processamento Saida JS

/*

    1 - Elaborar um programa que leia o valor de um jantar. 
    Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago

    Ex:
        Valor do Jantar: R$ 80.00
        Taxa do Garçom: R$ 8.00
        Total a pagar: R$ 88.00

*/
var valorJantar = Number(prompt("valor do jantar: "));
var taxaGarcon = valorJantar / 10; * 0.1;
var valorTotal = valorJantar + taxaGarcon;

console.log (`Valor do Jantar R$: ${valorJantar.toFixed(2)}`);
console.log(`taxa do garcom R$: ${taxaGarcon.toFixed(2)}`);
console.log(`valor total R$: ${valorTotal.toFixed(2)}`);
/*

    2 - Elaborar um programa que leia a duração de uma viagem em dias e horas.
    Calcule e informe a duraão total da viagem em número de horas.


    Ex:
        Nº Dias: 2
        Nº Horas: 5
        Total de Horas: 53

*/

var numDias = Number(prompt("numero de dias");
var numHoras = Number (prompt("numero de horas");
var horasTotais = (numDias*24) + numDias

console.log(`numero de dias: ${numdias}`);
console.log(`numero de hpras: ${numHoras}`);
console.log(`total de horas: ${horasTotais}`);


/*
    3 - Elaborar um programa que leia um número.
    Calcule e informe os seus vizinhos, ou seja, o número anterior e o número posterior  

    Exemplo:
        Número: 15
        Vizinhos: 14 e 16

*/
var numero = Number(prompt("digite um numero"));
var numeroAnterior = numeroInicial -1;
var numeroPosterior = numeroInicial +1;
alert ("seus vizinhos sao" "+(numeroAnterior) + (numeroPosterior)");


/*
    4 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la.
    Calcule e informe o valor a ser pago por cliente.

    Exemplo:
        Valor da conta: R$ 90.00
        Número de clientes: 3
        Valor por cliente: 30.00
*/
var valorConta = Number(prompt("valor da pizza: ")); 
var numeroClientes = Number (prompt("numero de clienets a pagar:"));
alert ("valor por cliente: "valorConta/numeroClientes);   

/*
    5 - Elaborar um programa para uma loja, o qual leia o preço de um prouto e informe as opções de pagamento.
    Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

    Exemplo:
        Preço: R$ 60.00
        À vista: R$ 54.00
        Ou 3x de R$: 20.00
*/
var precoProduto = Number(prompt("informe o valor do produto: "));
var AVista = precoProduto*0.9;
var parcelado = precoProduto/3;
alert("preco à vista: "+(precoAVista));
alert('preco em 3x: "(precoParcelado'));
   
/*
    6 - Elaborar um programa que leia 3 notas de um aluno em uma determinada disciplina.
    Calcule e informe a média das notas.

    Exemplo:
        1ª Nota: 7.5
        2ª Nota: 8.0
        3ª Nota: 6.4
        Média: 7.3
*/

var nota1 = Number(prompt("informa a primeira nota do aluno"));
var nota2 = Number(prompt(" ib=nforme a segunda nota do aluno"));
var nota3 = Number(prompt ("informe a terceira nota do aluno"));
alert("A media do aluno foi de: " +(nota1 + nota2 + nota3/3))
