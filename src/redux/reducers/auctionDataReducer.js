const auctionDataReducer = (state, action) => ({...state, auctionData: makeArray(action.payload)})

const makeArray = (data) => {
    let NoReturns = data.match(/"return/g).length
    let returnIndex = data.indexOf('"return') + 9
    let rawData = ''

    for(let i = 0; i < NoReturns; i += 1) {

        rawData = rawData.concat(
            data.slice(returnIndex, data.indexOf('-- [', returnIndex) - 4)
        )

        returnIndex = data.indexOf('"return', returnIndex) + 9

    }

    return rawData
        .replace(/},$/, '')
        .replace(/{/, '')
        .replace(/\\"/g, '')
        .split('},{')
        .map(auction => auction.split(','))
}

export default auctionDataReducer