import React, { useState } from 'react';

const SearchScreen = ({ pureComponents, menuReader }) => () => {

    const [searchResults, setSearchResults] = useState(menuReader.searchMenu(''));
    const [selectedItem, setSelectedItem] = useState(undefined);

    const onSearch = term => {
        const results = menuReader.searchMenu(term);
        const item = results.length === 1 ? results[0] : undefined;
        onSelection(item, results);
    }

    const onSelection = (item, results = [item]) => {
        setSelectedItem(item);
        setSearchResults(results);
    };

    return <div className="search-screen-container">
        <pureComponents.SearchBar onSearch={onSearch} />
        <pureComponents.SearchResults items={searchResults} onSelection={onSelection} />
        <pureComponents.MenuScreenPath selectedItem={selectedItem} />
    </div>

};

export default SearchScreen;
