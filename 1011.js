//Esfera
//Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159. 

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;
const sphereRadius = parseFloat(lines.shift()); 

console.log(`VOLUME = ${(4.0/3 * PI * Math.pow(sphereRadius, 3)).toFixed(3)}`);