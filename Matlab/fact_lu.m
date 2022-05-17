function [L,U] = fact_lu(A)
U = A;
n = length(A);
L = eye(n);
for i = 1 : 1 : n - 1
    for j = i + 1 : 1 : n
        L(j,i) = U(j,i)/U(i,i);
        U(j,:) = U(j,:)-L(j,i)*U(i,:);
    end
end
end