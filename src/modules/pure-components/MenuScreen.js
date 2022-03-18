import './MenuScreen.css';
import _ from 'lodash';

const MenuScreen = ({ pureComponents, lib, menu }) => ({ path, selectedItem }) => {

  const fullPath = path.flatMap(p => ['tree', p]);
  const submenu = _.get(menu.tree, fullPath);

  if (!submenu.rows) return null;

  const selectedPathIncrements = lib.inflate(selectedItem.pathArray).map(path => path.join('.'));

  const rows = submenu.rows.map(row => {
    const buttons = row.map(item => {
      const selected = !!selectedPathIncrements.find(path => path === item.path);
      return <pureComponents.MenuButton selected={selected} item={item} />
    });
    return <div className="menu-row">{buttons}</div>;
  });

  return <div className="menu-screen">{rows}</div>;
}

export default MenuScreen;
