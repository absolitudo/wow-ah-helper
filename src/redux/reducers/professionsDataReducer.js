const professionsDataReducer = (state, action) => ({...state,
    professionsData: action.payload,
    appState: {...state.appState,
        professionsData: true
    }
})




export default professionsDataReducer