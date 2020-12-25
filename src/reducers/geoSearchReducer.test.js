import { geoSearchReducer } from './geoSearchReducer'
import * as types from '../constant/types'

describe('geoSearchReducer', () => {
    it('should return the initial state', () => {
        expect(geoSearchReducer(undefined, {})).toEqual({
            postalCodes: []
        })
    });

    it('should handle SEARCH_GEO_NAME', () => {
        expect(
            geoSearchReducer([], {
                type: types.SEARCH_GEO_NAME,
                payload: []
            })
        ).toEqual({'data': [[]]})
    });
});