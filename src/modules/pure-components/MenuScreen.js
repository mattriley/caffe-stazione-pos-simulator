const MenuScreen = ({ pureComponents, menuReader }) => ({ path, selectedItem }) => {

    const submenu = menuReader.getSubmenu(path);
    if (!submenu.rows) return null;

    const isSelected = menuReader.isSelected(selectedItem);

    const rows = submenu.rows.map((row, index) => {
        const buttons = row.map(item => {
            const selected = isSelected(item);
            return <pureComponents.MenuButton key={item.id} selected={selected} item={item} />
        });
        return <div key={index} className="menu-row">{buttons}</div>;
    });

    return <div className="menu-screen">{rows}</div>;
}

export default MenuScreen;
