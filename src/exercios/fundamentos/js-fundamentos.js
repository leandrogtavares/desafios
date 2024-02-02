// 1 - JavaScript Fundamentals
// Implemente uma função que receba um array de pessoas (Pessoa[]) e retorne a média das idades.
function calculateAverageAge(people) {
  // Sua resposta aqui
}

// 2 - DOM Manipulation
// Crie uma função que adiciona um novo elemento de parágrafo ao corpo do documento com o texto "Novo Parágrafo".
// Crie o arquivo html necessário para testar a função também
function addNewParagraph() {
  // Sua resposta aqui
}

// 3 - ES6 Features
// Refatore a função abaixo para utilizar destructuring e arrow functions.
function getUserInfo(user) {
  const name = user.name;
  const age = user.age;
  return `${name} tem ${age} anos.`;
}

// 4 - Asynchronous JavaScript
// Crie uma função assíncrona que faz três requisições HTTP utilizando Promise.all e retorna o resultado delas.
async function fetchMultipleData() {
  // Sua resposta aqui
}

// 5 - Array Methods
// Implemente uma função que recebe um array de objetos e retorna um novo array apenas com as pessoas maiores de 18 anos.
function filterAdults(people) {
  // Sua resposta aqui
}

// 6 - Object-Oriented Programming (OOP)
// Crie uma classe 'Book' com métodos para adicionar e remover páginas, e um método para verificar o número total de páginas.
class Book {
  // Sua resposta aqui
}

// 7 - Modules and Bundlers
// Crie um módulo que exporta uma função assíncrona que retorna a soma de dois números após um segundo de atraso.
// Utilize o módulo em outro arquivo para realizar a soma.
const math = require('./math.js');

// Testes
console.log("Teste 1:", calculateAverageAge([{ name: "John", age: 30 }, { name: "Alice", age: 25 }, { name: "Bob", age: 40 }]) === 31.666666666666668);
console.log("Teste 2:", addNewParagraph() === "Novo Parágrafo adicionado.");
console.log("Teste 3:", getUserInfo({ name: "Lucas", age: 28 }) === "Lucas tem 28 anos.");
console.log("Teste 4:", fetchMultipleData().then(results => results.length === 3));
console.log("Teste 5:", filterAdults([{ name: "John", age: 25 }, { name: "Alice", age: 30 }, { name: "Bob", age: 17 }]).length === 2);
console.log("Teste 6:", new Book().addPage().addPage().removePage().getTotalPages() === 1);
console.log("Teste 7:", math(5, 3).then(result => result === 8));
