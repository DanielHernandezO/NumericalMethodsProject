//Documentation: https://mathjs.org/docs/reference/functions.html


// F(x) = 0
const raicesMultiples = require('./Functions/raicesMultiples')
const steffensen = require('./Functions/steffensen')
const aitken = require('./Functions/aitken')
const muller = require('./Functions/muller')
const fixedpoint = require('./Functions/fixedpoint')
const falsePosition = require('./Functions/falsePosition')
const secante = require('./Functions/secante')
// const {root,approximation,iterations}  = raicesMultiples('e^x-x-1','e^x-1','e^x',1,10e-7,100)
// console.log('iterations:\n')
// console.table(iterations)
// console.log('x:\n')
// console.log(root?root:approximation)

// const {root,approximation,iterations} = aitken('log((sin(x)^2)+1)-x-1/2','log((sin(x)^2)+1)-1/2',-0.5,10e-7,100)
// console.log('iterations:\n')
// console.table(iterations)
// console.log('x:\n')
// console.log(root?root:approximation)

// const {root,approximation,iterations} = muller('log((sin(x)^2)+ 1)-1/2',0,1,10e-7,100)
// console.log('iterations:\n')
// console.table(iterations)
// console.log('x:\n')
// console.log(root?root:approximation)

const {x,iterations}=fixedpoint('log((sin(x)^2)+1)-x-1/2','log((sin(x)^2)+1)-1/2',-0.5,1e-7,100)
// console.table(iterations)
// console.log(x)
//falsePosition('log((sin(x)^2)+ 1)-1/2',0,1,10e-7,100)
//secante('log((sin(x)^2)+ 1)-1/2',0.5,1,10e-7,100)

// Ax = b
const gausSimple = require('./Matrixes/gausSimple')
const gausPivoteoParcial = require('./Matrixes/gausPivoteoParcial')
const gausPivoteoTotal = require('./Matrixes/gausPivoteoTotal')
const factLUGaussParc = require('./Matrixes/factLUGaussParc')
const factLUPartialPiv = require('./Matrixes/factLUPartialPiv')
// const {x,stages} = gausSimple([[2, -1, 0, 3],[1, 0.5, 3, 8],[0, 13, -2, 11],[14, 5, -2, 3]],[[1],[1],[1],[1]],4)
// console.log('iterations:\n')
// stages.map(stage => console.table(stage))
// console.log('x:\n')
// console.log(x)
// const {x,stages} = gausPivoteoParcial([[2, -1, 0, 3],[1, 0.5, 3, 8],[0, 13, -2, 11],[14, 5, -2, 3]],[[1],[1],[1],[1]],4)
// console.log('iterations:\n')
// stages.map(stage => console.table(stage))
// console.log('x:\n')
// console.log(x)
// const {x,stages} = gausPivoteoTotal([[2, -1, 0, 3],[1, 0.5, 3, 8],[0, 13, -2, 11],[14, 5, -2, 3]],[[1],[1],[1],[1]],4)
// console.log('iterations:\n')
// stages.map(stage => console.table(stage))
// console.log('x:\n')
// console.log(x)
//console.log(gausPivoteoParcial([[0, 0.6787, 0.6555, 0.2769],[0, 0.7577, 0.1712, 0.0462],[0.8491, 0.7431, 0.7060, 0.0971],[0.9340, 0.3922, 0.0318, 0.8235]],[[0.4387],[0.3816],[0.7655],[0.7952]],4).x)
//console.log(gausPivoteoTotal([[-7,2,-3,4],[5,-1,14,-1],[1,9,-7,13],[-12,13,-8,-4]],[[-12],[13],[31],[-32]],4).stages.map(element => console.table(element)))

// const result = factLUPartialPiv([[4,-1,0,3],[1,15.5,3,8],[0,-1.3,-4,1.1],[14,5,-2,30]],[[1],[1],[1],[1]]);
// console.log(result);


// Integration
// const trapezoidIntegration = require('./Integration/trapezoidIntegration');
// const simpsonIntegration = require('./Integration/simpsonIntegration');
// const simpsonSimpleIntegration = require('./Integration/simpsonSimpleIntegration');
// console.log(trapezoidIntegration(0,5,'x^3 - 5*x^2 + 2*x + 8',1000));
// console.log(simpsonIntegration(1,5,'5*x^2 - x/3',12));
// console.log(simpsonSimpleIntegration(1,2,'x/(1+x^2)',3));