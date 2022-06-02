const convertToInmutable = (A) => {
    const newArray = [];
    for(let i = 0; i < A.length; i++){
     newArray.push([...A[i]]);
    }
    return newArray;
}

export default convertToInmutable;