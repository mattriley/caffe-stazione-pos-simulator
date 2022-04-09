const MAX_NUMBER_OF_BUTTONS=40;

const getSum = (total, item) => {
  const width = item.span ?? 1;
  return total + width;
}

const MenuScreen =
  ({ pureComponents, menuReader }) =>
  ({ path, selectedItem }) => {
    const submenu = menuReader.getSubmenu(path);
    if (!submenu.items) return null;

    const numberButtons = submenu.items.reduce(getSum, 0);

    const spacers = [...Array(MAX_NUMBER_OF_BUTTONS - numberButtons)].map(i => {
      return <pureComponents.SpacerButton backColor={submenu.backColor}/>;
    });

    const isSelected = menuReader.isSelected(selectedItem);

    const items = submenu.items.map((item) => {
      const selected = isSelected(item);
      return (
        <pureComponents.MenuButton
          key={item.id}
          selected={selected}
          item={item}
        />
      );
    });

    return <div className="menu-screen">{items}{spacers}</div>;
  };

export default MenuScreen;
