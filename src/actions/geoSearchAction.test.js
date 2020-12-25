import * as actions from './geoSearchAction'
import * as types from '../constant/types'

describe('actions', () => {
    it('should create an action to search geo name', () => {
        const data = {
            postalCodes: []
        }
        const expectedAction = {
          type: types.SEARCH_GEO_NAME,
          payload: data.postalCodes
        }
        expect(actions.searchGeoNames(data)).toEqual(expectedAction)
    });
});