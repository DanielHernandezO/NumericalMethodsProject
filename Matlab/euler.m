function [ yo ] = euler( y )
%     programa realizado por Julio Echeverri

%esta funcion recibe derivada simbolica en terminos de
%la variabe X para calcular numericamente su integral
%esta no es una derivada cualquiera es un problema de valor inicial
%si quiere probar el programa, puede dar una concidion inicial de 
% Y(xo)=0 y comparar con el resultado que entregaria un calculadora normal
%el numero de puntos N varia, dependiendo la precisión deseada.

xo=input('Ingrese el limite inferior del intervalo: ');
xf=input('Ingrese el limite superior del intervalo: ');
yo=input(sprintf('Ingrese el valor inicial de y(%.2f): ',xo));
n=input('Ingrese el numero de puntos: ');
h=(xf-xo)/n;

while xo<=xf
    yo=yo+h*subs(y,xo);
    xo=xo+h;
end
end
