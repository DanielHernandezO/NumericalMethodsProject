function [A] = intTrapeze(a,b,f,n)
f = inline(f);
deltaX = (b-a)/n;
A = 0;
for i = 0:1:n
    xi = a + i*deltaX;
    fxi = f(xi);
    if( i > 0 && i<n)
        fxi = 2 * fxi;
    end
    fxi
    A = A + fxi;
end
A = A * (deltaX/2);
end