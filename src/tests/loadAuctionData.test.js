import { loadAuctionData } from './../redux/actions'
import reducers from '../redux/reducers/reducers.js'
import fs from 'fs'

let auctionDataLua = fs.readFileSync(__dirname + '/testDependencies/Auc-ScanData.lua').toString()
let state = {}
loadAuctionData.payload = auctionDataLua

describe('Auction data types:', () => {
    let auctionData = reducers.loadAuctionData(state, loadAuctionData)
    it('is object', () => {
        expect(typeof auctionData).toBe('object')
    })

    it('are keys objects', () => {
        expect(areKeysOfAuctionDataAreObjects(auctionData)).toBe(true)
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