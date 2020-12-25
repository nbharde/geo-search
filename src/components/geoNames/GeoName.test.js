import React from 'react'
import GeoName from "./GeoName";
import { render } from '@testing-library/react'

describe('GeoName Component', () => {
    it("renders successfully", () => {
        render(<GeoName name={{}} index={0}/>)
    })
});
