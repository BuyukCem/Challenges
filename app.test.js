import {derterminationImpot, getPart} from './app'

describe('Imposition', () => {
    describe('derterminationImpotWithPart() ', () => {
        test('Célibataire avec 32 000€', () => {
            expect(derterminationImpot(32000, 1)).toBe(3617)
        })
        test('Célibataire avec 18 650€', () => {
            expect(derterminationImpot(18650, 1)).toBe(944)
        })
        test('couple marié ou pacsé, deux enfants mineurs avec 55 950 ', () => {
            expect(derterminationImpot(55950, 3)).toBe(2833)
        })
        test('couple marié ou pacsé, cinq enfants mineurs avec 60 500 ', () => {
            expect(derterminationImpot(60500, 3)).toBe(12,)
        })
    })

    describe('Determination des part d\'impot', () => {
        test('Personne seul', () => {
            expect(getPart(false, )).toBe(1)
        })
        test('Personne seul avec un enfant', () => {
            expect(getPart(false,1)).toBe(1.5)
        })
        test('Personne seul avec trois enfant', () => {
            expect(getPart(false, 3)).toBe(2.5)
        })
        test('Cas d’un couple marié ou pacsé, 0 enfant', () => {
            expect(getPart(true,0)).toBe(2)
        })
        test('Cas d’un couple marié ou pacsé, 1 enfant', () => {
            expect(getPart(true,1)).toBe(2.5)
        })
        test('Cas d’un couple marié ou pacsé, 2 enfants', () => {
            expect(getPart(true,2)).toBe(3)
        })
        test('Cas d’un couple marié ou pacsé, 3 enfants', () => {
            expect(getPart(true, 3)).toBe(3.5)
        })
    })
})
