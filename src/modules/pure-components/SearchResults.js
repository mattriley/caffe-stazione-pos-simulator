import './css/SearchResults.css';

const SearchResults = ({ pureComponents, menu }) => ({ items, onSelection, selectedItem }) => {
    const results = selectedItem ? [selectedItem] : items;

    const searchResults = results.map(item => {
        return <pureComponents.MenuPath item={item} onClick={() => onSelection(item)} />
    });

    // todo: if one result, center it...

    return <div className="search-results">{searchResults}</div>
};

export default SearchResults;
