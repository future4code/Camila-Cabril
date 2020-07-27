//Exercícios de interpretação de código

// Exercício 1
/**
  O primeiro cosole imprimirá o valor da variável a, nesse caso o número 10.
  O segundo console imprimirá o valor da variável b modificado, nesse caso o número 5.
 */

 // Exercício 2
/**
  Esse console irá imprimir 3 vezes o número 10.
 */

// Exercícios de escrita de código

// Exercício 1
 let nome;
 let idade;

 console.log(typeof(nome));
 console.log(typeof(idade));

// As variáveis estão como undefined, pois não exitem valores atribuidos para essas variáveis. 

nome = prompt('Qual é o seu nome ?')
idade = prompt('Qual é a sua idade ?')

console.log(typeof(nome))
console.log(typeof(idade))

// Agora as variáveis estão com o tipo string e possuem um valor definido.

console.log('"Olá '+ nome + ', você tem ' + idade + ' anos."' + 'Onde ' + nome + ' e ' + idade + ' são valores que o usuário inseriu')


// Exercício 2
let altura = prompt('Qual sua altura ?')
console.log('1. Qual sua altura ? ' + 'Resposta: ' + altura)
let comida = prompt('Qual a sua comida favorita ?')
console.log('2. Qual a sua comida favorita ? '+'Resposta: ' + comida)
let endereco = prompt('Qual o seu endereço ?')
console.log('3. Qual o seu endereço ? ' + 'Resposta: ' + endereco)
let cor = prompt('Qual a sua cor favorita ?')
console.log('4. Qual a sua cor favorita ? ' + 'Resposta: ' + cor)
let pais = prompt('Qual sua país favorito ?')
console.log('5. Qual sua país favorito ?' + 'Resposta: ' + pais)


// Exercício 3
let comidas = ['Macarrão', 'Batata Frita', 'Feijão', 'Arroz', 'Carne']
console.log(comidas)

console.log('"Essas são as minhas comidas preferidas: "')
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

let comida_usuario = prompt('Qual sua comida favorita ?')
comidas[1] = comida_usuario

console.log(comidas)

// Exercício 4
let perguntas = ['Você está usando uma roupa azul hoje?', 'Você gosta de maça?', 'Você gosta de viajar?']

let respostas = [true, false, true]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])