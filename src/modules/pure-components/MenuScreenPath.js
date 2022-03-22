import './css/MenuScreenPath.css';

const MenuScreenPath = ({ pureComponents, util }) => ({ selectedItem }) => {

    if (!selectedItem) return null;

    const pathIncrements = util.inflate(selectedItem.pathArray);

    const menuScreens = pathIncrements.map(path => {
        return <pureComponents.MenuScreen path={path} selectedItem={selectedItem} />
    });

    return <div className="menu-screen-path">{menuScreens}</div>
}

export default MenuScreenPath;
