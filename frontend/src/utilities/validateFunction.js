const mathjs = require('mathjs')

const validateFunction = (f,x) => {
    try{
        mathjs.evaluate(f,{x})
        return true;
    }catch(err){
        return false;
    }
}

export default validateFunction;