import axios from 'axios';
import { SEARCH_GEO_NAME, MAX_ROWS, USERNAME } from '../constant/types';

export const searchGeoNames = geoNames => {
    return {
        type: SEARCH_GEO_NAME,
        payload: geoNames.postalCodes
    }

    
} 

export const loadSearchResult = (query) => async (dispatch) => {
    const response = await axios.get(`http://api.geonames.org/postalCodeSearchJSON?postalcode=${query}&maxRows=${MAX_ROWS}&username=${USERNAME}`);
    dispatch(searchGeoNames(response.data));
}