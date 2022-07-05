export default ({ pureComponents, components, menuReader }) => () => {

    return <div>
        <pureComponents.DevBar />
        <components.SearchScreen {...{ pureComponents, menuReader }} />
    </div>;

};
