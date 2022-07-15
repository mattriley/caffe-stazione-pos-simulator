import _ from 'lodash';
import fs from 'fs';

const stdinBuffer = fs.readFileSync(0, 'utf-8');
const menuInput = JSON.parse(stdinBuffer.toString());

const { abbreviations, foodInstructions, beverageInstructions, searchTermReplacements } = menuInput;

const itemsReplacements = [beverageInstructions, foodInstructions].reduce((acc, item) => {
    return { ...acc, [item.label]: item.items };
}, {});


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

transformRecursive(menuInput);
const menuOutput = { tree, list };

console.log(JSON.stringify(menuOutput));
