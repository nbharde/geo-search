import { SEARCH_GEO_NAME } from '../constant/types';

const initialState = {
    postalCodes: []
}

export const geoSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_GEO_NAME:
            return {
                ...state,
                data: [action.payload]
            }
        default: 
            return state;
    }
}