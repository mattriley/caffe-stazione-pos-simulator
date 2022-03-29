const MenuButton = () => ({ item, selected = false }) => {
    const { label, backColor, textColor = 'black', span = 1 } = item;
    const className = `menu-button span-${span} selected-${selected} back-color-${backColor} text-color-${textColor}`.toLowerCase();
    const buttonText = { __html: label.replaceAll('\n', '<br>') };
    return <button className={className} dangerouslySetInnerHTML={buttonText}></button>;
}

export default MenuButton;
