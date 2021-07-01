import {getAuthUserData} from "./auth-reducer";

const INITIALIZATION_SUCCESS = 'INITIALIZATION-SUCCESS'

type initialStateType = {
    initialized: boolean
}

let initialState : initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any) : initialStateType => {

    switch(action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

type initializationSuccessActionType = {
    type: typeof INITIALIZATION_SUCCESS
}

export let initializationSuccess = () : initializationSuccessActionType => ({ type: INITIALIZATION_SUCCESS })

export const initializeApp = () => (dispatch : any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializationSuccess())
        })
}

export default appReducer