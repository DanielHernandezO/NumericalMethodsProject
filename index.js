//Documentation: https://mathjs.org/docs/reference/functions.html


// F(x) = 0
const raicesMultiples = require('./Functions/raicesMultiples')
const steffensen = require('./Functions/steffensen')
const aitken = require('./Functions/aitken')
const muller = require('./Functions/muller')

console.table(raicesMultiples('e^x-x-1','e^x-1','e^x',1,10e-7,100).iterations)
console.table(aitken('x-e^(-x)','e^(-x)',0,10e-7,100).iterations)
console.table(steffensen('x^3 + 4x^2 -10','sqrt(10/(x+4))',1.5,10e-7,100).iterations)
console.table(muller('x-e^(-x)',0,1,10e-7,100).iterations)

// Ax = b
const gausSimple = require('./Matrixes/gausSimple')
const gausPivoteoParcial = require('./Matrixes/gausPivoteoParcial')
const gausPivoteoTotal = require('./Matrixes/gausPivoteoTotal')

console.log(gausSimple([[0.6557, 0.6787, 0.6555, 0.2769],[0.0357, 0.7577, 0.1712, 0.0462],[0.8491, 0.7431, 0.7060, 0.0971],[0.9340, 0.3922, 0.0318, 0.8235]],[[0.4387],[0.3816],[0.7655],[0.7952]],4).x)
console.log(gausPivoteoParcial([[0, 0.6787, 0.6555, 0.2769],[0, 0.7577, 0.1712, 0.0462],[0.8491, 0.7431, 0.7060, 0.0971],[0.9340, 0.3922, 0.0318, 0.8235]],[[0.4387],[0.3816],[0.7655],[0.7952]],4).x)
console.log(gausPivoteoTotal([[-7,2,-3,4],[5,-1,14,-1],[1,9,-7,13],[-12,13,-8,-4]],[[-12],[13],[31],[-32]],4).x)