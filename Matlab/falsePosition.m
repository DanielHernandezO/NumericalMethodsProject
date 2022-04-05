%REGLA FALSA

clc %permite borrar el area de trabajo
clear   %permite borrar las variables almacenadas

fprintf('                         METODO REGLA FALSA\n\n\n');
%fprintf me permite ingresar comentarios de manera textual que pueden
%orientar al usuario en el uso del programa

format long;
%format long permite utilizar la máxima capacidad del computador 

Xi=input ('Ingrese el limite inferior del intervalo\n');
Xs=input ('\nIngrese el limite superior del intervalo\n');
Tol=input ('\nIngrese la tolerancia deseada\n');
Iter=input ('\nIngrese el número de iteraciones\n');
Fun=input ('\nIngrese la función entre comillas simples\n');
%input es un comando de solicitud de entrada de datos del usuario.

f=inline (Fun);
%El comando inline permite hacer la asignación posterior de variables en
%una función.

Yi=f(Xi); 
Ys=f(Xs); 

%La sentencia if tiene como función evaluar condiciones, que en caso de ser
%verdadera se procede a realizar ciertos pasos, de lo contrario se procede
%a realizar otros, por medio de la funcion else.

if Yi==0 
fprintf('\n\nSOLUCION:\n')
fprintf('Xi es raiz\n\n'); 
else
if Ys==0 
fprintf('\n\nSOLUCION:\n')
fprintf('Xs es raiz\n\n'); 
else
if Yi*Ys<0 
Xm=(Xi)-((f(Xi)*(Xi-Xs))/(f(Xi)-f(Xs)));
Ym=f(Xm); 
Error=Tol+1; 
Cont=1;
Z=[Cont,Xi,Xs,Xm,Ym,Error];
%Z es una matriz la cual permitira observar lo datos como una tabla a la
%finalizacion del programa

%La sentencia While ejecuta todas las órdenes mientras la expresión sea
%verdadera.

while Ym~=0 & Error>Tol & Cont<Iter 

if Yi*Ym<0
Xs=Xm;
Ys=Ym;
else
Xi=Xm;
Yi=Ym;
end
Xaux=Xm;
Xm=(Xi)-((f(Xi)*(Xi-Xs))/(f(Xi)-f(Xs)));
Ym=f(Xm);
Error=abs(Xm-Xaux)/Xm;
Cont=Cont+1;
Z(Cont,1)=Cont;
Z(Cont,2)=Xi;
Z(Cont,3)=Xs;
Z(Cont,4)=Xm;
Z(Cont,5)=Ym;
Z(Cont,6)=Error;
%las z son las posiciones asignadas en la tabla a los resultados que se
% observarán

end
if Ym==0
fprintf('\n\nSOLUCION:\n')
fprintf('%g es raíz\n\n',Xm);
else
if Error<Tol
fprintf('\n\nSOLUCION:\n')
fprintf( '%g es una aproximacion a una raìz con una tolerancia %g \n\n',Xm,Tol);
else
fprintf('\n\nSOLUCION:\n')
fprintf('Fracaso en %g iteraciones\n\n',Iter);
end
end
else
fprintf('\n\nSOLUCION:\n')
fprintf('El intervalo es inadecuado\n\n');
end
end
end
fprintf('TABLA\n\nIteraciones                   Xi                    Xs                   Xm                 Ym             Error Absoluto\n\n');
disp(Z);

%La funcion disp permite visualizar la tabla, obtenida de los resultados de
%la secuencia while

ezplot(f);
%fplot(f,[-1 10]);
%El comando ezplot permite grafica una función.

grid on

%grid on permite observar una cuadricula en la grafica de la funcion.
