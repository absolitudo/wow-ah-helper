const reducers = {
    loadAuctionData: (state, action) => (
        {...state,
            auctionData: convertToAuctionData(state, action.payload),
            auctionDataProcessing: false
        }
    ),

    loadProfessionsData: (state, action) => (
        {...state,
            professionsData: action.payload,
        }
    ),

    changeAuctionDataName: (state, action) => (
        {...state,
            auctionDataFileName: action.payload
        }
    ),

    auctionDataProcessing: (state, action) => (
        {...state,
            auctionDataProcessing: action.payload
        }
    ),

    selectProfession: (state, action) => (
        {...state,
            profession: action.payload
        }
    ),

    updateSearchTerm: (state, action) => (
        {...state,
            searchTerm: action.payload
        }
    ),

    selectRecipe: (state, action) => {

        /* Search for recipe in the professionsData to be able get the metadata of the recipe */
        let index

        for(let j = 0; j < state.professionsData[state.profession].length; j += 1) {
            if(action.payload === state.professionsData[state.profession][j].name) {
                index = j
                break
            }
        }

        /* If auction data avilable to the recipe then use it otherwise only use the metadata of the recipe */
        let newState = {...state,
            selectedRecipeName: action.payload,
            selectedRecipe: !state.auctionData ? {...state.professionsData[state.profession][index]} : {...state.auctionData[action.payload],
                ...state.professionsData[state.profession][index]
            }
        }

        /* Get the auctionData of the recipe ingredients, the metadata of them is included in the recipe metadata already, smash the metadata with the auctiondata of the ingredients together*/
        if(newState.selectedRecipe.ingredients){
            newState.selectedRecipe.ingredients.map((ingredient, i) => {
                return Object.assign(ingredient, state.auctionData[newState.selectedRecipe.ingredients[i].name])
            })
        }


        return newState
    }
        
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