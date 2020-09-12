const RATE_2020 = [
    {
        min: 0,
        max: 10064,
        rate: 0
    },
    {
        min: 10064,
        max: 25659,
        rate: .11
    },
    {
        min: 25660,
        max: 73369,
        rate: .30
    }, {
        min: 73369,
        max: 157806,
        rate: .41
    },
    {
        max: Infinity,
        min: 157806,
        rate: .45
    }
]

/**
 *  Calcule l'imposition des tranches
 *  @param {number} revenue
 *  @param rate
 *  @return {number}
 */
function impot(revenue, rate = RATE_2020) {
    let sum_impot = 0
    for (let i = 0; rate.length > i; i++) {
        let rate_ = rate[i];
        const rate_min = rate_.min + 1
        if (revenue >= rate_.max) {
            sum_impot += (rate_.max - rate_min) * rate_.rate
        } else {
            sum_impot += (revenue - rate_min) * rate_.rate
            break
        }
        console.log(sum_impot)
    }
    return sum_impot
}


/**
 * @param {number} revenue
 * @param {number} part
 * @param rate
 * @return {number}
 */
const derterminationImpot = (revenue, part) => {
    console.log("Nombre de Part" + part)
    let rate = RATE_2020

    if (part === 0 || part === 1) {
        let result = impot(revenue, rate)
        return Math.floor(result)
    } else {
        let baseCalcul = revenue / part //divistion du net imposable
        console.log("Base calcul "+baseCalcul)
        let resImposable = impot(baseCalcul)
        console.log(part * resImposable)
        return Math.floor(part * resImposable)
    }
}

/**
 *  Determination du nombre de part
 * @param {boolean} is_Married
 * @param {number} part_children
 */
const getPart = (is_Married = false, part_children = 0) => {
    return (is_Married ? 2 : 1) + (part_children * .5)
}

module.exports = {
    getPart, derterminationImpot
}