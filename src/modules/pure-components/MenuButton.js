const MenuButton = () => ({ item, selected = false }) => {
    const { label, backColor, textColor = 'black', span = 1 } = item;
    const buttonText = { __html: label.replaceAll('\n', '<br>') };
    return <div className={`
        menu-button 
        span-${span} selected-${selected}
        back-color-${backColor}
        text-color-${textColor}
    `} dangerouslySetInnerHTML={buttonText} />;
};

export default MenuButton;
