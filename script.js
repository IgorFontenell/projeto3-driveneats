
let contador = 0;
let precoFinal = 0;
let pratoPrincipal = "";
let pratoBebida = "";
let pratoSobremesa = "";
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
predidofinal = "";

//Selecionando o prato principal
function selecionarP(elemento) {


    let verificacao = document.querySelector(".selecionado1");
    

    if ( verificacao !== null) {
    verificacao.classList.remove("selecionado1");
    elemento.classList.add("selecionado1");
    }  else {
    elemento.classList.add("selecionado1");
    contador++;
        }
        confirmar();

        //Para salvar o valor da conta
        let variavelPreco = document.querySelector(".selecionado1").querySelector(".preco");
        variavelPreco = variavelPreco.innerHTML.replace(",", ".");
        precoPrato = Number(variavelPreco);
        precoFinal = precoFinal + precoPrato;
        precoFinal = Number(precoFinal);

        //Para salvar o pedido
        let variavelPrato = document.querySelector(".selecionado1").querySelector(".prato-titulo");
        pratoPrincipal = variavelPrato.innerHTML;

}

//Selecionando a bebida
function selecionarB(elemento) {


    let verificacao = document.querySelector(".selecionado2");

    if ( verificacao !== null) {
    verificacao.classList.remove("selecionado2");
    elemento.classList.add("selecionado2");
    }  else {
    elemento.classList.add("selecionado2");
    contador++;
        }
        confirmar();
        let variavelPreco = document.querySelector(".selecionado2").querySelector(".preco");
        variavelPreco = variavelPreco.innerHTML.replace(",", ".");
        precoBebida = Number(variavelPreco);
        precoFinal = precoFinal + precoBebida;
        precoFinal = Number(precoFinal);

        //Para salvar o pedido
        let variavelPrato = document.querySelector(".selecionado2").querySelector(".prato-titulo");
        pratoBebida = variavelPrato.innerHTML;
        

}
//Selecionando a sobremesa
function selecionarS(elemento) {


    let verificacao = document.querySelector(".selecionado3");

    if ( verificacao !== null) {
    verificacao.classList.remove("selecionado3");
    elemento.classList.add("selecionado3");
    } else {
    elemento.classList.add("selecionado3");
    contador++;
        }
        confirmar();
        let variavelPreco = document.querySelector(".selecionado3").querySelector(".preco");
        variavelPreco = variavelPreco.innerHTML.replace(",", ".");
        precoSobremesa = Number(variavelPreco);
        precoFinal = precoFinal + precoSobremesa;
        precoFinal = Number(precoFinal);

        //Para salvar o pedido
        let variavelPrato = document.querySelector(".selecionado3").querySelector(".prato-titulo");
        pratoSobremesa = variavelPrato.innerHTML;
}
function confirmar() {

    if (contador === 3) {
        let confirmacao = document.querySelector(".bottom-margin");
        confirmacao.classList.add("confirmar");
        let trocaDeTexto = document.querySelector(".bottom-span1");
        trocaDeTexto.classList.add("escondido");
        trocaDeTexto = document.querySelector(".bottom-span2");
        trocaDeTexto.classList.add("aparecido");
    }
}

function pedidoWhats() {

    let nomeCliente = prompt("Qual o seu nome?")
    let endereco = prompt("Qual o seu endereço?")
    precoFinal = String(precoFinal);
    precoFinal = precoFinal.replace(".", ",");

    const pedido = encodeURIComponent(

`Olá, gostaria de fazer o pedido:  
- Prato: ${pratoPrincipal}
- Bebida: ${pratoBebida}
- Sobremesa: ${pratoSobremesa}
Total: R$ ${precoFinal}

Nome: ${nomeCliente}
Endereço: ${endereco}
`);

let link = `https://wa.me/5531993908017?text=${pedido}`;
window.open(`${link}`);

}

