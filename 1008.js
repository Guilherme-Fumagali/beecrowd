//Salário
//Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais. 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let salary = parseInt(lines.shift());
let hours = parseFloat(lines.shift());

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${(salary * hours).toFixed(2)}`);