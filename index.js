//Documentation: https://mathjs.org/docs/reference/functions.html


// F(x) = 0
const raicesMultiples = require('./Functions/raicesMultiples')
const steffensen = require('./Functions/steffensen')
const aitken = require('./Functions/aitken')
const muller = require('./Functions/muller')
const fixedpoint = require('./Functions/fixedpoint')
const falsePosition = require('./Functions/falsePosition')
const secante = require('./Functions/secante')
const linear = require('./Functions/trazlin')
const cuadratica = require('./Functions/trazcuad')
const cubica = require('./Functions/trazcub')
const lagrange = require('./Functions/lagrange')
const difdivididas = require('./Functions/difdivididas')


// const {root,approximation,iterations}  = raicesMultiples('e^x-x-1','e^x-1','e^x',1,10e-7,100)
// console.log('iterations:\n')
// console.table(iterations)
// console.log('x:\n')
// console.log(root?root:approximation)

// aitken('(1/2)*(x + 2/x)',1,10e-9,100)
// console.log('iterations:\n')
// console.table(iterations)
// console.log('x:\n')
// console.log(xi)

// const {root,approximation,iterations} = muller('log((sin(x)^2)+ 1)-1/2',0,1,10e-7,100)
// console.log('iterations:\n')
// console.table(iterations)
// console.log('x:\n')
// console.log(root?root:approximation)

// const {x,iterations}=fixedpoint('log((sin(x)^2)+1)-x-1/2','log((sin(x)^2)+1)-1/2',-0.5,1e-7,100)
// console.table(iterations)
// console.log(x)
//falsePosition('log((sin(x)^2)+ 1)-1/2',0,1,10e-7,100)
//secante('log((sin(x)^2)+ 1)-1/2',0.5,1,10e-7,100)
// console.log(linear([-1,0,3,4],[15.5,3,8,1]))
// console.log(cuadratica([-1,0,3,4],[15.5,3,8,1]))
// console.log(cubica([-1,0,3,4],[15.5,3,8,1]))
// console.log(difdivididas([-1,0,3,4],[15.5,3,8,1]))
//console.log(lagrange([-1,0,3,4],[15.5,3,8,1]))
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

//factLUPartialPiv([[4,-1,0,3],[1,15.5,3,8],[0,-1.3,-4,-1.1],[14,5,-2,30]],[[1],[1],[1],[1]]);



// Integration
//const trapezoidIntegration = require('./Integration/trapezoidIntegration');
//const simpsonIntegration = require('./Integration/simpsonIntegration');
//const simpsonSimpleIntegration = require('./Integration/simpsonSimpleIntegration');
//trapezoidIntegration(1,2,'e^x -2*x',10);
//simpsonIntegration(1,2,'e^x -2*x',10);
//simpsonSimpleIntegration(1,2,'e^x -2*x',9);
//const vandermorde = require('./Functions/vandermorde.js');
//vandermorde([1,2,3,4],[5,6,7,8]);
//const jacobi = require('./Functions/jacobi.js');
//jacobi([[20,10,3,4],[10,26,8,9],[40,50,9,6],[4,90,9,4]],[5,6,6,6],[0,0,0,0],100,1e-7);
// const gaussseidel = require('./Functions/gaussseidel.js');
// gaussseidel([[20,10,3,4],[10,26,8,9],[40,50,9,6],[4,90,9,4]],[5,6,6,6],[0,0,0,0],100,1e-7);
//const sor = require('./Functions/sor.js');
//sor([[20,10,3,4],[10,26,8,9],[40,50,9,6],[4,90,9,4]],[5,6,6,6],[0,0,0,0],100,1e-7,3.5);