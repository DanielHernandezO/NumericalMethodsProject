const validateVector = (vector,n) => {
    const validatorRows = /^((([-])?[0-9]+([.][0-9]+)?)(([;])(([-])?[0-9]+([.][0-9]+)?))*)$/;

    if (!validatorRows.test(vector)) {
        return 'Error: the vector x do not comply with the structure "num_1;num_2;num_3;num_n".';
    }
    if (validatorRows.test(vector) && !(vector.split(';').length === n)) {
        return 'Error: the vector x must be 1xn.';
    }
    
    return 'Success'
}

export default validateVector;