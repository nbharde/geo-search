import React, { useState } from 'react'
import { useSelector, connect } from "react-redux";
import { loadSearchResult } from '../../actions/geoSearchAction';
import GeoName from "./GeoName";

const GeoNames = ({searchData, loadSearchResult}) => {
    const searchResult = useSelector(searchData => searchData.geoNames.data)
    
    const [search, setSearch] = useState('');
    const [showPrevSearch, setShowPrevSearch] = useState(false);
    const [lastSearchKeys, setLastSearchKeys] = useState([]);

    const updateSearch = e => {
        setSearch(e.target.value);
        setShowPrevSearch(true);
    }

    const getSearch = e => {
        e.preventDefault(); //stops page refresh
        setLastSearchKeys(prevState => {
            if(prevState.length === 5) {
                prevState.shift();
                return [
                    ...prevState,
                    search
                ]
            }
            return [
                ...prevState,
                search
            ]
        })
        loadSearchResult(search);
        setSearch('');
    }

    const setPreviousSearch = searchKey => {
        setSearch(searchKey);
        setShowPrevSearch(false);
    }

    return (
        <div>
            <form onSubmit={getSearch} className="search-form shadow">
                <div className="form-content">
                    <input className="form-element" type="search" value={search} onChange={updateSearch} placeholder="Search" aria-label="Search" />
                    <button className="search-button" type="submit">Search</button>
                </div>
                { showPrevSearch && lastSearchKeys.length > 0 && search !== ''? 
                (<div className="autocomplete-container shadow">
                {
                    lastSearchKeys.map((key, index) => (
                        <div className="autocomplete-content" key={index} onClick={() => setPreviousSearch(key)}>{key}</div>
                    ))
                }
                </div>) : ''

                }
            </form>
            <table className="table-container shadow">
                <thead className="">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Country Code</th>
                    <th scope="col">Place Name</th>
                    <th scope="col">Postal Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchResult && searchResult[0].length > 0 ? searchResult[0].map((name, index) => (
                            <GeoName  key={index} name={name} index={index} />
                        )) : 
                        <tr><td colSpan={4}>No record found.</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps= state => {
    return {
        geoNames: state.postalCodes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadSearchResult: search => dispatch(loadSearchResult(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeoNames);
