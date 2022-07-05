var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

A = parseFloat(lines.shift())
B = parseFloat(lines.shift())
C = parseFloat(lines.shift())
MEDIA = A*0.2 + B*0.3 + C*0.5

console.log(`MEDIA = ${MEDIA.toFixed(1)}`)