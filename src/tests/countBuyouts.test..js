import { countBuyouts } from '../components/priceChart'

let oneBuyoutData = [4]

describe('Count buyouts:', () => {
    it('one number', () => {
        expect(countBuyouts(oneBuyoutData)).toBe({
            price: 4,
            amount: 1
        })
    })
})