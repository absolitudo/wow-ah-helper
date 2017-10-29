const reducers = {
    loadAuctionData: (state, action) => (
        {...state,
            auctionData: convertToAuctionData(state, action.payload),
            appState: {...state.appState,
                auctionData: true,
                auctionDataProcessing: false
            }
        }
    ),

    loadProfessionsData: (state, action) => (
        {...state,
            professionsData: action.payload,
            appState: {...state.appState,
                professionsData: true
            }
        }
    ),

    changeAuctionDataName: (state, action) => (
        {...state,
            appState: {...state.appState,
                auctionDataFileName: action.payload
            }
        }
    ),

    auctionDataProcessing: (state, action) => (
        {...state,
            appState: {...state.appState,
                auctionDataProcessing: action.payload
            }
        }
    ),

    selectProfession: (state, action) => (
        {...state,
            appState: {...state.appState,
                profession: action.payload
            }
        }
    ),

    updateSearchTerm: (state, action) => (
        {...state,
            appState: {...state.appState,
                searchTerm: action.payload
            }
        }
    ),
}



const convertToAuctionData = (state, data) => {
    let NoReturns = data.match(/"return/g).length
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
                auctionData[auction[8]].buyouts.push(+(auction[16] / auction[10]))
            } else {
                auctionData[auction[8]] = {
                    buyouts: [+(auction[16] / auction[10])]
                }
            }
        })

    /* Extra data for each auction */
    for(let auction in auctionData) {
        auctionData[auction].buyouts.sort((a, b) => a - b)
        auctionData[auction].avgBuyout = getAvgBuyout(auctionData[auction].buyouts)
        auctionData[auction].minBuyout = auctionData[auction].buyouts[0]
        auctionData[auction].medianBuyout = (auctionData[auction].buyouts[Math.floor((auctionData[auction].buyouts.length + 1)/2) - 1] + auctionData[auction].buyouts[Math.ceil((auctionData[auction].buyouts.length + 1)/2) - 1]) / 2
    }

    return auctionData
}

const getAvgBuyout = (buyouts) => buyouts.reduce((acc, curr) => +acc + +curr, 0)/buyouts.length


export default reducers