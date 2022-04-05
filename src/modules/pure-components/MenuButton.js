const MenuButton = () => ({ item, selected = false }) => {
    const { label, backColor, textColor = 'black', span = 1 } = item;
    const buttonText = { __html: label.replaceAll('\n', '<br>') };
    return <div className={`menu-button span-${span} selected-${selected}`}>
        <div className={`background back-color-${backColor}`}></div>
        <div className={`foreground text-color-${textColor}`} dangerouslySetInnerHTML={buttonText}></div>
    </div>;
}

export default MenuButton;
