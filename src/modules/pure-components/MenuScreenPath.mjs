import steps from '1up/lib/array/steps.js';

export default ({ pureComponents }) => ({ selectedItem }) => {

    if (!selectedItem) return null;

    const pathIncrements = steps(selectedItem.pathArray);

    const menuScreens = pathIncrements.map(path => {
        return (
            <pureComponents.MenuScreen
                key={path}
                path={path}
                selectedItem={selectedItem}
            />
        );
    });

    return <div className="menu-screen-path">{menuScreens}</div>;

};
