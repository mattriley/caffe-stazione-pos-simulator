import './css/MenuPath.css';
import _ from 'lodash';

const MenuPath = ({ util, menuReader }) => ({ item, onClick }) => {

    if (!item.labelSingleLine) return null;
    if (item.items) return null;
    // if (!item.items.length) return;

    const pathIncrements = util.inflate(item.pathArray);
    pathIncrements.shift(); // remove ["HOME"]

    const pathItems = pathIncrements.map(path => {

        const { labelSingleLine, backColor, textColor } = menuReader.getMenuItem(path);
        // const label = { __html: labelSingleLine.length ? labelSingleLine : '&nbsp;&nbsp;&nbsp;' };
        const label = { __html: labelSingleLine.length ? labelSingleLine : '(BLANK)' };

        const className = `path-segment back-color-${backColor} text-color-${textColor}`.toLowerCase();
        return <span className={className} dangerouslySetInnerHTML={label} />
    });

    const isPenultimate = i => i === pathItems.length - 1;
    const fullPaths = pathItems.flatMap((el, i) => [el, isPenultimate(i) ? null : ' ▶︎ ']);

    const keywords = item.keywords?.map(keyword => {
        return <span className="keyword">{keyword}</span>
    });

    return <div className="path" onClick={onClick}>{fullPaths}{keywords}</div>
}

export default MenuPath;
