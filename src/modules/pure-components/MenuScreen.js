const MenuScreen =
  ({ pureComponents, menuReader }) =>
      ({ path, selectedItem }) => {
          const submenu = menuReader.getSubmenu(path);
          if (!submenu.items) return null;

          const isSelected = menuReader.isSelected(selectedItem);

          const items = submenu.items.map(item => {
              const selected = isSelected(item);
              return (
                  <pureComponents.MenuButton
                      key={item.id}
                      selected={selected}
                      item={item}
                  />
              );
          });

          return <div className="menu-screen">{items}</div>;
      };

export default MenuScreen;
