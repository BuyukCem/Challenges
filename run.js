const  {impotPart, getPart} = require('./app')

let part = getPart(false)
let revenue = 60500

derterminationImpot(revenue,part)

console.log(impotPart(32000, 1));
console.log(impotPart(60500, 3));