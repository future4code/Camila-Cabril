/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 *
 *
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 *
 *
 *
 */

// let cartasUser = [comprarCarta(), comprarCarta()]
// let cartasComputador = [comprarCarta(), comprarCarta()]


// if(cartasUser[0].valor === 11 && cartasUser[1].valor === 11){
//    cartasUser[0] = comprarCarta()
//    cartasUser[1] = comprarCarta()
// }else if(cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11){
//    cartasComputador[0] = comprarCarta()
//    cartasComputador[1] = comprarCarta()
// }else{

//    let confirmacao = confirm(`Suas cartas são ${cartasUser[0].texto} ${cartasUser[1].texto}. A carta revelada do computador é ${cartasComputador[0].texto}
//    Deseja comprar mais uma carta ?
//    `)

//    //fazer um for
//    if(confirmacao){

//      if((cartasUser[0].valor + cartasUser[1].valor) < 21){
//          cartasUser.push(comprarCarta())
//          console.log(`Suas cartas são ${cartasUser[0].texto} ${cartasUser[1].texto} ${cartasUser[2].texto}`)
//       }
//    }


// }


