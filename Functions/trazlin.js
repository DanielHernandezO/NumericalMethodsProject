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
    m = 2*(n-1);
    A = zeros([m,m]);
    B = zeros([m,1]);
    Coef = zeros([n-1,2]);
    z = 0;
    for (let i = 1; i < x.length; i++) {
        A[i][z] = x[i];
        A[i][z+1] = 1;
        z = z+2;
        B[i][0]=y[i];

    }
    A[0][0] = x[0];
    A[0][1] = 1;
    B[0][0] = 1;
    z=0;
    for (let i = 1; i < x.length-1; i++) {
        A[x.length-1+i][z] = x[i];
        A[x.length-1+i][z+2] = -x[i];
        A[x.length-1+i][z+1] = 1;
        A[x.length-1+i][z+3] = -1;
        z=z+2; 
        B[x.length-1+i][0]=0;
    }
    inverse= mathjs.inv(A);
    result = mathjs.multiply(inverse,B);
    newarray = zeros([2,2]);
    toit=0;
    for (let i = 0; i < B.length/2  ; i++) {

        newarray[i][0] = result[toit];
        newarray[i][1] = result[toit+1];
        toit = toit+2;
    }
    return newarray;
}
// %Este programa halla el spline lineal que interpola los datos dados usando el
// %m�todo de trazadores lineales

// %Entradas: 
// %X, abscisas 
// %Y, ordenadas

// %Salidas
// %Coef, coeficientes de los trazadores

// %Creado por: Samir Posada
// %�ltima actualizaci�n: 16/07/2020

// function Coef=C22_trazlin(X,Y)

// %Inicializaci�n
// n=length(X);
// m=2*(n-1);
// A=zeros(m); 
// b=zeros(m,1);
// Coef=zeros(n-1,2);

// %Ciclos
// %Condiciones de interpolaci�n
// for i=1:length(X)-1
//     A(i+1,[2*i-1 2*i])=[X(i+1) 1];
//     b(i+1)=Y(i+1);
// end
// A(1,[1 2])=[X(1) 1];
// b(1)=Y(1);
// %Condiciones de continuidad
// for i=2:length(X)-1
//     A(length(X)-1+i,2*i-3:2*i)=[X(i) 1 -X(i) -1];
//     b(length(X)-1+i)=0;
// end   

// %Entrega de resultados
// Saux=A\b;
// %Se organiza la matriz de salida
// for i=1:length(X)-1
//     Coef(i,:)=Saux([2*i-1 2*i]);
// end
// end