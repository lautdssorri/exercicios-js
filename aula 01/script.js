/*Aula do dia 06/06/2024
Tipos Primitivos:
01) Crie três variáveis do tipo:String, Number, Boolen
*/
const nome = 'laura';
const idade = 16;
const matriculado = true;
const ausente = false;

//02) Exiba no console as variáveis criadas:
console.log(nome);
console.log(idade);
console.log(matriculado);
console.log(ausente);
console.log('--------------');
console.log(nome, idade, matriculado, ausente);

//03) Exiba no console o tipo de cada variável criada:
console.log(typeof nome);

console.log('--------------');
//04) Mostre que o J.S é fracamente tipada


console.log('--------------');
//05) Mostre a diferença entre LET e CONST

var altura = 5;
var comprimento =10;
area = altura * comprimento;
var area;
console.log('--------------');
let altura2 = 10;
let comprimento2 = 20;
area2 = altura2 * comprimento2;
let area2; // não podemos declarar let depois de definido um valor especifico.

//06) Operações em JS: Crie duas variáveis num1 e num2 e realize as operações de soma, subtração, multiplicação e divisão
const num1 = 10;
const num2 = 15;

//soma
console.log(num1+num2);
//subtracao
console.log(num1 - num2)
//multiplicação
console.log(num1*num2);
//divisao
console.log(num1/num2);
console.log('--------------');
//07) Crie um array com as seguintes frutas: Banana, Maçã, Abacate, Limão, Jaca, Mamão e Pêra
const frutas = ['Banana', 'Maçã', 'Abacate', 'Limao', 'Jaca', 'Mamão', 'pera'];

console.log('--------------');
//08) Exiba o primeiro e ultimo elemento do array
console.log(frutas[0]);
console.log(frutas[6]);

console.log('--------------');
//09)Crie uma função que exiba seu nome no console
function meuNome(){
    return console.log('laura Baladão');
}

console.log('--------------');
//10) Crie uma função para a soma de dois números
function somaDoisNumeros(numero1, numero2){
    return console.log(numero1 + numero2);
}

somaDoisNumeros(2,3);

console.log('--------------');
//11) Crie uma função que multiplica dois números e use tamplate string para manipular o resultado no console.

function multiplicaDoisNumeros(num1, num2){
    return console.log(`Os números multiplicados foram ${num1} e ${num2} e o resultado é ${num1 * num2}`);
}