const reducers = {
    loadAuctionData: (state, action) => {
        
        let auctionData = convertToAuctionData(state, action.payload)
        let recipeObject
        if (state.selectedRecipe) {
            recipeObject = createSelectRecipeObject(state, auctionData, state.selectedRecipeName)

        }
        return {...state,
            auctionData: auctionData,
            auctionDataProcessing: false,
            ...recipeObject
        }
    },

    loadProfessionsData: (state, action) => (
        {...state,
            professionsData: action.payload,
            selectedRecipeName: action.payload.alchemy[0].name,
            selectedRecipe: action.payload.alchemy[0]
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

    selectRecipe: (state, action) => ({...state,
        ...createSelectRecipeObject(state, state.auctionData, action.payload)
    }),

    customPriceChange: (state, action) => {
        let newSelectedRecipe = {...state.selectedRecipe}


        /* If the recipe is getting a custom price */ 
        if(action.payload.ingredientName === newSelectedRecipe.name) {
            newSelectedRecipe.customPrice = action.payload.customPrice

        /* Else loop to search the ingredient to give it a custom price */
        } else {
            newSelectedRecipe = {...newSelectedRecipe,
                ingredients: newSelectedRecipe.ingredients.map((ingredient) => {
                    if(action.payload.ingredientName === ingredient.name) {
                        return {...ingredient,
                            customPrice: action.payload.customPrice
                        }
                    } else {
                        return ingredient
                    }
                })
            }
        }
            
        return {...state,
            selectedRecipe: newSelectedRecipe
        }
    },

    changeCalcQuantity: (state, action) => (
        {...state,
            calcProfit: {...state.calcProfit,
                quantity: action.payload
            }
        }
    ),

    toggleCalcAuctionCut: (state, action) => (
        {...state,
            calcProfit: {...state.calcProfit,
                auctionCut: state.calcProfit.auctionCut ? false : true
            }
        }
    ),

    changeCalcCalculateBy: (state, action) => (
        {...state,
            calcProfit: {...state.calcProfit,
                calculateBy: action.payload
            }
        }
    ),

    toggleShowInfoModal: (state, action) => (
        {...state,
            showInfoModal: state.showInfoModal ? false : true
        }
    ),

    showNotification: (state, action) => (
        {...state,
            notifications: [...state.notifications, action.payload]
        }
    ),

    removeNotification: (state, action) => (
        {...state,
            notifications: state.notifications.filter(notification => notification !== action.payload)
        }
    )
        
}



const convertToAuctionData = (state, data) => {
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
                auctionData[auction[8]].buyouts.push(+(auction[16] / auction[10]))
            } else {
                auctionData[auction[8]] = {
                    buyouts: [+(auction[16] / auction[10])]
                }
            }
        })

    /* Extra data for each auction */
    for(let auction in auctionData) {
        auctionData[auction].buyouts = auctionData[auction].buyouts
            .filter(buyout => buyout !== 0)
            .sort((a, b) => a - b)
        auctionData[auction].avgBuyout = getAvgBuyout(auctionData[auction].buyouts)
        auctionData[auction].minBuyout = auctionData[auction].buyouts[0]
        auctionData[auction].medianBuyout = (auctionData[auction].buyouts[Math.floor((auctionData[auction].buyouts.length + 1)/2) - 1] + auctionData[auction].buyouts[Math.ceil((auctionData[auction].buyouts.length + 1)/2) - 1]) / 2
    }

    return auctionData
}

const getAvgBuyout = (buyouts) => buyouts.reduce((acc, curr) => +acc + +curr, 0)/buyouts.length

const createSelectRecipeObject = (state, auctionData, recipeName) => {
    let index = 0
    
    /* Search for recipe in the professionsData to be able get the metadata of the recipe */
    for(let j = 0; j < state.professionsData[state.profession].length; j += 1) {
        if(recipeName === state.professionsData[state.profession][j].name) {

            index = j
            break
        }
    }



    /* If auction data avilable to the recipe then use it otherwise only use the metadata of the recipe */
    let recipeInformation = {
        selectedRecipeName: recipeName,
        selectedRecipe: !auctionData
        ? {...state.professionsData[state.profession][index],
            customPrice: undefined
        }
        : {...auctionData[recipeName],
            ...state.professionsData[state.profession][index],
            customPrice: auctionData[recipeName]
                ? auctionData[recipeName].medianBuyout
                : undefined,
            /* Metadata and prices of ingredients smashed into one object */
            ingredients: state.professionsData[state.profession][index].ingredients.map((ingredient, i) => {
                return Object.assign({}, ingredient, auctionData[ingredient.name], {
                    customPrice: auctionData[ingredient.name]
                        ? auctionData[ingredient.name].medianBuyout
                        : undefined
                })
            })
        }
    }

    return recipeInformation
}

export default reducers