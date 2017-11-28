const reducers = {
    loadAuctionData: (state, action) => {
        
        let auctionData = convertToAuctionData(action.payload)
        return {...state,
            auctionData: auctionData,
        }
    },

    getDataFileName: (state, action) => ({...state,
            dataFileName: action.payload
    }),

    getProfessionData: (state, action) => ({...state,
        professionData: action.payload,
        professions: getProfessions(action.payload),
        selectedProfession: 'all'
    }),

    selectProfession: (state, action) => ({...state,
        selectedProfession: action.payload
    })
}

const convertToAuctionData = (data) => {
    const NoReturns = data.match(/"return/g).length
    let returnIndex = data.indexOf('"return') + 9
    let rawData = ''
    let auctionData = {}

    /* Reduce the data to only the auction data */
    for(let i = 0; i < NoReturns; i += 1) {

        rawData = rawData.concat(
            data.slice(returnIndex, data.indexOf('-- [', returnIndex) - 4)
        )

        returnIndex = data.indexOf('"return', returnIndex) + 9

    }


    /* Modify + make array of the data then make an object out of it */
    rawData
        .replace(/},$/, '')
        .replace(/{/, '')
        .replace(/\\"/g, '')
        .split('},{')
        .forEach(auction => {
            auction = auction.split(',')
            if(auctionData[auction[8]]) {
                for(let i = 0; i < +auction[10]; i += 1) {
                    auctionData[auction[8]].buyouts.push(((+auction[16] / +auction[10]) / 10000).toFixed(4))
                }
            } else {
                let buyouts = []
                for(let i = 0; i < +auction[10]; i += 1) {
                    buyouts.push(((+auction[16] / +auction[10]) / 10000).toFixed(4))
                }
                auctionData[auction[8]] = {
                    buyouts: buyouts
                }
            }
        })

    /* Extra data for each auction */
    for(let auction in auctionData) {
        auctionData[auction].buyouts = auctionData[auction].buyouts
            .filter(buyout => buyout !== 0)
            .sort((a, b) => a - b)
        auctionData[auction].avgBuyout = +getAvgBuyout(auctionData[auction].buyouts).toFixed(4)
        auctionData[auction].minBuyout = +auctionData[auction].buyouts[0]
        auctionData[auction].medianBuyout = +getMedian(auctionData[auction].buyouts)
        auctionData[auction].amount = auctionData[auction].buyouts.length
    }

    return auctionData
}

const getAvgBuyout = (buyouts) => buyouts.reduce((acc, curr) => +acc + +curr, 0) / buyouts.length

const getMedian = (arr) =>  {
    let half = Math.floor(arr.length/2)

    if(arr.length % 2) {
        return arr[half]
    } else {
        return (arr[half-1] + arr[half]) / 2.0
    }
}

const getProfessions = (professionsData) => {
    let professions = ['all']
    for(let profession in professionsData) {
        professions.push(profession)
    }
    return professions
 }

export default reducers