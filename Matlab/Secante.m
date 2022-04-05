%Método de la secante
clc %permite borrar el area de trabajo
clear   %permite borrar las variables almacenadas

fprintf('                      METODO DE LA SECANTE\n\n\n');
%fprintf me permite ingresar comentarios de manera textual que pueden
%orientar al usuario en el uso del programa

format long;
%format long permite utilizar la máxima capacidad del computador 

Xo=input('ingrese xo\n');
X1=input('\ningrese x1\n');
Tol=input('\ningrese la tolerancia\n');
Iter=input('\ningrese el número de iteraciones\n');
Fun=input('\ningrese la función entre comillas simples\n');
%input es un comando de solicitud de entrada de datos del usuario.

f=inline (Fun);
%El comando inline permite hacer la asignación posterior de variables en
%una función.

yo=f(Xo);

%La sentencia if tiene como función evaluar condiciones, que en caso de ser
%verdadera se procede a realizar ciertos pasos, de lo contrario se procede
%a realizar otros, por medio de la funcion else.
if yo==0
fprintf('\n\nSOLUCION:\n')
fprintf('xo es raiz\n');

else
y1=f(X1);
d=(y1-yo);
e=Tol+1;
cont=0;
Z1= [cont,X1, y1, e];
Z= [cont,X1, y1, e];
%Z es una matriz la cual permitira observar lo datos como una tabla a la
%finalizacion del programa

%La sentencia While ejecuta todas las órdenes mientras la expresión sea
%verdadera.

while y1~=0 & e>Tol & cont<Iter & d~=0

X2= X1-((y1*(X1-Xo))/(d));
e=abs((X2-X1)/X2);
%e=abs(X2-X1);
Xo=X1;
yo=y1;
y1=f(X2);
X1=X2;
d=(y1-yo);
cont=cont+1;
Z(cont,1)=cont;
Z(cont,2)=X1;
Z(cont,3)=y1;
Z(cont,4)=e;
%las z son las posiciones asignadas en la tabla a los resultados que se
% observarán
end

if y1==0
fprintf('\n\nSOLUCION:\n')
fprintf('%g es raíz\n\n',X1);
else
if e<Tol
fprintf('\n\nSOLUCION:\n')
fprintf( '%g es una aproximacion a una raìz con una tolerancia %g \n\n',X1,Tol)
else
if d==0
fprintf('\n\nSOLUCION:\n')
fprintf('el denominador es cero, FRACASO\n\n');
else
fprintf('\n\nSOLUCION:\n')
fprintf('Fracaso en %g iteraciones\n\n',Iter);
end
end
end
end
fprintf('TABLA\n\ninteraciones               Xn               y1                 Error relativo\n\n');
disp(Z1);
disp(Z);
%La funcion disp permite visualizar la tabla, obtenida de los resultados de
%la secuencia while

%ezplot(f);
fplot(f,[-1 15]);
%El comando ezplot permite grafica una función.

grid on

%grid on permite observar una cuadricula en la grafica de la funcion.

