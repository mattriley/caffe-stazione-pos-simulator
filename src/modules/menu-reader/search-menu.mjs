export default ({ constants }) => term => {

    const terms = term.split(' ');

    return constants.menu.list.filter(item => {
        return terms.every(term => new RegExp(`${term}`, 'i').test(item.searchText));
    });
};
