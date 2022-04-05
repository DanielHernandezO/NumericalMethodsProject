function [answer,A]= bisection(f,left,right,tolerance,niter)

fRight=f(right);
fLeft=f(left);
A=["counter","left","right","xmid","fXmid","error"];
if(fRight==0)
    answer= right+' is a root';
elseif(fLeft==0)
    answer= right+' is a root';
elseif(fLeft*fRight<0)
    xmid = (left+right)/2;
    fXmid = f(xmid);
    counter = 1;
    error = tolerance+1;
    while(error>tolerance && fXmid~=0 && counter<niter)
        B= [counter,left,right,xmid,fXmid,error];
        A=[A;B];
        if(fLeft*fXmid<0)
            right=xmid;
            fRight=fXmid;
        else
            left=xmid;
            fLeft=fXmid;
        end
        xAux=xmid;
        xmid=(right+left)/2;
        fXmid=f(xmid);
        error =abs(xmid-xAux);
        counter=counter+1;
    end
    B= [counter,left,right,xmid,fXmid,error];
    A=[A;B];
    if(fXmid==0)
        answer = xmid+ "is a root";
    elseif(error<tolerance)
        answer= xmid+" is an approximation with tolerance "+tolerance;
    else
        answer = "The method fails in "+niter+" iterations";
    end
end
