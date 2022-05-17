import _ from 'lodash';
import menu from './menu.json';

const { abbreviations, foodInstructions, beverageInstructions, searchTermReplacements } = menu;

const itemsReplacements = [beverageInstructions, foodInstructions].reduce((acc, item) => {
    return { ...acc, [item.label]: item.items };
}, {});

const loadMenu = () => {

    let id = 0;
    const tree = {};
    const list = [];

    const transformRecursive = (childMenu, parentPath = []) => {
        const items = childMenu.items?.flatMap(item => {

            id++;
            const name = item.label.replaceAll('\n', '');
            const items = itemsReplacements[name] ?? item.items;
            const words = name.split(' ');
            const keywords = Object.entries(abbreviations).reduce((acc, [abbr, full]) => {
                return words.indexOf(abbr) > -1 ? acc.concat(full) : acc;
            }, item.keywords ?? []);

            const pathArray = parentPath.concat(name);
            const searchTerms = [...pathArray, ...keywords].map(term => searchTermReplacements[term] ?? term);
            const searchText = searchTerms.join(' ');
            const newItem = { ...item, id, name, items, pathArray, searchText, keywords };

            const setPath = pathArray.flatMap(key => ['tree', key]).join('.');
            _.set(tree, setPath, newItem);
            list.push(newItem);
            newItem.items = transformRecursive(newItem, pathArray).items;
            return newItem;
        });

        return { items };
    };

    transformRecursive(menu);
    return { tree, list };
};

export default loadMenu;
