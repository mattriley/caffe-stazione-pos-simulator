import _ from 'lodash';
import _menu from './menu.json';

const loadMenu = () => {

    let id = 0;

    const tree = {};
    const allItems = [];

    let bevInst, foodInst;

    const transformMenuBetter = (menu, path = []) => {

        const items = menu.items?.flatMap(item => {

            id++;

            const key = item.label.replaceAll('\n', '');

            const pathStr = path.concat(key).join('.');

            if (pathStr === 'BEV INST') {
                bevInst = item;
                return [];
            }

            if (pathStr.endsWith('.BEV INST')) {
                item.items = bevInst.items;
            }

            if (pathStr === 'FOOD INST') {
                foodInst = item;
                return [];
            }

            if (pathStr.endsWith('.FOOD INST')) {
                item.items = foodInst.items;
            }

            item.labelSingleLine = key;
            const newPath = path.concat(key);

            const keywords = item.keywords ?? [];

            if (item.labelSingleLine.includes('M/SHAKE')) {
                keywords.push('MILKSHAKE');
            }

            if (item.labelSingleLine.includes('LGE ')) {
                keywords.push('LARGE');
            }

            if (item.labelSingleLine.includes('SML ')) {
                keywords.push('SMALL');
            }

            if (item.labelSingleLine.includes('SM ')) {
                keywords.push('SMALL');
            }

            if (item.labelSingleLine.includes('GLS ')) {
                keywords.push('GLASS');
            }

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
