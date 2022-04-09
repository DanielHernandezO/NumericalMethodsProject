function [answer,matrix] =Steffensen(f,p0,tol,niter)
counter=0;
error = tol+1;
matrix=["iteration","p","error"]
b=[counter,p0,""];
matrix=[matrix;b];
while(counter<niter && error>tol) 
    p1=f(p0);
    p2=f(p1);
    p=p0-(p1-p0)^2/(p2-2*p1+p0) 
    error=abs(p-p0);
    p0=p; 
    counter=counter+1;
    b=[counter,p0,error];
    matrix=[matrix;b];
end
if(f(p0)==0)
    answer=p0+" is a root";
elseif error<tol
    answer =p0+" is an approximation with tolerance "+tol;
else 
    answer = 'failed to converge in 1000 iterations.'
end
