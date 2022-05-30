// %Este programa halla el polinomio interpolante de los datos dados usando el
// %m�todo de Lagrange

// %Entradas: 
// %X, abscisas 
// %Y, ordenadas

// %Salidas
// %L, polinomios de Lagrange
// %Coef, coeficientes del polinomio de interpolaci�n

// %Creado por: Samir Posada
// %�ltima actualizaci�n: 16/07/2020


const mathjs = require('mathjs')

module.exports = (x,y) => {
    var newarr= [];
    var coefficients=[];
    for (var m=0; m<x.length; m++) coefficients[m]=0;
        for (var m=0; m<x.length; m++) {
            var newCoefficients=[];
            for (var nc=0; nc<x.length; nc++) newCoefficients[nc]=0;
            if (m>0) {
                newCoefficients[0]=-x[0]/(x[m]-x[0]);
                newCoefficients[1]=1/(x[m]-x[0]);
        } else {
            newCoefficients[0]=-x[1]/(x[m]-x[1]);
            newCoefficients[1]=1/(x[m]-x[1]);
        }
        var startIndex=1; 
        if (m==0) startIndex=2; 
        for (var n=startIndex; n<x.length; n++) {
            if (m==n) continue;
            for (var nc=x.length-1; nc>=1; nc--) {
                newCoefficients[nc]=newCoefficients[nc]*(-x[n]/(x[m]-x[n]))+newCoefficients[nc-1]/(x[m]-x[n]);
            }
            newCoefficients[0]=newCoefficients[0]*(-x[n]/(x[m]-x[n]));
        }
        newarr.push(newCoefficients.reverse());
        // console.log(newarr);
        
        // console.log(newCoefficients.reverse()[1]);
        // console.log(newCoefficients.reverse()[2]);
        // console.log(newCoefficients.reverse()[3], "X");
        for (var nc=0; nc<x.length; nc++) coefficients[nc]+=y[m]*newCoefficients[nc];
    }
    let z = 0;
    for(var i = 0; i < newarr.length; i++) {
        z = newarr.length-1;
        for(var j = 0; j < newarr.length-1; j++) {

            newarr[i][j] = newarr[i][j] + "x^" +z;
            z--;
        }
         
    }

    return newarr;
    
}
// function [L,Coef]=C21_lagrange(X,Y) 

// %Inicializaci�n
// n=length(X);
// L=zeros(n);

// %Ciclo
// for i=1:n   
//     aux0=setdiff(X,X(i));
//     aux=[1 -aux0(1)];
//     for j=2:n-1
//         aux=conv(aux,[1 -aux0(j)]);
//     end
//     L(i,:)=aux/polyval(aux,X(i));
// end

// %Entrega de resultados
// Coef=Y*L;
// end