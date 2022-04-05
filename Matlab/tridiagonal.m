a = input('Enter A')
b = input('Enter B')
c = input('Enter C')
d = input('Enter D')
%a, b, c son los vectores columnas para la matriz tridiagonal comprimida, d es el vector de la derecha
% N is el numero de filas
N = length(d);
 
% modifica los coeficientes de la primera fila
c(1) = c(1) / b(1); % riesgo de division por cero
d(1) = d(1) / b(1); 
 
for n = 2:1:N
    temp = b(n) - a(n) * c(n - 1);
    if (n<N)
        c(n) = c(n) / temp;
    end
    d(n) = (d(n) - a(n) * d(n - 1)) / temp;
end
 
% ahora sustituimos
x(N) = d(N);
for n = (N - 1):-1:1
    x(n) = d(n) - c(n) * x(n + 1);
end