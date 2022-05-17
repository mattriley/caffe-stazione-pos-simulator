export default () => ({ item }) => {

    return item.keywords.map(keyword => {
        return <span key={keyword} className="keyword">{keyword}</span>;
    });

};
