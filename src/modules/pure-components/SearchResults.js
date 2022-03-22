import './css/SearchResults.css';

const SearchResults = ({ pureComponents }) => ({ items, onSelection, selectedItem }) => {
    const results = selectedItem ? [selectedItem] : items;

    const searchResults = results.map(item => {
        return <pureComponents.MenuPath item={item} onClick={() => onSelection(item)} />
    });

    // todo: if one result, center it...

    const className = searchResults.length === 1 ? 'single-search-result' : 'search-results';

    return <div className={className}>{searchResults}</div>
};

export default SearchResults;
