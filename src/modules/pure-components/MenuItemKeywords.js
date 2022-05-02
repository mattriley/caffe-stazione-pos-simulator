const MenuItemKeywords = () => ({ item }) => {

    return item.keywords.map(keyword => {
        return <span key={keyword} className="keyword">{keyword}</span>;
    });

};

export default MenuItemKeywords;
