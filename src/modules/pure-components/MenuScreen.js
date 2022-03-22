import './css/MenuScreen.css';
import _ from 'lodash';

const MenuScreen = ({ pureComponents, lib, data }) => ({ path, selectedItem }) => {

  const submenu = data.getSubmenu(path);
  if (!submenu.rows) return null;

  const isSelected = lib.isSelected(selectedItem);

  const rows = submenu.rows.map(row => {
    const buttons = row.map(item => {
      const selected = isSelected(item);
      return <pureComponents.MenuButton selected={selected} item={item} />
    });
    return <div className="menu-row">{buttons}</div>;
  });

  return <div className="menu-screen">{rows}</div>;
}

export default MenuScreen;
