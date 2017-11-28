import { loadAuctionData } from './../redux/actions'
import reducers from '../redux/reducers/reducers.js'
import fs from 'fs'

let auctionDataLua = fs.readFileSync(__dirname + '/testDependencies/Auc-ScanData.lua').toString()
let priceTestDataLua = fs.readFileSync(__dirname + '/testDependencies/price-test.lua').toString()

let state = {}

describe('Auction data types:', () => {

    /* Data for general tests */
    loadAuctionData.payload = auctionDataLua
    let auctionData = reducers.loadAuctionData(state, loadAuctionData).auctionData

    it('is object', () => {
        expect(typeof auctionData).toBe('object')
    })

    it('are keys objects', () => {
        expect(areKeysOfAuctionDataAreObjects(auctionData)).toBe(true)
    })

    
})

describe('Auction Data price tests: ', () => {
    
    /* Data for price tests */
    loadAuctionData.payload = priceTestDataLua
    let priceTestData = reducers.loadAuctionData(state, loadAuctionData).auctionData

    it('average buyout', () => {
        expect(priceTestData['Copper Ore'].avgBuyout).toBe(3.0642)
    })

    it('minimum buyout', () => {
        expect(priceTestData['Copper Ore'].minBuyout).toBe(0.1000)
    })

    it('median buyout', () => {
        expect(priceTestData['Copper Ore'].medianBuyout).toBe(3.0000)
    })
    
    it('amount of items', () => {
        expect(priceTestData['Copper Ore'].amount).toBe(53)
    })
})

const areKeysOfAuctionDataAreObjects = (auctionData) => {
    for(let item in auctionData) {
        if(typeof auctionData[item] !== 'object') {
            return false
        }
    }

    return true
}