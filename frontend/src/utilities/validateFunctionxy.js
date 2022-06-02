const mathjs = require('mathjs')

const validateFunction = (f,x,y) => {
    try{
        mathjs.evaluate(f,{x,y})
        return true;
    }catch(err){
        return false;
    }
}

export default validateFunction;