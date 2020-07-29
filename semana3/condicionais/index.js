//Exercícios de interpretação de código

// EXERCÍCIO 1
//  O código pede que o usuário insira um número e verifica se o resto da divisão do número dividido por 2 é igual a 0, caso seja o programa imprime no console Passou no teste caso contrário o programa imprime Não passou no teste, e isso acontece porque o resto da divisão do número divido por 2 foi 1.


// EXERCÍCIO 2

// a. O switch avalia uma expressão combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case. Se fruta for Laranja o preco recebe 3.25 o break serve para parar a execução caso a condição seja atendida, se fruta for Maça o preco recebe 2.25 e assim por diante, o default é para definir um padrão caso nenhum case seja atendido.

// b. O preço da fruta  Maçã  é  R$  2.25

// c. O preço da fruta  Pêra  é  R$  5


// EXERCÍCIO 3

// a. Está definindo a constante numero e atruindo a ela um prompt que solicita ao usuário um valor o Number garante que o valor digitado pelo usuário seja convertido em número caso seja colocado uma string ele retorna NaN (not a number).

// b. Utilizando o valor 10: Esse número passou no teste
// index.js:25 Uncaught ReferenceError: mensagem is not defined at index.js:25.
// Utilizando o valor -10: index.js:25 Uncaught ReferenceError: mensagem is not defined at index.js:25 (anonymous) @ index.js:25

// c. Sim, pois a variável mensagem foi defina dentro do bloco if não podendo ser acessada pelo escopo global.



// Exercícios de escrita de código

// EXERCÍCIO 4
// let idade = Number(prompt("Qual é sua idade?"))

// if(idade >= 18){
//     console.log("Você pode dirigir")
// }else{
//     console.log("Você não pode dirigir")
// }


// EXERCÍCIO 5
// let turno = prompt("Digite seu turno, utilize M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

// if(turno === "M"){
//     console.log("Bom dia!")
// }else if(turno === "V"){
//     console.log("Boa Tarde!")
// }else if(turno === "N"){
//     console.log("Boa Noite!")
// }else{
//     console.log("Turno não encontrado!")
// }


// EXERCÍCIO 6
// let turnoSwitch = prompt("Digite seu turno, utilize M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

// switch (turnoSwitch) {
//   case "M":
//     console.log("Bom dia!")
//     break;
//   case "V":
//     console.log("Boa Tarde!")
//     break;
//   case "N":
//     console.log("Boa Noite!")
//     break;
//   default:
//     console.log("Turno não encontrado!")
//     break;
// }


// EXERCÍCIO 7
// let generoFilme = prompt("Qual o gênero de filme que vão assistir?").toLowerCase()
// let valorIngresso = Number(prompt("Qual o preço do ingresso ?"))

// if(generoFilme === "fantasia" && valorIngresso < 15){
//     let snack = prompt("Quais snack você vai comprar ? Pipoca, chocolate, doces, etc")

//     console.log("Bom filme! ... com " + snack)
// }else{
//     console.log("Escolha outro filme :(")
// }

// Desafios
// DESAFIO 2

// const nomeCompleto = prompt("Digite seu nome completo")

// let tipoDeJogo = prompt("Infome o tipo de jogo. IN para internacional ou DO para doméstico").toUpperCase()

// let etapaDoJogo = prompt("Informe a etapa do jogo. SF para semi-final, DT para decisão de terceiro lugar ou FI final").toUpperCase()

// let categoria = Number(prompt("Infome a categoria. Opções 1, 2, 3 ou 4"))

// let qtdDeIngressos = Number(prompt("Quantidade de ingressos ?"))

// let valorIngresso = 0

// function realizarVenda(nomeCompleto, tipoDeJogo, etapaDoJogo, categoria, qtdDeIngressos){
//     if(tipoDeJogo == "DO" && etapaDoJogo == "SF"){
//         if(categoria == 1){
//             valorIngresso = 1320
//             console.log(`
//             ---Dados da compra---

//             Nome do cliente: ${nomeCompleto}
//             Tipo do jogo: Nacional
//             Etapa do Jogo: ${etapaDoJogo ? "SF" : "Semi-Final"}
//             categoria: ${categoria}
//             Quantidade de Ingressos: ${qtdDeIngressos}

//             ---Valores---
//             Valor do ingresso: ${valorIngresso}
//             Valor total: ${valorIngresso * qtdDeIngressos}
//             `)
//         }else if(categoria == 2){
//             valorIngresso = 880
//             console.log(`
//             ---Dados da compra---

//             Nome do cliente: ${nomeCompleto}
//             Tipo do jogo: Nacional
//             Etapa do Jogo: Semi-Final
//             categoria: ${categoria}
//             Quantidade de Ingressos: ${qtdDeIngressos}

//             ---Valores---
//             Valor do ingresso: ${valorIngresso}
//             Valor total: ${valorIngresso * qtdDeIngressos}
//             `)
//         }else if(categoria == 3){
//             valorIngresso = 550
//             console.log(`
//             ---Dados da compra---

//             Nome do cliente: ${nomeCompleto}
//             Tipo do jogo: Nacional
//             Etapa do Jogo: Semi-Final
//             categoria: ${categoria}
//             Quantidade de Ingressos: ${qtdDeIngressos}

//             ---Valores---
//             Valor do ingresso: ${valorIngresso}
//             Valor total: ${valorIngresso * qtdDeIngressos}
//             `)
//         }
//     }
// }

// realizarVenda(nomeCompleto, tipoDeJogo, etapaDoJogo, categoria, qtdDeIngressos)






