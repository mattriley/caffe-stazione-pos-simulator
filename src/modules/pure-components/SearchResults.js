const SearchResults = ({ pureComponents }) => ({ items, onSelection, selectedItem }) => {
    const results = selectedItem ? [selectedItem] : items;

    const searchResults = results.map(item => {
        return <pureComponents.SearchResult key={item.id} item={item} onClick={() => onSelection(item)} />;
    });

    const className = searchResults.length === 1 ? 'single-search-result' : 'search-results';

    return <div className={className}>{searchResults}</div>;
};

export default SearchResults;
