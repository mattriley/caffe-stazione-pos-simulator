import './MenuScreenPath.css';

const MenuScreenPath = ({ pureComponents, lib }) => ({ selectedItem }) => {

    if (!selectedItem) return null;

    const pathIncrements = lib.inflate(selectedItem.pathArray);

    const menuScreens = pathIncrements.map(path => {
        return <pureComponents.MenuScreen path={path} selectedItem={selectedItem} />
    });

    return <div className="menu-screen-path">{menuScreens}</div>
}

export default MenuScreenPath;
