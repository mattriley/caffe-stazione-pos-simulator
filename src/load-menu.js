import _ from 'lodash';
import _menu from './menu.json';

const { abbreviations, foodInstructions, beverageInstructions } = _menu;

const loadMenu = () => {

    let id = 0;

    const tree = {};
    const allItems = [];

    const transformMenuBetter = (menu, path = []) => {

        const items = menu.items?.flatMap(item => {

            id++;

            const key = item.label.replaceAll('\n', '');

            const pathStr = path.concat(key).join('.');


            if (pathStr.endsWith('.BEV INST')) {
                item.items = beverageInstructions.items;
            }

            if (pathStr.endsWith('.FOOD INST')) {
                item.items = foodInstructions.items;
            }

            item.labelSingleLine = key;
            const newPath = path.concat(key);

            const keywords = item.keywords ?? [];

            Object.entries(abbreviations).forEach(([abbr, full]) => {
                if (item.labelSingleLine.split(' ').find(word => word === abbr)) {
                    keywords.push(full);
                }
            });


            const searchTerms = [...newPath, ...keywords]
                .map(term => term.replace('W/', 'WITH'));

            const searchText = searchTerms.join(' ');

            const pathArray = [...newPath];

            const newItem = { pathArray, id, searchText, keywords, ...item };

            allItems.push(newItem);

            const setPath = newPath.flatMap(key => ['tree', key]).join('.');
            _.set(tree, setPath, newItem);
            const res = transformMenuBetter(newItem, newPath);
            newItem.items = res.items;
            return newItem;
        });

        if (!items) return {};

        return { items };

    };


    transformMenuBetter(_menu);

    return { tree, list: allItems };

};

export default loadMenu;
