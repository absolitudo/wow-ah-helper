import { countBuyouts } from '../components/priceChart'

let onePriceOnce = [4]
let onePriceMultileTimes = [4, 4, 4, 4]
let onePriceOnePrice = [2, 4]

describe('Count buyouts:', () => {
    it('one price once', () => {
        expect(countBuyouts(onePriceOnce)).toBe([{
            price: 4,
            amount: 1
        }])
    })

    it('one price multiple times', () => {
        expect(countBuyouts(onePriceMultileTimes)).toBe([{
            price: 4,
            amount: 4
        }])
    })

    it('one price once, an other price once', () => {
        expect(countBuyouts(onePriceOnePrice)).toBe([{
            price: 2,
            amount: 1
        },{
            price: 4,
            amount: 1
        }])
    })

})