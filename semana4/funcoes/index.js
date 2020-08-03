// Exercícios de interpretação de código

// EXERCÍCIO 1

//a. O primeiro console o número 10 e o segundo 20.


//b. A função será executada só não exibida no console.



// EXERCÍCIO 2

//a. A primeira e segunda posição do arrayDeNomes Darvas e Goli.


//b. A primeira e segunda posição com a nova atribuição do arrayDeNomes Amanda e Caio, pois a função outraFuncao sempre vai retornar essas posições.



// EXERCÍCIO 3

// A função percorre o array recebido por parametro e faz uma verificação se o valor x o resto da divisão por 2 for igual a 0 o arrayFinal recebe o valor x vezes ele mesmo x * x e a função retorna esse arrayFinal com os novos valores. O novo nome que sugiro é multiplicarPares.


// **Exercícios de escrita de código**
// EXERCÍCIO 4

//a.
// let sobreMim = () => {
//     return 'Eu sou Carolina, tenho 25 anos, moro em São Paulo.'
// }
// console.log(sobreMim())


//b.
// let pessoa = (nome, idade, endereco, estudante) => {
//     if(typeof(nome) === 'string' && typeof(idade) === 'number' && typeof(endereco) === 'string' && typeof(estudante) === 'boolean'){
//         let pessoaCompleto = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${estudante === true ? 'sou': 'não sou'} estudante`
//         return pessoaCompleto
//     }else{
//         return false
//     }
// }

// let exibirPessoa = pessoa('carolina',25,'Rua 10 - São paulo', true)

// if(exibirPessoa){
//     console.log(exibirPessoa)
// }else{
//     console.log('Error verifique os parâmetros')
// }


// EXERCÍCIO 5

//a.
// let calculo = (x,y) => {
//     return x + y
// }
// console.log(calculo(20,10))


//b.
// let maiorNumero = (x,y) => {
//     if(x >= y){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(maiorNumero(1,2))


//c.
// let exibirMensagem = (mensagem) => {
//     for(let i = 1; i <= 10; i++){
//         console.log(mensagem)
//     }
// }
// exibirMensagem('Essa é uma mensagem')


// EXERCÍCIO 6

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a.
// function qtdElementos(array) {
//     return array.length
// }
// console.log(qtdElementos(array))


//b.
// function numeroPar(x){
//     if(x % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(numeroPar(10))


//c.
// function qtdPares(array){
//     let arrayPares = []
//     for(let i = 0; i <= array.length; i++){
//         if(array[i] % 2 ===0){
//             arrayPares.push(array[i])
//         }
//     }

//     return arrayPares.length

// }
// console.log(`O array possui ${qtdPares(array)} pares`)


//d.
// function qtdPares2(numero){
//     if(numeroPar(numero)){
//         return 'O número ' + numero + ' é par.'
//     }else{
//         return 'O número ' + numero + ' é ímpar.'
//     }
// }
// console.log(qtdPares2(10))



// Desafios
// EXERCÍCIO 1
// 1.
// let arrowFunc = (numero) => {
//     return console.log(numero)
// }


// 2.
// let arrowFunc2 = (x, y) => {
//     let resultado = x + y
//     arrowFunc(resultado)
// }
// arrowFunc2(100,50)



// EXERCÍCIO 2
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// a.
// let paresMultiplicados = (array) => {
//     let novoArray = []
//     for (let i = 0; i <= array.length; i++){
//         if( array[i] % 2 === 0 ){
//             novoArray.push(array[i])
//         }
//     }

//     return novoArray
// }
// console.log(paresMultiplicados(numeros))


//b.
// let maiorNumero = (array) => {
//     let maior = 0
//     for(let i = 0; i <= array.length; i++){
//         if(array[i] > maior){
//             maior = array[i]
//         }
//     }

//     return maior
// }
// console.log(maiorNumero(numeros))


// c.
// let maiorIndice = (array) => {
//     let maior = 0
//     for(let i = 0; i <= array.length; i++){
//         if(i > maior){
//             maior = i - 1
//         }
//     }

//     return maior
// }
// console.log(maiorIndice(numeros))


// d.
// function arrayInvertido(array) {
//     return numeros.slice(0).reverse()
// }
// console.log(arrayInvertido(numeros))