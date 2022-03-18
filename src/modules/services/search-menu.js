const searchMenu = ({ menu }) => term => {
    return menu.list.filter(item => new RegExp(`${term}`, 'i').test(item.searchText))
};

export default searchMenu;
