import _ from 'lodash';
import _menu from './menu.json';

const { abbreviations, foodInstructions, beverageInstructions } = _menu;

const itemsReplacements = [beverageInstructions, foodInstructions].reduce((acc, item) => {
    return { ...acc, [item.label]: item.items };
}, {});

const loadMenu = () => {

    let id = 0;

    const tree = {};
    const allItems = [];

    const transformRecursive = (menu, parentPath = []) => {

        const items = menu.items?.flatMap(item => {

            id++;
            const name = item.label.replaceAll('\n', '');
            const items = itemsReplacements[name] ?? item.items;
            const words = name.split(' ');
            const keywords = Object.entries(abbreviations).reduce((acc, [abbr, full]) => {
                return words.indexOf(abbr) > -1 ? acc.concat(full) : acc;
            }, item.keywords ?? []);

            const path = parentPath.concat(name);

            const searchTerms = [...path, ...keywords]
                .map(term => term.replace('W/', 'WITH'));

            const searchText = searchTerms.join(' ');

            const pathArray = [...path];

            const newItem = { ...item, id, name, items, pathArray, searchText, keywords };

            allItems.push(newItem);

            const setPath = path.flatMap(key => ['tree', key]).join('.');
            _.set(tree, setPath, newItem);
            const res = transformRecursive(newItem, path);
            newItem.items = res.items;
            return newItem;
        });

        if (!items) return {};

        return { items };

    };


    transformRecursive(_menu);

    return { tree, list: allItems };

};

export default loadMenu;
