import './css/SearchResult.css';

const SearchResult = ({ pureComponents }) => ({ item, onClick }) => {

    if (!item.labelSingleLine) return null;
    if (item.items) return null;

    return <div className="search-result" onClick={onClick}>
        <pureComponents.MenuPath item={item} />
        <pureComponents.MenuItemKeywords item={item} />
    </div>
}

export default SearchResult;
