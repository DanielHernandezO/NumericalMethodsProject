const { i } = require('mathjs');
const mathjs = require('mathjs')


module.exports = (x,y) => {
    function zeros(dimensions) {
        var array = [];
        for (var i = 0; i < dimensions[0]; ++i) {
            array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
        }
        return array;
    }
    
    A = []
    B = []
    n = x.length;
    m = 4*(n-1);
    A = zeros([m,m]);
    B = zeros([m,1]);
    Coef = zeros([n-1,4]);
    z = 0;
    for (let i = 1; i < n; i++) {
        A[i][z] = (x[i-1]+1)**3;
        A[i][z+1] = (x[i-1]+1)**2;
        A[i][z+2] = x[i];
        A[i][z+3] = 1;
        z = z+4;
        B[i][0]=y[i];

    }
    A[0][0] = x[0]**3;
    A[0][1] = x[0]**2;
    A[0][2] = x[0]**1;
    A[0][3] = 1;
    B[0][0] = y[0];
    z=0;
    for (let i = 2; i < x.length; i++) {
        A[x.length-2+i][z] = x[i-1]**3;
        A[x.length-2+i][z+1] = x[i-1]**2;
        A[x.length-2+i][z+2] = x[i-1];
        A[x.length-2+i][z+3] = 1;
        A[x.length-2+i][z+4] = -(x[i-1]**3);
        A[x.length-2+i][z+5] = -(x[i-1]**2);
        A[x.length-2+i][z+6] = -x[i-1];
        A[x.length-2+i][z+7] = -1;
        z=z+4; 
        B[n-1+i][0]=0;
    }
    z=0;
    for (let i = 2; i < x.length; i++) {
        A[2*x.length-4+i][z] = (x[i-1]**2)*3;
        A[2*x.length-4+i][z+1] = x[i-1]*2;
        A[2*x.length-4+i][z+2] = 1;
        A[2*x.length-4+i][z+3] = 0;
        A[2*x.length-4+i][z+4] = -(x[i-1]**2)*3;
        A[2*x.length-4+i][z+5] = -(x[i-1]*2);
        A[2*x.length-4+i][z+6] = -1;
        A[2*x.length-4+i][z+7] = 0;
        z=z+4;
        B[2*x.length-3+i][0]=0;
        // B[x.length+5+i][0]=0;
    }
    z=0;
    for (let i = 2; i < x.length; i++) {
        A[3*x.length-6+i][z] = (x[i-1]*6);
        A[3*x.length-6+i][z+1] = 2;
        A[3*x.length-6+i][z+2] = 0;
        A[3*x.length-6+i][z+3] = 0;
        A[3*x.length-6+i][z+4] = -(x[i-1]*6);
        A[3*x.length-6+i][z+5] = -2;
        A[3*x.length-6+i][z+6] = 0;
        A[3*x.length-6+i][z+7] = 0;
        z=z+4;
        
        B[x.length+4+i][0]=0;
    }
    A[m-2][0]=x[0]*6;
    A[m-2][1]=2;
    B[m-1][0]=0;
    A[m-1][8]=x[x.length-1]*6;
    A[m-1][9]=2;
    B[m-2][0]=0;
    inverse= mathjs.inv(A);
    result = mathjs.multiply(inverse,B);
    newarray = zeros([3,4]);
    toit=0;
    for (let i = 1; i < newarray.length+1  ; i++) {
        console.log("as");
        newarray[i-1][0] = result[toit];
        newarray[i-1][1] = result[toit+1];
        newarray[i-1][2] = result[toit+2];
        newarray[i-1][3] = result[toit+3];
        toit = toit+4;
    }
    return newarray;
}

// %Este programa halla el spline c�bico que interpola los datos dados usando el
// %m�todo de trazadores c�bicos

// %Entradas: 
// %X, abscisas 
// %Y, ordenadas

// %Salidas
// %Coef, coeficientes de los trazadores

// %Creado por: Samir Posada
// %�ltima actualizaci�n: 16/07/2020

// function Coef=C24_trazcub(X,Y)

// %Inicializaci�n
// n=length(X);
// m=4*(n-1);
// A=zeros(m); 
// b=zeros(m,1);
// Coef=zeros(n-1,4);

// %Ciclos
// %Condiciones de interpolaci�n
// for i=1:n-1
//     A(i+1,4*i-3:4*i)=[X(i+1)^3 X(i+1)^2 X(i+1) 1];
//     b(i+1)=Y(i+1);
// end
// A(1,1:4)=[X(1)^3 X(1)^2 X(1) 1];
// b(1)=Y(1);
// %Condiciones de continuidad
// for i=2:n-1
//     A(n-1+i,4*i-7:4*i)=[X(i)^3 X(i)^2 X(i) 1 -X(i)^3 -X(i)^2 -X(i) -1];
//     b(n-1+i)=0;
// end
// %Condiciones de suavidad
// for i=2:n-1
//     A(2*n-3+i,4*i-7:4*i)=[3*X(i)^2 2*X(i) 1 0 -3*X(i)^2 -2*X(i) -1 0];
//     b(2*n-3+i)=0;
// end
// %Condiciones de convavidad
// for i=2:n-1
//     A(3*n-5+i,4*i-7:4*i)=[6*X(i) 2 0 0 -6*X(i) -2 0 0];
//     b(n+5+i)=0;
// end
// %Condiciones de frontera
// A(m-1,1:2)=[6*X(1) 2]; 
// b(m-1)=0;
// A(m,m-3:m-2)=[6*X(end) 2];
// b(m)=0;

// %Entrega de resultados
// Saux=A\b;
// %Se organiza la matriz de salida
// for i=1:n-1
//     Coef(i,:)=Saux(4*i-3:4*i);
// end
// end