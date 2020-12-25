import { combineReducers } from 'redux';
import { geoSearchReducer } from './geoSearchReducer';

export default combineReducers({
    geoNames: geoSearchReducer,
})