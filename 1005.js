var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

A = parseFloat(lines.shift())
B = parseFloat(lines.shift())
MEDIA = (A*0.35+B*0.75)/1.1

console.log(`MEDIA = ${MEDIA.toFixed(5)}`)
