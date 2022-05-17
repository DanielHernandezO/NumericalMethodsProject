function [A] = intSimpsonSimple(a,b,n,f)
f = inline(f);
deltaX = (b-a)/n;
A = 0;

for i=0:1:n
    xi = a + i*deltaX;
    fxi = f(xi);
    if( i > 0 && i<n)
        if(mod(i,3) == 0 )
            fxi = 2 * fxi;
        else
            fxi = 3 * fxi;
        end
    end
    A = A + fxi;
end

A = A * (3*deltaX/8);
end