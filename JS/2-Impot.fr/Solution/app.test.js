import {impot, impotReversed, impotWithPart, impotWithTranches, RATES_2019, RATES_2020} from './app'

describe('Imposition', () => {

  describe('impot()', () => {

    test('Célibataire avec 32 000 €', () => {
      expect(impot(32000, RATES_2020)).toBe(3617.34)
    })

    test('Célibataire avec 18 650 €', () => {
      expect(impot(18650, RATES_2020)).toBe(944.35)
    })

    test('Célibataire avec 32 000 € en 2019', () => {
      expect(impot(32000, RATES_2019)).toBe(3743.56)
    })

    test('Célibataire avec 18 650 € en 2019', () => {
      expect(impot(18650, RATES_2019)).toBe(1201.9)
    })

  })

  describe('impotWithPart()', () => {

    test('Célibataire avec 32 000 €', () => {
      expect(impotWithPart(32000, 1, RATES_2020)).toBe(3617)
    })

    test('Couple + 2 mineurs avec 55 950 €', () => {
      expect(impotWithPart(55950, 3, RATES_2020)).toBe(2833)
    })

    test('Célibataire avec 32 000 € en 2019', () => {
      expect(impotWithPart(32000, 1, RATES_2019)).toBe(3744)
    })

    test('Célibataire avec 55 950 € en 2019', () => {
      expect(impotWithPart(55950, 3, RATES_2019)).toBe(3606)
    })

  })

  describe('impotWithTranches()', () => {

    test('Célibataire avec 32 000 €', () => {
      expect(impotWithTranches(32000, RATES_2020)).toEqual([0, 1715.34, 1902, 0, 0])
    })

    test('Célibataire avec 18 650 €', () => {
      expect(impotWithTranches(18650, RATES_2020)).toEqual([0, 944.35, 0, 0, 0])
    })

    test('Célibataire avec 32 000 € en 2019', () => {
      expect(impotWithTranches(32000, RATES_2019)).toEqual([0, 2482.06, 1261.5, 0, 0])
    })

    test('Célibataire avec 18 650 € en 2019', () => {
      expect(impotWithTranches(18650, RATES_2019)).toEqual([0, 1201.9, 0, 0, 0])
    })

  })

  describe('impotReversed()', () => {

    test('Célibataire avec 32 000 €', () => {
      expect(impotReversed(32000 - 3617.34, RATES_2020)).toBe(32000)
    })

  })
})
