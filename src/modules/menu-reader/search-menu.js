export default ({ menu }) => term => {

    const terms = term.split(' ');

    return menu.list.filter(item => {
        return terms.every(term => new RegExp(`${term}`, 'i').test(item.searchText));
    });
};
