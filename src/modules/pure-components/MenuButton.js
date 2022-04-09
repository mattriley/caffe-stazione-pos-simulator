const MenuButton = () => ({ item, selected = false }) => {
    const { label, backColor, textColor = 'black', span = 1 } = item;
    const buttonText = { __html: label.replaceAll('\n', '<br>') };
    const gridColumn = item.x ? `${item.x} / span ${span}` : undefined;
    const gridRow = item.y ? `${item.y} / span 1` : undefined;
    return <div 
        style={{gridColumn, gridRow}}
        className={`
        menu-button 
        span-${span} selected-${selected}
        back-color-${backColor}
        text-color-${textColor}
    `} dangerouslySetInnerHTML={buttonText} />
}

export default MenuButton;
