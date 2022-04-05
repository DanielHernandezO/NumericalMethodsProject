f=input('Enter initial func');
g=input('Enter cleared func');
x0=input('Enter initial guess');
tol=input('Enter tolerance');
n=input('Enter amount of iterations');
for i=1:n
    x1 = g(x0)
    fprintf('x%d = %.4f\n',i,x1)
    if x1==f(x0)
        break
    end
    if abs(x1-x0)<tol
        break
    end
    x0=x1;
end