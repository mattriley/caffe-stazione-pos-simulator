import './MenuPath.css';
import _ from 'lodash';

const MenuPath = ({ lib, menu }) => ({ item, onClick }) => {

    const pathIncrements = lib.inflate(item.pathArray);
    pathIncrements.shift(); // remove ["HOME"]

    const pathItems = pathIncrements.map(path => {
        const fullPath = path.flatMap(p => ['tree', p]);

        const { labelSingleLine, backColor, textColor } = _.get(menu.tree, fullPath);
        const className = `path-segment back-color-${backColor} text-color-${textColor}`.toLowerCase();
        return <span className={className}>{labelSingleLine}</span>
    });

    const isPenultimate = i => i === pathItems.length - 1;
    const fullPaths = pathItems.flatMap((el, i) => [el, isPenultimate(i) ? null : ' ▶︎ ']);

    const keywords = item.keywords?.map(keyword => {
        return <span className="keyword">{keyword}</span>
    });

    return <div className="path" onClick={onClick}>{fullPaths}{keywords}</div>
}

export default MenuPath;
