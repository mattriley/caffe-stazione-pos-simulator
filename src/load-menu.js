import _ from 'lodash';
import _menu from './menu.json';

const { abbreviations, foodInstructions, beverageInstructions } = _menu;

const itemsReplacements = {
    'BEV INST': beverageInstructions.items,
    'FOOD INST': foodInstructions.items
};

const loadMenu = () => {

    let id = 0;

    const tree = {};
    const allItems = [];

    const transformRecursive = (menu, path = []) => {

        const items = menu.items?.flatMap(item => {

            id++;

            const name = item.label.replaceAll('\n', '');

            item.items = itemsReplacements[name] ?? item.items;


            const words = name.split(' ');
            const keywords = Object.entries(abbreviations).reduce((acc, [abbr, full]) => {
                return words.indexOf(abbr) > -1 ? acc.concat(full) : acc;
            }, item.keywords ?? []);

            const newPath = path.concat(name);

            const searchTerms = [...newPath, ...keywords]
                .map(term => term.replace('W/', 'WITH'));

            const searchText = searchTerms.join(' ');

            const pathArray = [...newPath];

            const newItem = { id, name, pathArray, searchText, keywords, ...item };

            allItems.push(newItem);

            const setPath = newPath.flatMap(key => ['tree', key]).join('.');
            _.set(tree, setPath, newItem);
            const res = transformRecursive(newItem, newPath);
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
