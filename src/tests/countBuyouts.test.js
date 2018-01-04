import { countBuyouts } from '../redux/reducers/reducers'

const onePriceOnce = [4]
const onePriceMultileTimes = [4, 4, 4, 4]
const onePriceOnePrice = [2, 4]
const onePriceMultileTimesOnePriceMultileTimes = [2, 2, 2, 2, 5, 5]
const lotOfPriceManyTimes = [1, 2, 2, 5, 5, 5, 5, 5, 6, 6, 9, 9, 9]

describe('Count buyouts:', () => {
    it('one price once', () => {
        expect(countBuyouts(onePriceOnce)).toEqual([{
            price: 4,
            amount: 1
        }])
    })

    it('one price multiple times', () => {
        expect(countBuyouts(onePriceMultileTimes)).toEqual([{
            price: 4,
            amount: 4
        }])
    })

    it('one price once, an other price once', () => {
        expect(countBuyouts(onePriceOnePrice)).toEqual([{
            price: 2,
            amount: 1
        },{
            price: 4,
            amount: 1
        }])
    })

    it('one price multiple times, an other price multile times', () => {
        expect(countBuyouts(onePriceMultileTimesOnePriceMultileTimes)).toEqual([{
            price: 2,
            amount: 4
        },{
            price: 5,
            amount: 2
        }])
    })

    it('lot of prices, lots of times', () => {
        expect(countBuyouts(lotOfPriceManyTimes)).toEqual([{
            price: 1,
            amount: 1
        },{
            price: 2,
            amount: 2
        },{
            price: 5,
            amount: 5
        },{
            price: 6,
            amount: 2
        },{
            price: 9,
            amount: 3
        }])
    })
    
})