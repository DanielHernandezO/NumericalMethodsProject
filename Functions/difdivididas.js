const mathjs = require('mathjs')

module.exports = (x,y) => {
    ans = mathjs.max(mathjs.abs(mathjs.eigs(x).values));
    return ans;
}

