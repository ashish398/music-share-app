import React from 'react';

const SearchForm = () => {
    return (
        <div>
            <button>All Songs</button>
            <label htmlFor="search">Search by tag</label>
            <input id="search" type="text"/>
        </div>
    );
};

export default SearchForm;