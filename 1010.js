//Cálculo Simples
//Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let total = 0.0;
for (let index = 0; index <= 1; index++) {
    const peca = lines[index].split(' ');
    let code = parseInt(peca.shift());
    let amount = parseInt(peca.shift());
    let value = parseFloat(peca.shift());
    total = total + amount * value;
}

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);