import _ from 'lodash';
import _menu from './data/menu.json';

const loadMenu = () => {

    // const _menu = {
    //     items: [
    //         {
    //             label: 'HOME',
    //             ...__menu
    //         }
    //     ]
    // }



    const tree = {};
    const allItems = [];
    const rowSpan = 5;

    let bevInst;

    const transformMenuBetter = (menu, path = []) => {
        const items = menu.items?.flatMap(item => {
            const key = item.label.replaceAll('\n', '');

            const pathStr = path.concat(key).join('.');

            if (pathStr === 'BEV INST') {
                bevInst = item;
                console.log({ bevInst });
                return [];
            }

            if (pathStr.endsWith('.BEV INST')) {
                // console.log(bevInst);
                item.items = bevInst.items;
            }

            item.labelSingleLine = key;
            const newPath = path.concat(key);

            const keywords = item.keywords ?? [];
            const searchTerms = [...newPath, ...keywords];
            const searchText = searchTerms.join(' ');

            const pathArray = [...newPath];
            // pathArray.pop();


            const newItem = { pathArray, path: newPath.join('.'), searchText, ...item };

            allItems.push(newItem);

            const setPath = newPath.flatMap(key => ['tree', key]).join('.');
            _.set(tree, setPath, newItem);
            const res = transformMenuBetter(newItem, newPath);
            newItem.items = res.items;
            newItem.rows = res.rows;
            return newItem;
        });

        if (!items) return {}

        const { rows = [] } = items?.reduce((acc, item) => {
            acc.row.push(item);
            acc.span += item.span ?? 1;
            if (acc.span < rowSpan) return acc;
            acc.rows.push(acc.row);
            return { ...acc, row: [], span: 0 };
        }, { rows: [], row: [], span: 0 });

        return { items, rows };

    };


    transformMenuBetter(_menu);

    return { tree, list: allItems };

}

export default loadMenu;
