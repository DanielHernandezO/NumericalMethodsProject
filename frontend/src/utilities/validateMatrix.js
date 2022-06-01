/*
Validaciones

1. Validar division de filas (;) 
2. Validar estructura fila
3. Validar longitud de filas respecto a columnas

*/


const validateMatriz = (matriz) => {
    const rows = matriz.split(';');
    const validatorRows = /^((([-])?[0-9]+([.][0-9]+)?)(([,])(([-])?[0-9]+([.][0-9]+)?))*)$/;
    let n = rows.length;
    
    for (let i = 0; i < rows.length; i++) {
        if (!validatorRows.test(rows[i])) {
            return {message: 'Error: row(s) of  matrix A do not comply with the structure "num_1,num_2,num_3,num_n".'};
        }
        if (validatorRows.test(rows[i]) && !(rows[i].split(',').length === n)) {
            return {message: 'Error: The matrix A must be nxn.'};
        }
    }
    return {message: 'Success', n}
}

export default validateMatriz;