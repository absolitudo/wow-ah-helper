import { loadAuctionData } from './../redux/actions'
import reducers from '../redux/reducers/reducers.js'
import fs from 'fs'


let auctionData = fs.readFileSync(__dirname + '/testDependencies/Auc-ScanData.lua').toString()
let state = {}
loadAuctionData.payload = auctionData

it('Auction data: is object', () => {
    expect(
        typeof reducers.loadAuctionData(state, loadAuctionData)
    ).toBe('object')
})
