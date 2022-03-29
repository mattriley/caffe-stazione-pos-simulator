const MenuItemKeywords = () => ({ item }) => {

    const keywords = item.keywords?.map(keyword => {
        return <span key={keyword} className="keyword">{keyword}</span>
    });

    return <span>{keywords}</span>
}

export default MenuItemKeywords;
