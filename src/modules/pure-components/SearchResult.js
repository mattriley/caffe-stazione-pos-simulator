export default ({ pureComponents }) => ({ item, onClick }) => {

    if (!item.name) return null;
    if (item.items) return null;

    return <div className="search-result" onClick={onClick}>
        <pureComponents.MenuItemPath item={item} />
        <pureComponents.MenuItemKeywords item={item} />
    </div>;

};
