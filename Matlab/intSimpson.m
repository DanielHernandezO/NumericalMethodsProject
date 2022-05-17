    function [A] = intSimpson(a,b,n,f)
    f = inline(f);
    deltaX = (b-a)/n;
    A = 0;
    
    %Test if n is par
    
    for i=0:1:n
        xi = a + i*deltaX;
        fxi = f(xi);
        if( i > 0 && i<n)
            if(mod(i,2) == 0 )
                fxi = 2 * fxi;
            else
                fxi = 4 * fxi;
            end
        end
        A = A + fxi;
    end
    
    A = A * (deltaX/3);
    
    end