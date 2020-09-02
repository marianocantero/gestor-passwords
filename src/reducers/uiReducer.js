import { types } from "../types/types";

const initialState = {
    loading: false,
    error: null
}


export const uiReducer = ( state = initialState , action) => {
    switch (action.type) {
        case types.error:
            return {
                ...state, 
                error: action.payload
            }
        case types.removeError:
            return{
                ...state,
                error:null
            }
            
            
    
        default:
            return state;
    }
}