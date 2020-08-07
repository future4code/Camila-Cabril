// Exercícios de interpretação de código

// 1.
// A função conversorDeMoedas, recebe como pararametro o valor em dolar, dentro da função é solicitado para o usuário qual o valor da cotação e ela retorna o valor do dolar vezes a cotação. A constante meuDinhero recebe o valor retonado da função e o console imprime esse valor. Usei o valor da cotção R$5 ENTÃO 5 * 100 = 500


// 2.
// A função investeDinheiro recebe dois parametros, que são eles tipoDeInvestimento e valor, dentro da função a variável valorAposInvetimento é declarada sem nenhuma atribuição. O switch faz uma verificação do tipo de investimento e para casa tipo ele possui uma regra, como SE tipoDeInvestimento case "Poupança" a variavel valorAposInvetimento é igaul ao valor * 1.03 e assim para cada caso. O primeiro console imprime 165 e o segundo tipo de investimento informado incorreto, pois não possui regra para esse tipo de investimento.


// 3.
// O for percorre a array numeros e faz um verificação se o valor da posição atual divido por 2 o resto da divisão for igual a 0 o array1 recebe esse valor, caso contrario o array2 recebe o valor. O primeiro console imprime a frase e quantidade de itens que o array numero possui no caso 14. O segundo console imprime a quantidade de itens do array1 no caso 5. E o ultimo console imprime a quantidade de itens no array2 no caso 9.


// 4.
//O for precorre a array numeros e faz uma verificação.Salva na variavel numero1 o menor valor encontrado no array numeros no caso -10 e a variavel numero2 recebe o maior valor econtrado no array numeros no caso 1590. O primeiro console imprime -10 e o segundo 1590



// Exercícios de Lógica de Programação
// 1.
// function interarArray(){
// const lista = [51,85,1,58,7]

// for(let i = 0; i < lista.length; i++){
//     console.log(lista[i])
// }

// for(item of lista){
//     console.log(item)
// }

// let contador = 0
// while(contador < lista.length){
//     console.log(lista[contador])
//     contador++
// }
// }

// interarArray()


// 2.
// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2
// const booleano4 = !booleano3

// 2.a = False
// 2.b = False
// 2.c = True
// 2.d = True
// 2.e = True



// 3.
// O código não funciona, pois 1 a constante quantidadeDeNumerosPares precisa de um valor atribuido, 2 i precisar ser < que quantidadeDeNumerosPares.
// function primeirosNumerosPares(){
//     const quantidadeDeNumerosPares = 5
//     let i = 0
//     while(i < quantidadeDeNumerosPares) {
//         console.log(i*2)
//         i++
//     }
// }

// primeirosNumerosPares()


// 4.
// function tipoDeTriangulo(a,b,c){
//     if(a === b && b === a){
//         console.log(`Triângulo Equilátero`)
//     }else if(a === b || b === c || a === c){
//         console.log(`Triângulo Isósceles`)
//     }else{
//         console.log(`Triângulo Escaleno`)
//     }
// }

// tipoDeTriangulo(5,4,1)


// 5.
// function compararNumeros(n1,n2){
//     console.log(`Entrada ${n1} e ${n2}`)
//     if(n1 > n2){
//         console.log(`o maior é ${n1}`)

//     }else if(n1 < n2){
//         console.log(`o maior número é ${n2}`)
//     }
// }

// compararNumeros(50,40)
