export default ({ menuReader }) => ({ item }) => {

    const items = menuReader.getMenuItemPath(item.pathArray);
    items.shift(); // remove ["HOME"]

    const pathItems = items.map(item => {
        const { name, backColor, textColor } = item;
        const label = name.length ? name : '(BLANK)';
        const className = `path-segment back-color-${backColor} text-color-${textColor}`.toLowerCase();
        return <span key={label} className={className}>{label}</span>;
    });

    const isPenultimate = i => i === pathItems.length - 1;
    return pathItems.flatMap((el, i) => [el, isPenultimate(i) ? null : ' ▶︎ ']);

};
