function atv_01_btn_01(){
    window.alert("Você pressionou o botão 1");
}

function atv_01_btn_02(){
    window.alert("Você pressionou o botão 2");
}

function atv_01_btn_03(){
    window.alert("Você pressionou o botão 3");
}

function atv_02(){
    var nome = window.prompt("Informe seu nome: ");
    var idade = window.prompt("Infrome sua idade: ");

    window.alert("Acabei de conhecer " + nome + ", que tem " + idade + " anos de idade.");
}

function atv_03(){
    var num = Number(window.prompt("Informe um número: "));

    var antecessor = (num - 1);
    var sucessor = (num + 1);

    window.alert("O número informado pelo usuário foi " + num + ". Antes do número " + num + ", temos o número " + antecessor + ". Após o número " + num + ", temos o número " + sucessor + ".");
}

function atv_04(){
    var produto = window.prompt("Informe o nome do produto: ");
    var preco = Number (window.prompt("Informe o preço do produto: "));
    var dinheiro = Number( window.prompt("Informe o valor em dinheiro entregue ao vendedor: "));

    var troco = dinheiro - preco;

    window.alert("Você comprou um produto (" + produto + ") por R$ " + preco + " e entregou ao vendedor R$ " + dinheiro + " em dinheiro. Você vai receber R$ " + troco + " de troco. Volte Sempre!");

}

function atv_05(){
    var celsius = Number(window.prompt("Informe uma temperatura em celsisus: "));

    var f = (celsius * 9/5) + 32;

    window.alert("Temperatura em Fahrenheit: " + f);
}

function atv_06(){
   var valor_reais = Number(window.prompt("Informe o valor em reais: "));
   var cotacao_dolar = Number(window.prompt("Informe a cotação do dolar: "));

   var valor_dolar = valor_reais/cotacao_dolar;

   document.getElementById("resultado").innerHTML = "Você tem R$ " + 
   valor_reais.toFixed(2) + ". A cotação do dolar é " + cotacao_dolar.toFixed(2) + ". Você tem US$ " +  valor_dolar.toFixed(2) + ".";
}

function atv_07(){
    var produto = window.prompt("Informe o nome do produto: ");
    var preco = Number( window.prompt("Informe o preço do produto: "));

    var desconto = preco - (preco * 10)/100;

    document.getElementById("resultado").innerHTML = "Você comprou um produto(" + produto + ") por R$" + preco.toFixed(2) + " e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas " + desconto.toFixed(2) + " pelo seu produto. Volte Sempre!";
}

function atv_08(){
    var tempo = window.prompt("Informe o tempo da viagem em horas");
    var velocidade = window.prompt("Informe a velocidade média da viagem: ");

    document.getElementById("resultado").innerHTML = "Quantidade de litros gasta: " + (velocidade/tempo) * 12;

}

var n = Number();

function atv_09_btn_01(){
    n = n + 1;
    document.getElementById("contador").innerHTML = "O contador está com " + n + " cliques";

}

function atv_09_btn_02(){
    n = 0;
    document.getElementById("contador").innerHTML = "O contador está com " + n + " cliques";
}

function atv_10(){
    var num = Number(window.prompt("Informe um número: "));

    var quadrado =  Math.pow(num,2);
    var cubo = Math.pow(num,3);
    var raiz = Math.sqrt(num);
    var cubica = Math.cbrt(num);

    document.getElementById("pot2").innerHTML = + num + " ao quadrado = " + quadrado.toFixed(2);
    
    document.getElementById("pot3").innerHTML = + num + " ao cubo = " + cubo.toFixed(2);

    document.getElementById("raiz2").innerHTML = "A raiz quadrada  de " + num + " é " + raiz.toFixed(2);

    document.getElementById("raiz3").innerHTML = "A raiz cubica de " + num + " é " + cubica.toFixed(2);


}