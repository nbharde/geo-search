import React from 'react'

const GeoName = ({name, index}) => {
    const { countryCode, placeName, postalCode } =  name;
    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{countryCode}</td>
            <td>{placeName}</td>
            <td>{postalCode}</td>
        </tr>
    )
}

export default GeoName
