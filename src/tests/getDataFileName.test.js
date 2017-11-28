import { getDataFileName } from '../redux/actions'
import reducers from '../redux/reducers/reducers'

it('Data file name type', () => {
    expect(
        typeof reducers.getDataFileName({}, getDataFileName('Auction data')).dataFileName
    ).toBe('string')
})


it('Data file name type', () => {
    expect(
        reducers.getDataFileName({}, getDataFileName('Auction data')).dataFileName
    ).toBe('Auction data')
})