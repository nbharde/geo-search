import React from 'react'
import { render } from '../../utils/testUtils'
import GeoNames from "./GeoNames";

describe('GeoNames Component', () => {
    it("renders with initialState", () => {
        render(<GeoNames />, { initialState: { geoNames: [] } })
    })

    it("renders completely", () => {
        const updateSearch = jest.fn();
        const getSearch = jest.fn();

        const initialState = { 
            initialState: { 
                geoNames: {
                    data:[{
                        name: '2104',
                        placeName: ''
                    }] 
                } 
            } 
        }
        render(<GeoNames />, initialState)
    })

});