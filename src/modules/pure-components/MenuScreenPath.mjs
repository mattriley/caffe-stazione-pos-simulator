import up from '1up';

export default ({ pureComponents }) => ({ selectedItem }) => {

    if (!selectedItem) return null;

    const pathIncrements = up.array.steps(selectedItem.pathArray);

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
