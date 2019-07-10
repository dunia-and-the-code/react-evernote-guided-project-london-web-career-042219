import React from 'react';

const SortBy = (props) => {
    return (
        <div className="sortBy">
            <select onChange={props.handleChange}>
                <option value="Sort by">Sort by</option>
                <option value="Alphabetically">Alphabetically</option>
                <option value="Date">Date</option>
            </select>
        </div>
    )
}

export default SortBy;