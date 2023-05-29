export default ({ config }) => term => {

    const terms = term.split(' ');

    return config.menu.list.filter(item => {
        return terms.every(term => new RegExp(`${term}`, 'i').test(item.searchText));
    });
};
